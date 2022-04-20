const express = require('express')
const post = require('../models/post')
const router = express.Router()
const Post = require('../models/post')

router.get('/', async(req, res) => {
    try{
        const posts = await Post.find()
        res.json(posts)
    }
    catch(err){
        res.json({message : err.message})

    }
})

//getting one post
router.get('/:id', getPost, (req, res) => {
    res.send(res.post.username)
})

router.post('/', async(req, res) => {
    const post = new Post({
        username: req.body.username,
        imgUrl: req.body.imgUrl,
        caption: req.body.caption

    })
    try{
        const newPost = await post.save()
        res.json(newPost)
    }
    catch(err){
        res.json({message : err.message})
    }
})

router.patch('/:id', (req, res) => {
    
})

router.delete('/:id', (req, res) => {
    
})


async function getPost(req, res, next){
    let post
    try{
        post = await Post.findById(req.params.id)
        if (post == null)
        return res.json({message: 'Cannot find post'})
    }
    catch(err){
        return res.json({message : err.message})
    }
    res.post = post
    next()
}

module.exports = router