const express = require('express');
const app = express();
const mongoose = require('mongoose');
require('dotenv').config();
const cors = require('cors');

const authRoutes = require('./routes/auth');

app.use(cors());
app.use(express.json());
app.use(express.static('public'));

app.use("/auth", authRoutes);

/*MONGOOSE SETUP*/
const PORT = 3001;
mongoose.connect(process.env.MONGO_URI, {
    dbName: "pet-care",
})
.then(() => {
    app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
}).catch((err) => console.log(`${err} did not connect`));