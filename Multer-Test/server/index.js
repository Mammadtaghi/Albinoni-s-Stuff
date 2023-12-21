import express from "express";
import cors from "cors";
import multer from "multer";
import path from 'path';

const __dirname = path.resolve()

const app = express();

app.use(express.json())
app.use(cors())


const Storage = multer.diskStorage({
    destination: (req,res,cb)=>{
        cb(null, __dirname + '/upload')
    },
    filename: (req,file,cb)=>{
        cb(null,file.originalname)
    },

})


const upload = multer({storage:Storage})


app.post('/product', upload.array("image",5), (req,res)=>{
    res.send(req.body)
})


app.get('/', (req, res) => {
  res.send('Hello World!');
});




app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});
