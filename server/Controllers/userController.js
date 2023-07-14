const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")
const validator = require("validator");
const userModel = require("../Models/userModel");

const createToken = (_id) => {
    const jwtSecreteKey = process.env.JWT_SECRET_KEY;
    return jwt.sign({ _id }, jwtSecreteKey, { expiresIn: "3d" })
};

const registerUser = async (req, res) => {
    const { name, email, password } = req.body;

    try {
        let user = await userModel.findOne({ email });
        //if user already been exist then no need to create new user
        if (user) {
            return res.status(400).json("User already exists...");
        }

        //if not exist then create new one and put value in object fields
        user = new userModel({
            name,
            email,
            password
        });

        //validation
        //if any filed be empty then all fields must be filled out
        if (!name || !email || !password) {
            return res.status(400).json("All fields are required...");
        }

        //if email is not valid then must be a valid email address
        if (!validator.isEmail(email)) {
            return res.status(400).json("Email must be a valid email address...");
        }

        //password is also must be a strong passoerd
        if (!validator.isStrongPassword(password)) {
            return res.status(400).json("Password must be a strong password which contains Capital letter, small letter, numbers and special characters... ")
        }

        //gensalt generate a randon string and used for hashing with password
        const salt = await bcrypt.genSalt(10);
        user.password = await bcrypt.hash(user.password, salt);

        //now finally save the data into database
        await user.save();

        const token = createToken(user._id);
        res.status(200).json({ _id: user._id, name, email, token });

    } catch (error) {
        console.log(error);
        res.status(500).json(error);
    }
};

const loginUser = async (req, res) => {
    const { email, password } = req.body;

    try {
        let user = await userModel.findOne({ email });

        //if email not be found in database then error and can't be login
        if (!user) {
            return res.status(400).json("Invalid email or password...");
        }

        //password not be correct
        const validPassword = await bcrypt.compare(password, user.password);
        if (!validPassword) {
            return res.status(400).json("Invalid email or password...");
        }

        const token = createToken(user._id);

        res.status(200).json({ _id: user._id, name: user.name, email, token });
    } catch (error) {
        console.log(error);
        res.status(500).json(error);
    }
};

const findUser = async (req, res) => {
    const userId = req.params.userId;

    try {
        //get one object specified by given id
        const user = await userModel.findById(userId);
        res.status(200).json(user);
    } catch (error) {
        console.log(error);
        res.status(500).json(error);
    }
};

const getUser = async (req, res) => {
    try {
        //get all users present in database
        //details shown in array of objects with details of all users
        const users = await userModel.find();
        res.status(200).json(users);
    } catch (error) {
        console.log(error);
        res.status(500).json(error);
    }
};

module.exports = { registerUser, loginUser, findUser, getUser };