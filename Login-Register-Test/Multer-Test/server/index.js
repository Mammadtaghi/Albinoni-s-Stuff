import cors from "cors";
import dotenv from "dotenv";
import express from "express";
import mongoose from "mongoose";
import userRouter from "./src/Routers/userRouter.js";

dotenv.config()

const PORT = process.env.PORT
const PASSWORD = process.env.PASSWORD
const URL = process.env.CON_URL.replace('<password>', PASSWORD)

const app = express();

app.use(express.json())
app.use(cors())

app.use("/",userRouter)



app.post('/test', (req, res) => {
  const { category } = req.body
  console.log(category);
  res.send(category)
})


app.get('/', (req, res) => {
  res.send('Hello World!');
});


mongoose.connect(URL)
.then(() => console.log("connected"))
.catch(err => console.log(err))

app.listen(PORT, function () {
  console.log(`Server Online on ${PORT} port!`);
});
