// const bcrypt = require("bcrypt");
// const jwt = require("jsonwebtoken");
const { User } = require("../../models/user");
const { ctrlWrapper } = require("../../utils");

const logout = async (req, res) => {
  const { _id } = req.user;
  await User.findByIdAndUpdate(_id, { token: "" });

  res.status(204).json({ message: "Logout success" });
};

module.exports = { logout: ctrlWrapper(logout) };