const Asset = require("../../models/Asset");

const getAsset = async (req, res) => {
  try {
    const assets = await Asset.find().exec();
    res.json(assets);
  } catch (err) {
    res.send(err);
  }
};

const createAsset = async (req, res) => {
  const asset = new Asset({
    issueDate: req.body.issueDate,
    name: req.body.name,
    model: req.body.model,
    make: req.body.make,
    grade: req.body.grade,
    imei: req.body.imei,
    number: req.body.number,
  });
  console.log("Asset", Asset);

  try {
    const savedAsset = await asset.save();
    res.json(savedAsset);
  } catch (err) {
    res.send(err);
  }
};

const updateAsset = async (req, res) => {
  try {
    const updatedAsset = await Asset.findOneAndUpdate(
      { _id: req.params.assetID },
      {
        $set: {
          issueDate: req.body.issueDate,
          name: req.body.name,
          model: req.body.model,
          make: req.body.make,
          grade: req.body.grade,
          imei: req.body.imei,
          number: req.body.number,
        },
      },
      { new: true }
    ).exec();

    // add the asset to the user document
    const user = await User.findById(req.body.assignedTo);
    user.assets.push(updatedAsset._id);
    await user.save();

    res.json(updatedAsset);
  } catch (err) {
    res.send(err);
  }
};

const deleteAsset = (req, res) => {
  Asset.deleteOne({ _id: req.params.assetID })
    .then(() => res.json({ message: "Asset Deleted" }))
    .catch((err) => res.send(err));
};

module.exports = {
  getAsset,
  createAsset,
  updateAsset,
  deleteAsset,
};
