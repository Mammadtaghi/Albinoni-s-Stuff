export const CheckSuperAdmin = (req, res, next) => {
    if (req.role !== "SuperAdmin") {
        res.status(406).send("You need to be SuperAdmin to do this!")
        return
    }
    
    console.log(req.role);

    next()
}