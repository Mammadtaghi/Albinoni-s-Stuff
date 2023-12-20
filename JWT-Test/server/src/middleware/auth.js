import jwt from "jsonwebtoken";



export const TokenMW = (req,res,next) =>{
    const token = req.headers.authorization.split('')[1]
    console.log(token);
    next()
}


