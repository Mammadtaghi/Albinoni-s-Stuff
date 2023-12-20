import express from "express";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import cors from "cors";
import { TokenMW } from "./src/middleware/auth.js";

const app = express()
const router = express.Router()


app.use(cors())
app.use(express.json())


app.post('/login', (req, res, next) => {
    try {
        const { username } = req.body
        const token = jwt.sign({
            username: username,
            password: "albi123"
        }, "TooSecret", { expiresIn: "60s" })
        res.send(token)
    } catch (error) {
        res.status(500).send(error)
    }
})

app.post('/',TokenMW,(req,res)=>{
    res.send('<h1>Whats Up</h1>')
})




app.listen(3000, () => {
    console.log("Hello World?");
})
