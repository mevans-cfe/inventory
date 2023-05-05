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

const updateUser = (req, res) => {
  User.findOneAndUpdate(
    { _id: req.params.userID },
    {
      $set: {
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        title: req.body.title,
        startDate: req.body.startDate,
      },
      $push: {
        assets: req.body.assets, // add the new asset ID to the existing assets array
      },
    },
    { new: true }
  )
    .populate("assets") // populate the asset details
    .then((updatedUser) => {
      res.json(updatedUser);
    })
    .catch((err) => {
      res.send(err);
    });
};

const deleteUser = (req, res) => {
  User.deleteOne({ _id: req.params.userID })
    .then(() => res.json({ message: "User Deleted" }))
    .catch((err) => res.send(err));
};

module.exports = {
  getUser,
  createUser,
  updateUser,
  deleteUser,
};
