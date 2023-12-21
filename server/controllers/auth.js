const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const User = require("../model/user.js");
const Admin = require("../model/admin.js");

const register = async (req, res, next) => {
  const user = req.body;
  const { password } = req.body;

  try {
    emailExist = await User.findOne({ email: user.email }).select("+password");

    if (emailExist) {
      return res.status(500).json({ message: "Email is already exists" });
    }

    const salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync(password, salt);

    const newUser = new User({
      ...user,
      password: hash,
    });

    await newUser.save();
    res.status(200).json(newUser);
  } catch (e) {
    console.log(err);
    res.status(500).json({ message: err });
  }
};

const login = async (req, res, next) => {
  const { email, password } = req.body;

  try {
    const user = User.findOne({ email: email }).select("+password");

    if (!user) {
      return res
        .status(401)
        .json({ message: "Email or Password is not valid" });
    }

    const isMatch = bcrypt.compareSync(password, user.password);

    if (!isMatch) {
      return res
        .status(401)
        .json({ message: "Email or Password is not valid" });
    }

    const accessToken = jwt.sign(
      { id: user.phoneNumber },
      process.env.TOKEN_PASSWORD,
      {
        expiresIn: "24h",
      }
    );

    delete user.password;

    res.status(200).json({ user, accessToken });
  } catch (e) {
    res.status(500).json(err);
  }
};

const adminLogin = (req, res, next) => {
  const { email, password } = req.body;

  try {
    const admin = Admin.findOne({ email: email });

    const isValid = admin.password === password;

    if (!isValid) {
      return res
        .status(401)
        .json({ message: "Email or Password is not valid" });
    }

    const accessToken = jwt.sign(
      { id: admin.email },
      process.env.TOKEN_PASSWORD,
      {
        expiresIn: "24h",
      }
    );

    res.status(200).json({ admin, accessToken });
  } catch (e) {
    res.status(500).json(e);
  }
};

const editProfileAdmin = (req, res, next) => {
  const editedProfile = req.body;
  const id = req.params;
  try {
    Admin.findByIdAndUpdate(id, editedProfile);
  } catch {}
};

module.exports = { login, register, adminLogin ,editProfileAdmin};
