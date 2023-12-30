import jwt from "jsonwebtoken";

export const CheckToken = async (req, res, next) => {
    try {
        if (!req.headers.authorization.startsWith('Bearer')) {
            res.status(403).send("Token Not Valid!")
            return
        }
    
        const token = req.headers.authorization.split(' ')[1]
        
        try {
            const decode = jwt.verify(token, "AlbiKey")
            console.log(decode)
        
            req.username = decode.username
            req.role = decode.role
            req.basket = decode.basket
            req.wishlist = decode.wishlist
        
            next()
        } catch (error) {
            res.status(401).json({message:"JWT Expired!"})
            return
        }
    
    } catch (error) {
     console.log(error);   
    }
}
