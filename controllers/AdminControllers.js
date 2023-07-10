const AdminModel = require('../models/adminModel');
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

module.exports.login = async (req,res)=>{
    console.log('login requested')

    try {
        // Get user input
        const { email, password } = req.body;

        // Validate user input
        if (!(email && password)) {
            res.status(400).send("All input is required");
        }
        console.log(email)
        console.log(password)

        // Validate if user exist in our database
        const user = await AdminModel.findOne({ email });
        if (user && (await bcrypt.compare(password, user.password))) {
            // Create token
            const token = jwt.sign(
                { user_id: user._id, email },
                process.env.TOKEN_KEY
            );
            if (token) {
                res.json({ access_token: token })
                console.log("Login Successful..")
                console.log("acces_token :" + token)
            }
            else {
                res.status('Token Generation Failed')
            }
            // save user token
            // user.token = token;

            // user
            // res.status(200).json(token);
        }
        // res.status(400).send("Invalid Credentials");
    } catch (err) {
        console.log(err);
    }
}

module.exports.signUp = async (req,res)=>{
    try {
        // Get user input
        const { id, email, password, recoveryEmail, phoneNumber, tokenOfAdmin, w_Group } = req.body;
        // console.log(name + email + password, role, avatar)

        // Validate user input
        if (!(email && password )) {
            res.status(400).send("All input is required");
        }

        // check if user already exist
        // Validate if user exist in our database
        const oldUser = await AdminModel.findOne({ email });

        if (oldUser) {
            return res.status(409).send("User Already Exist. Please Login");
        }

        //Encrypt user password
        encryptedPassword = await bcrypt.hash(password, 10);

        // Create user in our database
        const user = await AdminModel.create({
            id,
            email: email.toLowerCase(), // sanitize: convert email to lowercase
            password: encryptedPassword,
            recoveryEmail: recoveryEmail,
            phoneNumber: phoneNumber,
            tokenOfAdmin: "tokenOfAdmin",
            w_Group:w_Group

        });


        // Create token
        const token = jwt.sign(
            { user_id: user._id, email },
            process.env.TOKEN_KEY,
        );
        console.log("token :" + token)
        // save user token
        userUpdated = await AdminModel.findByIdAndUpdate(user._id, { token: token });

        // user.token = token;

        // return new user
        res.status(201).json(userUpdated);
    } catch (err) {
        console.log(err);
    }
    // Our register logic ends here
}

module.exports.getAdminInfo = async (req,res)=>{
    const task = await AdminModel.find();
    res.send(task);
}