

function middlewear1 (req, res, next){

    const {email,password} = req.body

    if(!email || !password){
        res.json({
            success: false,
            message: "email and password are empty"
        })
    }

    next()

}

module.exports = middlewear1