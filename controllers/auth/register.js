const bcrypt = require("bcrypt");
// const jwt = require("jsonwebtoken");
const { User } = require("../../models/user");
const { HttpError, ctrlWrapper } = require("../../utils");

// const { SECRET_KEY } = process.env;

const register = async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });

  if (user) {
    throw HttpError(409, "Email already exist.");
  }

  const hashPassword = await bcrypt.hash(password, 10);
  const newUser = await User.create({ ...req.body, password: hashPassword });
  res.status(201).json({
    email: newUser.email,
    name: newUser.name,
  });
};

module.exports = { register: ctrlWrapper(register) };