import connection from "../../../db/connectionDB.js";



/* ************************** addPost************************************* */
export const addPost = (req, res, next) =>{
    const {title, description, price }= req.body;
    connection.execute(`insert into posts (title, description, price) values ("${title}","${description}","${price}")`,(err,result)=>{
        if(err){
            return res.status(400).json({message: 'Error creating post' , err})
        } 
        if(!result.affectedRows){
            return res.status(400).json({message: 'fail to add' })
        }
        res.status(201).json({message: 'post created successfully', post: result})
    } )
}

/* ************************** getPosts************************************* */

export const getAllPosts = (req, res, next) => {
    connection.execute('SELECT * FROM posts', (err, result) => {
        if(err){
            return res.status(400).json({message: 'Error getting all posts', err})
        }
        res.json({message:"ddone", result})
    })
}


/* ************************** updatePost************************************* */


export const updatePost = (req, res, next) => {

const {id ,title, description, price} = req.body
    connection.execute(`UPDATE posts SET title="${title}", description="${description}", price="${price}" WHERE id=${id}`, (err, result) => {


        if(err){
            return res.status(400).json({message: 'query error', err})
        }
        if(!result.affectedRows){
            return res.status(400).json({message: 'Error updating post' })
        }
        res.status(200).json({message: 'post updated successfully', post: result})      
    

})}

/* ************************** deletePost************************************* */

export const deletePost = (req, res, next) => {

    const {id} = req.body
        connection.execute(`delete from posts WHERE id=${id}`, (err, result) => {
    
    
            if(err){
                return res.status(400).json({message: 'query error', err})
            }
            if(!result.affectedRows){
                return res.status(400).json({message: 'Error deleting post' })
            }
            res.status(200).json({message: 'post deleted successfully', result})      
        
    
    })}