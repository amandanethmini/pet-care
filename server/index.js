const express = require('express');
const app = express();
const mongoose = require('mongoose');
require('dotenv').config();
const cors = require('cors');

app.use(cors());
app.use(express.json());
app.use(express.static('public'));

/*MONGOOSE SETUP*/
const PORT = 3001
mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(() => {
    app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
}).catch((err) => console.log(`${err} did not connect`));