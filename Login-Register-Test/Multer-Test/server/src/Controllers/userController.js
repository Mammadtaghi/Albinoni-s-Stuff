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
            res.status(406).json({message:"Fill form"})
        }
        else {
            try {
                const User = await Users.findOne({ username: username })

                if (!(await bcrypt.compare(password, User.password))) {
                    res.status(406).json({message:'Worng password'})
                    return
                }

                const token = jwt.sign({
                    username: User.username,
                    role: User.role
                }, "AlbiKey", { expiresIn: "1h" })

                res.status(202).send(token)

            } catch (error) {
                res.status(406).json({message:`No user named ${username}`})
            }
        }
    } catch (error) {
        res.status(500).json({message:'Something went wrong'})
    }
}



export const Register = async (req, res) => {
    try {
        const { username, password } = req.body

        const hashedPassword = await bcrypt.hash(password, 7)

        const User = await Users.findOne({ username: username })

        if (User) {
            res.status(406).json({message:"We have this user!"})
            return
        }

        const newUser = new Users({
            username: username,
            password: hashedPassword,
            role: "User"
        })

        await newUser.save()

        const token = jwt.sign({
            username: newUser.username,
            role: newUser.role
        }, "AlbiKey", { expiresIn: "1h" })

        res.status(201).send(token)

    } catch (error) {
        res.status(500).json({message:'Something went wrong'})
    }
}

export const ChangePassword = async (req,res)=>{
    try {
        const { newPassword } = req.body

        const newHashedPassword = await bcrypt.hash(newPassword,10)
        
        const UpdatedUser = await Users.findOneAndUpdate({username:req.username},{password:newHashedPassword})

        res.status(202).send("Password updated!")
    } catch (error) {
        res.status(500).json({message:error})
    }
}


export const MakeAdmin = async (req,res)=>{
    try {
        const { username } = req.body

        const User = await Users.findOne({username:username})

        if (User.role.includes("Admin")) {
            res.status(406).json({message:`${User.username} is already an Admin!`})
            return
        }

        const UpdatedUser = await Users.findOneAndUpdate({username:username},{role:"Admin"})

        res.status(202).send(`${username} promoted as Admin`)

    } catch (error) {
        res.status(500).json({message:error})
    }
}
