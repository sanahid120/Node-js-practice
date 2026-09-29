
const User = require('../models/usermodel.js');

const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const dotenv = require("dotenv");
dotenv.config()

async function login(req, res) {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email })
    if (!user) {
      res.statusCode(301).json(
        {
          message: "User Credential not found. please register first.",

        }
      )
    }
    const isMatched = await bcrypt.compare(password, user.password)
    if (isMatched) {
      const token = jwt.sign(
        {
          id: user._id
        },
        process.env.secretKey, //madeup string
        { expiresIn: '1d' }

      )
      res.status(200).json({
        message: "Login Successful",
        user: user,
        token: token
      })
    }
    res.json({
      message: "Invalid Credentials"
    })



  }
  catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
}


async function register(req, res) {

  const { name, email, password } = req.body;

  try {
    const existingUser = await User.findOne({ email })
    if (existingUser) {
      res.status(400).json({
        message: 'this email is already exist. try new one'
      })
    }

    const salt = await bcrypt.genSalt(10)
    const hassedPassword = await bcrypt.hash(password, salt)

    const user = await User.create({ name, email, password: hassedPassword })

    const token = jwt.sign({
      id: user._id
    },
      process.env.secretKey,
      { expiresIn: '1d' }

    )

    res.status(201).json({ statusCode: 201, status: 'success', message: 'User created successfully', user: user, token: token });

  }
  catch (error) {

    res.status(500).json({ message: 'Internal server error' });
  }
}


module.exports = {
  login,
  register
};
