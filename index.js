
import express from 'express';
import connection from './db/connectionDB.js';
import postRouter from './src/modules/posts/post.route.js';
import cors from 'cors'
const app = express();





// var whitelist = ['http://127.0.0.1:5500']
// var corsOptions = {
//   origin: function (origin, callback) {
//     if (whitelist.indexOf(origin) !== -1) {
//       callback(null, true)
//     } else {
//       callback(new Error('Not allowed by CORS'))
//     }
//   }
// }
connection

app.use(cors());
app.use(express.json());

app.use("/posts",postRouter)
app.get('/', (req, res)=>{
    res.json({message: 'Hello from the backend'})
})


app.use("*" , (req, res, next) =>{
    res.status(404).json({message: 'page not found'})
})

app.listen(process.env.port || 3000);