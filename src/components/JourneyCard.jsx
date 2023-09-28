import { Link } from "react-router-dom";

function JourneyCard({ title, description, _id }) {

    return (
        <div className="JourneyCard card">
            <Link to={`/journeys/${_id}`}>
                <h3>{title}</h3>
            </Link>
            <p style={{ maxWidth: "400px" }}>{description} </p>
        </div>
    );
}

export default JourneyCard;
