const userModel = require("../models/userModel");
const jwt = require("jsonwebtoken");
const validator = require('email-validator');


const userRegister = async function (req, res) {

    const data = req.body;

    if (!(data.name && data.mobile && data.email && data.password)) {
        return res.status(400).send({ status: false, message: "All fields are mandetory" });
    }

    let validEmail = validator.validate(data.email)
    if (!validEmail) {
        return res.status(400).send({ status: false, message: "please give valid email" })
    }

    const user = await userModel.create(data);
    return res.status(200).send({ status: true, message: "user created successfully", data: user })
}



const userLogin = async function (req, res) {

    const username = req.body.email;
    const password = req.body.password;

    if (!(username && password)) {
        return res.status(400).send({ status: false, message: "Please fill all the fields." })
    }

    let loginUser = await (await userModel.findOne({ email: username, password: password })).isSelected({ _id: 1 });
    if (!loginUser) {
        return res.status(400).send({ status: false, message: "Username or Password is not matching." })
    }

    let token = jwt.sign(
        {
            userId: loginUser._id,
        },
        "secret-key");

    return res.status(200).send({ status: true, data: { _id: loginUser._id, token: token } })

}



module.exports.userRegister = userRegister;
module.exports.userLogin = userLogin;
