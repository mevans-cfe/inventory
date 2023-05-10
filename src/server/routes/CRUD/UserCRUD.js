const Asset = require("../../models/Asset");
const User = require("../../models/User");

const getUser = async (req, res) => {
  try {
    const users = await User.find().exec();
    res.json(users);
  } catch (err) {
    res.send(err);
  }
};

const createUser = async (req, res) => {
  const user = new User({
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    title: req.body.title,
    startDate: req.body.startDate,
  });
  console.log("User", User);

  try {
    const savedUser = await user.save();
    res.json(savedUser);
  } catch (err) {
    res.send(err);
  }
};

const deleteUser = (req, res) => {
  User.deleteOne({ _id: req.params.userID })
    .then(() => res.json({ message: "User Deleted" }))
    .catch((err) => res.send(err));
};

module.exports = {
  getUser,
  createUser,
  // updateUser,
  deleteUser,
};
