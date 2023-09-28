import { Link } from "react-router-dom";
import axios from 'axios';

function Navbar() {
  return (
    <nav>
      <Link to="/">
        <button>Home</button>
      </Link>

      <Link to="/journeys">
        <button>Journeys</button>
      </Link>
    </nav>
  );
}

export default Navbar;
