const mongoose = require("mongoose");

const Member = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    profilePic: {
        type: String,
        // required: true
    },
    githubProfileLink: {
        type: String,
        required: true
    },
    thoughts: {
        type: String,
        required: true
    }
})

module.exports = mongoose.model('member', Member);