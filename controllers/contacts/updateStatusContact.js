const Contact = require("../../models");
const { HttpError, ctrlWrapper } = require("../../utils");

const updateStatusContact = async (req, res) => {
  const { contactId } = req.params;
  const { body } = req;
  const result = await Contact.findByIdAndUpdate(contactId, body, {
    new: true,
  });
  if (!result) {
    throw HttpError(404, "Not found");
  }
  res.status(200).json(result);
};

module.exports = { updateStatusContact: ctrlWrapper(updateStatusContact) };
