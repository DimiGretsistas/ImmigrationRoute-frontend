import { Link } from "react-router-dom";
import axios from 'axios';
import { useContext } from "react";
import { AuthContext } from "../context/auth.context";
import { useParams } from 'react-router-dom';




function Navbar() {
  const {
    isLoggedIn,
    user,
    logOutUser
  } = useContext(AuthContext);
  const { userId } = useParams();


  return (
    <nav>
      <Link to="/home">
        <button>Home</button>
      </Link>

      {isLoggedIn && (
        <>
          <Link to="/journeys">
            <button>Journeys</button>
          </Link>

          <Link to={`/profile/${userId}`}>
            <button> Profile Page</button>
          </Link>

          <button onClick={logOutUser}>Logout</button>
          <span>{user && user.name}</span>
        </>
      )}

      {!isLoggedIn && (
        <>
          <Link to="/signup"> <button>Sign Up</button> </Link>
          <Link to="/login"> <button>Login</button> </Link>
        </>
      )}
    </nav>
  );
}

export default Navbar;
