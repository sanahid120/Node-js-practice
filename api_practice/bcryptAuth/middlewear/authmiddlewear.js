
const jwt = require('jsonwebtoken')

function authMiddlewear(req, res, next){

    const authorization = req.headers.authorization
    const token = authorization.split(' ')[1]

    jwt.verify(token, process.env.secretKey, (error, decodedData)=>{

        if(error){
            res.json({
                error: error.message
            })
        }
        const id = decodedData.id
        req.id = id
        next()

    }
    )


    res.json({
        token
    })

}

module.exports = authMiddlewear