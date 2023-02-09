import express from 'express';
import * as dotenv from 'dotenv';
import {v2 as cloudinary} from 'cloudinary';

import Post from '../mongodb/models/posts.js';

dotenv.config();

const router=express.Router();

cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET,
});

//get all posts
router.get('/', async (req, res) => {
    try{
        const posts=await Post.find();
        res.status(200).json({success:true, data:posts});
    }catch(error){
        res.status(404).json({message: error.message});
    }
});

//get a single post
router.get('/:id', async (req, res) => {
    const {id}=req.params;
    try{
        const post=await Post.findById(id);
        res.status(200).json(post);
    }catch(error){
        res.status(404).json({message: error.message});
    }
});

//create a post
router.post('/', async (req, res) => {
    try{
        const {name,prompt,photo}=req.body;
        const photourl = await cloudinary.uploader.upload(photo);
        const newPost = await Post.create({
        name,
        prompt,
        photo: photourl.url,
    })
        res.status(200).json({success : true,data: newPost});
    }catch(error){
        res.status(500).json({message: error.message});
    }
});

//update a post
// router.patch('/:id', async (req, res) => {
//     const {id}=req.params;
//     const {title, message, creator, selectedFile, tags}=req.body;
//     if(!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No post with id: ${id}`);
//     const updatedPost={creator, title, message, tags, selectedFile, _id: id};
export default router;