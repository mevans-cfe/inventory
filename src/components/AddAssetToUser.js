import { useState, useEffect } from "react";
import axios from "axios";
import Card from "@mui/material/Card";
import Select from "@mui/material/Select";

function AddAssetToUser() {
  const [formData, setFormData] = useState({
    assetId: "",
    userId: "",
  });
  const [users, setUsers] = useState([]);
  const [assets, setAssets] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:8000/user").then((res) => setUsers(res.data));
    axios.get("http://localhost:8000/asset").then((res) => setAssets(res.data));
  }, []);

  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  console.log("FORM DATA", formData);

  const handleSubmit = (event) => {
    event.preventDefault();

    const asset = assets.filter((asset) => asset._id === formData.assetId);

    axios
      .put(`http://localhost:8000/user/${formData.userId}`, {
        assets: asset,
      })
      .then((res) => {
        console.log("RES DATA", res.data);
        setFormData({
          assetId: "",
          userId: "",
        });
      })
      .catch((err) => console.log(err));
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Select a user:</label>

        <select name="userId" value={formData.userId} onChange={handleChange}>
          <option value="">--Select a user--</option>
          {users.map((user) => (
            <option key={user._id} value={user._id}>
              {user.firstName} {user.lastName}
            </option>
          ))}
        </select>
      </div>
      <div>
        <label htmlFor="assetId">Select an asset:</label>
        <select name="assetId" value={formData.assetId} onChange={handleChange}>
          <option value="">--Select an asset--</option>
          {assets.map((asset) => (
            <option key={asset._id} value={asset._id}>
              {asset.name} ({asset.model})
            </option>
          ))}
        </select>
      </div>
      <button type="submit">Assign Asset</button>
    </form>
  );
}

export default AddAssetToUser;
