import bcrypt from "bcrypt";
import cors from "cors";
import dotenv from "dotenv";
import express from "express";
import jwt from "jsonwebtoken";
import mongoose from "mongoose";
import { Users } from "./src/Models/userModel.js";
import { CheckToken } from "./src/Middleware/CheckToken.js";
import { CheckAdmin } from "./src/Middleware/CheckAdmin.js";

dotenv.config()

// const __dirname = path.resolve()

const PORT = process.env.PORT
const PASSWORD = process.env.PASSWORD
const URL = process.env.CON_URL.replace('<password>', PASSWORD)

const app = express();

app.use(express.json())
app.use(cors())


// const Storage = multer.diskStorage({
//   destination: (req, res, cb) => {
//     cb(null, path.join(__dirname, "src", "upload"))
//   },
//   filename: (req, file, cb) => {
//     cb(null, file.originalname)
//   },

// })


// const upload = multer(
//   {
//     storage: Storage,
//     limits: { fileSize: 2 * 1024 * 1024 }
//   })


// Get All Users

app.get('/users', CheckToken, async (req, res) => {
  try {

    const users = await Users.find()

    res.status(202).send(users)

  } catch (error) {
    res.status(404).send('Invalid Token')
  }
})

// Get User By ID

app.get('/users/:id', CheckToken, async (req, res) => {
  try {
    const { id } = req.params
    const user = await Users.findById(id)
    res.send(user)
  } catch (error) {
    res.status(404).send('User Not Found')
  }
})

// Delete User By ID

app.delete('/users/:id', CheckToken, CheckAdmin, async (req, res) => {
  try {
    const { id } = req.params
    const user = await Users.findByIdAndDelete(id)
    res.send(user)
  } catch (error) {
    res.status(404).send('User Not Found')
  }
})


// const token = jwt.sign({
//   username: username,
//   password:password,
//   role:role
// },"AlbiKey",{expiresIn:"120s"})

// Register

app.post('/register', async (req, res) => {
  try {
    const { username, password, role } = req.body

    const hashedPassword = await bcrypt.hash(password, 7)

    const User = await Users.findOne({ username: username })

    if (User) {
      res.status(406).send("We have this user!")
    }

    const newUser = new Users({
      username: username,
      password: hashedPassword,
      role: role
    })

    await newUser.save()

    res.status(201).send(`${role} created`)

  } catch (error) {
    res.status(500).send('Something went wrong')
  }
})

// Login

app.post('/login', async (req, res) => {
  try {
    const { username, password } = req.body

    if (!username || !password) {
      res.status(406).send("Fill form")
    }
    else {
      try {
        const User = await Users.findOne({ username: username })

        console.log(await bcrypt.compare(password, User.password))

        if (!(await bcrypt.compare(password, User.password))) {
          res.status(406).send('Worng password')
          return
        }

        const token = jwt.sign({
          username: username,
          role: User.role
        }, "AlbiKey", { expiresIn: "1h" })

        res.status(202).send(token)

      } catch (error) {
        res.status(406).send(`No user named ${username}`)
      }
    }
  } catch (error) {
    res.status(500).send('Something went wrong')
  }
})


// app.delete('/users/:id', async (req, res) => {
//   try {
//     const { id } = req.params.id
//     const deletedUser = await Users.findByIdAndDelete(id)
//     res.status(200).send("User deleted successfully!")
//   } catch (error) {
//     res.status(500).send('Something went wrong')
//   }
// })



app.post('/product', (req, res) => {
  res.send(req.body)
})


app.get('/', (req, res) => {
  res.send('Hello World!');
});


mongoose.connect(URL).catch(err => console.log(err))

app.listen(PORT, function () {
  console.log(`Server Online on ${PORT} port!`);
});
