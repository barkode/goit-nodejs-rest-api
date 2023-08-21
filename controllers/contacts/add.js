const Contact = require("../../models");
const { ctrlWrapper } = require("../../utils");

const add = async (req, res) => {
  const result = await Contact.create(req.body);
  res.status(201).json(result);
};

module.exports = { add: ctrlWrapper(add) };