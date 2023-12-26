import { Users } from "./../Models/userModel.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";


export const GetAllUsers = async (req, res) => {
    try {

        const users = await Users.find()

        res.status(202).send(users)

    } catch (error) {
        res.status(404).send('Invalid Token')
    }
}


export const GetUserByID = async (req, res) => {
    try {
        const { id } = req.params
        const user = await Users.findById(id)
        res.send(user)
    } catch (error) {
        res.status(404).send('User Not Found')
    }
}


export const DeleteUserByID = async (req, res) => {
    try {
        const { id } = req.params
        const user = await Users.findByIdAndDelete(id)
        res.send(user)
    } catch (error) {
        res.status(404).send('User Not Found')
    }
}


export const Login = async (req, res) => {
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
}


export const Register = async (req, res) => {
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
}
