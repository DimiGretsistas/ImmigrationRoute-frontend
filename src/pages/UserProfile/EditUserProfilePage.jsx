import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

function EditUserProfilePage() {
  const { userId } = useParams();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    name: "",
    avatar: "",
  });

  useEffect(() => {
    // Fetch user data based on the userId parameter
    const fetchUserData = async () => {
      try {
        const response = await axios.get(`/user/${userId}`);
        const userData = response.data.user;
        setFormData({
          email: userData.email,
          name: userData.name,
          avatar: userData.avatar,
        });
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };

    fetchUserData();
  }, [userId]);

  const handleSubmit = (e) => {
    e.preventDefault();

    axios
      .put(`/user/${userId}/edit`, formData)
      .then((response) => {
        console.log("User profile updated:", response.data);
      })
      .catch((error) => {
        console.error("Error updating user profile:", error);
      });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <div className="form-container">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="email"
          value={formData.email}
          onChange={handleChange}
        />
        <input
          type="password"
          name="password"
          placeholder="Current Password"
          value={formData.password}
          onChange={handleChange}
        />
        <button type="submit">Save Changes</button>
      </form>
    </div>
  );
}

export default EditUserProfilePage;
