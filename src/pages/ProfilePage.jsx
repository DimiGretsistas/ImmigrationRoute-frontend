import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { AuthContext } from "../context/auth.context";
const API_URL = "http://localhost:5005";

function ProfilePage() {
    const { userId } = useParams();
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");

    useEffect(() => {
        const handleProfileFetch = () => {
            const storedToken = localStorage.getItem('authToken');
            axios
                .get(`${API_URL}/profile/${userId}`, {

                    headers: { Authorization: `Bearer ${storedToken}` }
                })
                .then((res) => {
                    console.log(res);
                    const userData = res.data.user;
                    setName(userData.name);
                    setEmail(userData.email);
                })
                .catch((err) => {
                    console.log(err);
                });
        }

        handleProfileFetch();
    }, [userId]);

    return (

        <div className="ProfileContainer">
            <div className="Greeting">
                <h1>Welcome to your profile</h1>

                <h2>Here you can review your open journey or create new ones!</h2>
            </div>
            <div className="ProfileContentWrapper">
                <h3>{name}</h3>
                <h4>{email}</h4>
            </div>
            <button>My Journeys</button>
            <div>

            </div>
            <button>My </button>
            <button>My </button>
        </div>
    );
}

export default ProfilePage;

