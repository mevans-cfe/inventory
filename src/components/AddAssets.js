import { useState } from "react";
import axios from "axios";

function AddAsset() {
  const [formData, setFormData] = useState({
    name: "",
    model: "",
    make: "",
    grade: "",
    imei: "",
    number: "",
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
      .post("http://localhost:8000/asset/add", formData)
      .then((res) => {
        console.log("Asset added successfully", res.data);
        setFormData({
          name: "",
          model: "",
          make: "",
          grade: "",
          imei: "",
          number: "",
        });
      })
      .catch((err) => console.log(err));
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label htmlFor="model">Model:</label>
        <input
          type="text"
          name="model"
          value={formData.model}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label htmlFor="make">Make:</label>
        <input
          type="text"
          name="make"
          value={formData.make}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label htmlFor="grade">Grade:</label>
        <input
          type="text"
          name="grade"
          value={formData.grade}
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="imei">IMEI:</label>
        <input
          type="text"
          name="imei"
          value={formData.imei}
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="number">Number:</label>
        <input
          type="text"
          name="number"
          value={formData.number}
          onChange={handleChange}
        />
      </div>
      <button type="submit">Add Asset</button>
    </form>
  );
}

export default AddAsset;
