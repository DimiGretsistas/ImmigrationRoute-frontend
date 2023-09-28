import { useState, useEffect } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";
import AddJourney from "../components/AddJourney";
import AddTask from "../components/AddTask";
import TaskCard from "../components/TaskCard";

const API_URL = "http://localhost:5005";

function JourneyDetailsPage(props) {
    const [journey, setJourney] = useState(null);

    const { journeyId } = useParams();

    const getJourney = () => {
        axios
            .get(`${API_URL}/api/journeys/${journeyId}`)
            .then((response) => {
                const oneJourney = response.data;
                setJourney(oneJourney);
            })
            .catch((error) => console.log(error));
    };

    useEffect(() => {
        getJourney();
    }, []);

    return (
        <div className="JourneyDetails">
            {journey ? (
                <>
                    <h1>{journey.title}</h1>
                    <p>{journey.description}</p>
                </>
            ) : (
                <p>Loading...</p>
            )}

            <AddTask refreshJourney={getJourney} journeyId={journeyId} />

            {journey && journey.tasks.map((task) => (
                <TaskCard key={task._id} {...task} />
            ))}

            <Link to="/journeys">
                <button>Back to journeys</button>
            </Link>

            <Link to={`/journeys/edit/${journeyId}`}>
                <button>Edit Journey</button>
            </Link>
        </div>
    );
}

export default JourneyDetailsPage;
