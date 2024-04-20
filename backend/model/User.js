const mongoose = require('mongoose');

const UserSchema = mongoose.Schema({
    username:{
        require: true,
        type: String,
        min: 3,
        max: 20,
        unique: true
    },
    email:{
        require: true,
        type: String,
        max: 50,
    },
    password: {
        require: true,
        type: String,
        min: 6,
    }

}, {timestamps: true});

module.exports = mongoose.model("User", UserSchema);