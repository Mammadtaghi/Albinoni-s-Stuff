export const CheckAdmin = (req, res, next) => {
    console.log(req.role);
    if (req.role.includes("Admin")) {
        res.status(406).send("You have to be an Admin to do this!")
        return
    }
    next()
}