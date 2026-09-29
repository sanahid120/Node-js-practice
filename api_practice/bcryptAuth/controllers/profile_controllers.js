async function getProfile(req, res){
    try {

        res.json({
            message: "this is Profile"
        })



        
    } catch (error) {
        res.json({
        err: error
        })
        
    }
}

async function updateProfile(req, res){
    try {



        
    } catch (error) {
        
    }
}

module.exports = {getProfile, updateProfile}

