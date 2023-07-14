const mongoose = require("mongoose");

require("dotenv").config();

//Create schema for register
const userSchema = new mongoose.Schema({
        name: { type: String, 
            required: true, 
            minlength: 3, 
            maxlength: 30 
        },
        email: {
            type: String,
            require: true,
            minlength: 3,
            maxlength: 200,
            unique: true,

        },
        password: {
            type: String,
            required: true,
            minlength: 3,
            maxlength: 100,
        },
        
    },
    {
        timestamps: true,
    }
);

//creating userModel
const userModel = new mongoose.model("User", userSchema);

module.exports = userModel;