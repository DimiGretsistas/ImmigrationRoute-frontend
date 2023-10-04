import { Children, useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { AuthContext } from "../context/auth.context";

const API_URL = "http://localhost:5005";

function UserProfilePage() {
    const { userId } = useParams();
    const [username, setsetUsername] = useState("");
    const [email, setEmail] = useState("");

    useEffect(() => {
        const getUser = async () => {
            try {
                const storedToken = localStorage.getItem('authToken');
                // console.log("Fetching user profile for userId:", userId);
                const response = await axios.get(`${API_URL}/user/${userId}`, { headers: { Authorization: `Bearer ${storedToken}` } });
                console.log("Axios Response:", response);
                const userData = response.data.user;
                setsetUsername(userData.name);
                setEmail(userData.email);
            } catch (error) {
                console.error("Error fetching user profile:", error);
            }
        };

        getUser();
    }, [userId]);


    return (
        <div className="ProfileContainer">
            <div className="Greeting">
                <h1>Welcome to your profile {username}</h1>
                <h2>Here you can review your open journey or create new ones!</h2>
            </div>
            <div className="ProfileContentWrapper">
                <h3>{userId}</h3>
            </div>
        </div>
    );
}

export default UserProfilePage;