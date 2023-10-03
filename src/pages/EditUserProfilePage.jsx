// EditProfileForm.js
import React, { useState } from "react";
import axios from "axios";

function EditUserProfilePage({ user }) {
  const [formData, setFormData] = useState({
    email: user.email,
    password: "",
    name: user.name,
    avatar: user.avatar,
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    axios
      .put(`/user/${user._id}`, formData)
      .then((response) => {
        // Handle success, e.g., show a success message or update the user's profile data
        console.log("User profile updated:", response.data);
      })
      .catch((error) => {
        // Handle errors, e.g., display error messages to the user
        console.error("Error updating user profile:", error);
      });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="email"
        name="email"
        value={formData.email}
        onChange={handleChange}
        // Add other input fields for password, name, and avatar
      />
      <button type="submit">Save Changes</button>
    </form>
  );
}

export default EditUserProfilePage;
