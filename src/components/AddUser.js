import { useState } from "react";
import axios from "axios";

function AddUser({ onUserAdded }) {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    title: "",
    startDate: new Date(),
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
      .post("http://localhost:8000/user/add", formData)
      .then((res) => {
        console.log("User added successfully", res.data);
        setFormData({
          firstName: "",
          lastName: "",
          title: "",
          startDate: new Date(),
        });
        onUserAdded(res.data); // Notify the parent component about the new user
      })
      .catch((err) => console.log(err));
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="firstName">First Name:</label>
        <input
          type="text"
          name="firstName"
          value={formData.firstName}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label htmlFor="lastName">Last Name:</label>
        <input
          type="text"
          name="lastName"
          value={formData.lastName}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label htmlFor="title">Title:</label>
        <input
          type="text"
          name="title"
          value={formData.title}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label htmlFor="title">Date:</label>
        <input
          type="date"
          name="startDate"
          value={formData.startDate}
          onChange={handleChange}
          required
        />
      </div>
      <button type="submit">Add User</button>
    </form>
  );
}

export default AddUser;
