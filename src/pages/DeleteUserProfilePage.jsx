import React from "react";
import axios from "axios";

function DeleteUserProfilePage({ user }) {
  const handleDeleteProfile = () => {
    if (window.confirm("Are you sure you want to delete your profile?")) {
      axios
        .delete(`/user/${user._id}`)
        .then(() => {
          console.log("User profile deleted");
        })
        .catch((error) => {          console.error("Error deleting user profile:", error);
        });
    }
  };

  return (
    <div>
      <button onClick={handleDeleteProfile}>Delete Profile</button>
    </div>
  );
}

export default DeleteUserProfilePage;
