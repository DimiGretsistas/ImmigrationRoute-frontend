import { Children, useContext, useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { AuthContext } from "../../context/auth.context";

const API_URL = "http://localhost:5005";

function UserProfilePage() {
    const navigate = useNavigate()
    const { userId } = useParams();
    const [username, setsetUsername] = useState("");
    const [email, setEmail] = useState("");
    const { authenticateUser } = useContext(AuthContext)

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
    const handleEditClick = () => {
        // Redirect to the edit profile page
        history.push(`/user/${userId}/edit`);
    };

    const handleDeleteClick = async () => {
        try {
            const storedToken = localStorage.getItem("authToken");
            await axios.delete(
                `${API_URL}/user/${userId}`,
                {
                    headers: { Authorization: `Bearer ${storedToken}` },
                }
            );
            // Redirect to a different page (e.g., a success page or home page) after deletion
            localStorage.removeItem("authToken")
            authenticateUser()
            navigate("/login")
        } catch (error) {
            console.error("Error deleting user profile:", error);
        }
    };

    return (
        <div className="ProfileContainer">
            <div className="Greeting">
                <h1>Welcome to your profile, {username}</h1>
                <h2>Within this section, you have the ability to review, make edits to, and even delete your profile.</h2>
            </div>
            <div className="ProfileWrapper">
                <div className="ProfileContentWrapper">
                    <p className="data-profile">Email: {email}</p>
                    <p className="data-profile">Name: {username}</p>

                    <Link to={`/user/${userId}/edit`} className="edit-profile-link">Edit Profile</Link>
                    <button onClick={handleDeleteClick}>Delete Profile</button>
                </div>
            </div>
        </div>
    );
}

export default UserProfilePage;