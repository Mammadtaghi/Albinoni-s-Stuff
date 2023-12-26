import express from 'express';
import { DeleteUserByID, GetAllUsers, GetUserByID, Login, Register } from "./../Controllers/userController.js";
import { CheckAdmin } from "./../Middleware/CheckAdmin.js";
import { CheckToken } from "./../Middleware/CheckToken.js";


const router = express.Router()

router.get("/users", CheckToken, GetAllUsers);

router.get("/users/:id", CheckToken, GetUserByID);

router.delete("/users/:id", CheckToken, CheckAdmin, DeleteUserByID);

router.post("/register", Register);

router.post("/login", Login);

export default router