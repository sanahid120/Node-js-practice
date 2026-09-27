function login(req, res) {
    // Handle login logic
    const { email, password } = req.body;

    res.json({ message: 'Login Successful',
        statuscode: 200,
        
        data: {
            username: email,

            password: password,
            message: 'Login Successful'
            


        }, 
        token: 'dummy_token'
     });
}

function signup(req, res) {
    // Handle registration logic    
    const { password, email } = req.body;
    res.json({ message: 'Signup Successful',
        statuscode: 201,
        data:{
            password: password,
            email: email
        },
        token: 'dummy_token'
     });
}

module.exports = {
    login,
    signup
};
