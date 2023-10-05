import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

const API_URL = "http://localhost:5005";


function EditUserProfilePage() {
  const { userId } = useParams();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    name: "",
    avatar: "",
  });
  const [email, setEmail] = useState("")
  const [name, setName] = useState("")


  const navigate = useNavigate()


  console.log(email, name)
  useEffect(() => {
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
  console.log(userId)
  const handleSubmit = (e) => {
    e.preventDefault();
    const requestBody = { email, name };

    const storedToken = localStorage.getItem('authToken');
    console.log(storedToken)
    axios
      .put(`${API_URL}/user/${userId}`, {
        email,
        name
      },
        { headers: { Authorization: `Bearer ${storedToken}` } }
      )
      .then((response) => {
        console.log(response)
        navigate(`/home`)
      });
  };


  return (
    <div className="form-container">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="Email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <button className="save-changes" type="submit">Save Changes</button>
      </form>
    </div>
  );
}

export default EditUserProfilePage;
