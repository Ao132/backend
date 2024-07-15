import Router from 'express'
import * as PC from './post.controller.js'



const router = Router();



// router.post('/', addPost)
router.post("/", PC.addPost)
router.get("/", PC.getAllPosts)
router.patch("/", PC.updatePost)
router.delete("/", PC.deletePost)

export default router