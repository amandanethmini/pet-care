const router = require('express').Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const multer = require('multer');

const User = require('../models/user');

/*configure multer for file uploads */
const storage=multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'public/uploads/'); // Directory to save uploaded files
    },
    filename: function(req, file, cb) {
        cb(null,file.originalname); // Unique filename
    }
});

const upload = multer({ storage});

/*user registration */
router.post("/register",upload.single('profileImage'),async(req,res)=>{
    try{
        /*Take all information from the form*/
        const {firstName, lastName, email, password} = req.body;
        /*The uploaded file is available in req.file*/
        const profileImage = req.file ;

        if(!profileImage){
            return res.status(400).json({message: "No file uploaded"});
        }

        /*path to the uploaded profile photo*/
        const profileImagePath=profileImage.path

        /*check if user exists*/
        const existingUser=await User.findOne({email});
        if(existingUser){
            return res.status(409).json({message: "User already exists"});
        }

        /*hash the password*/
        const salt = await bcrypt.genSalt();
        const hashPassword = await bcrypt.hash(password, salt);

        /* create a new user */
        const newUser = new User({
            firstName,
            lastName,
            email,
            password: hashPassword,
            profileImagePath
        });

        /*save the user to the database*/
        await newUser.save();

        /*send success response*/
        res.status(200).json({message: "User registered successfully",user: newUser});
    }catch(err){
        console.log(err);
        res.status(500).json({message: "Registarion failed", error: err.message});
    }
});

module.exports = router;
