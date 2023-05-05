const router = require("express").Router();
const {
  getUser,
  createUser,
  updateUser,
  deleteUser,
} = require("./CRUD/UserCRUD");

const {
  getAsset,
  createAsset,
  updateAsset,
  deleteAsset,
} = require("./CRUD/AssetCrud");

router.get("/", (req, res) => {
  res.send("Let's build a CRUD API!");
});

// User Routes
router.get("/user", getUser);

router.post("/user/add", createUser);

router.put("/user/:userID", (req, res) => updateUser(req, res));

router.delete("/user/:userID", deleteUser);

// Asset Routes
router.get("/asset", getAsset);

router.post("/asset/add", createAsset);

router.put("/asset/:assetID", (req, res) => updateAsset(req, res));

router.delete("/asset/:assetID", deleteAsset);

module.exports = router;
