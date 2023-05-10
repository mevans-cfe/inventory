import { useState } from "react";
import axios from "axios";

function AddAsset({ onAssetAdded }) {
  const [formData, setFormData] = useState({
    type: "",
    name: "",
    model: "",
    make: "",
    grade: "",
    imei: "",
    number: "",
    issueDate: new Date(),
  });

  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    axios
      .post("http://localhost:8000/asset/add", {
        ...formData,
        userID: "insert-user-id-here",
      })
      .then((res) => {
        console.log("Asset added successfully", res.data);
        setFormData({
          type: "",
          name: "",
          model: "",
          make: "",
          grade: "",
          imei: "",
          number: "",
          issueDate: new Date(),
        });
        onAssetAdded(res.data);
      })
      .catch((err) => console.log(err));
  };

  return (
    <form onSubmit={handleSubmit} style={{ display: "flex", gap: "15px" }}>
      <div style={{ display: "flex", flexDirection: "column" }}>
        <label htmlFor="type">Type:</label>
        <input
          type="text"
          name="type"
          value={formData.type}
          onChange={handleChange}
          required
        />

        <label htmlFor="name">Name:</label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
        />
      </div>

      <div style={{ display: "flex", flexDirection: "column" }}>
        <label htmlFor="model">Model:</label>
        <input
          type="text"
          name="model"
          value={formData.model}
          onChange={handleChange}
          required
        />

        <label htmlFor="make">Make:</label>
        <input
          type="text"
          name="make"
          value={formData.make}
          onChange={handleChange}
          required
        />
      </div>
      <div style={{ display: "flex", flexDirection: "column" }}>
        <label htmlFor="grade">Grade:</label>
        <input
          type="text"
          name="grade"
          value={formData.grade}
          onChange={handleChange}
        />

        <label htmlFor="imei">IMEI:</label>
        <input
          type="text"
          name="imei"
          value={formData.imei}
          onChange={handleChange}
        />
      </div>
      <div style={{ display: "flex", flexDirection: "column" }}>
        <label htmlFor="number">Number:</label>
        <input
          type="text"
          name="number"
          value={formData.number}
          onChange={handleChange}
        />

        <label htmlFor="date">Date:</label>
        <input
          type="date"
          name="issueDate"
          value={formData.startDate}
          onChange={handleChange}
          required
        />
      </div>
      <div
        style={{
          // height: "75%",
          paddingTop: "30px",
          paddingBottom: "15px",
          display: "flex",
          justifyContent: "center",
          alignItems: "cener",
        }}
      >
        <button type="submit" style={{}}>
          Add Asset
        </button>
      </div>
    </form>
  );
}

export default AddAsset;
