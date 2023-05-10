const Asset = require("../../models/Asset");

const getAsset = async (req, res) => {
  try {
    const assets = await Asset.find().exec();
    res.json(assets);
  } catch (err) {
    res.send(err);
  }
};

const updateAsset = async (req, res) => {
  const assetID = req.params.assetID;
  const userID = req.body.userID;

  try {
    const asset = await Asset.findById(assetID).exec();
    if (!asset) {
      return res.status(404).json({ message: "Asset not found" });
    }

    // Add user ID to asset object
    asset.user = userID;

    const updatedAsset = await asset.save();
    res.json(updatedAsset);
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
    type: req.body.type,
  });
  console.log("Asset", Asset);

  try {
    const savedAsset = await asset.save();
    res.json(savedAsset);
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
  updateAsset,
  createAsset,
  deleteAsset,
};
