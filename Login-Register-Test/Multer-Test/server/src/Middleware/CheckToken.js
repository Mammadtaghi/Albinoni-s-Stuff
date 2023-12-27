import jwt from "jsonwebtoken";

export const CheckToken = async (req, res, next) => {
    try {
        if (!req.headers.authorization.startsWith('Bearer')) {
            res.status(403).send("Token Not Valid!")
            return
        }
    
        const token = req.headers.authorization.split(' ')[1]
        
        const decode = jwt.verify(token, "AlbiKey")
    
        console.log(decode)
    
        req.username = decode.username
        req.role = decode.role
    
        next()
    } catch (error) {
     console.log(error);   
    }
}
