const express = require('express')
const { default: mongoose } = require('mongoose')
const postSchema = new mongoose.Schema({
    username: {
        type : String
    },
    imgUrl: {
        type : String
    },
    caption:{
        type: String
    }
})

module.exports = mongoose.model('post', postSchema)