
import { useState, useEffect } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";
import AddJourney from "../components/AddJourney";
import react from 'react';


const API_URL = "http://localhost:5005";


function JourneyDetailsPage(props) {
    const [journey, setJourneys] = useState(null);
    const { journeyId } = useParams();

    const getJourney = () => {
        axios
            .get(`${API_URL}/api/journeys/${journeyId}`)
            .then((response) => {
                const oneJourney = response.data;
                setJourneys(oneJourney);
            })
            .catch((error) => console.log(error));
    };


    useEffect(() => {
        getJourney();
    }, []);

    return (
        <div className="JourneyDetails">
            {journey && (
                <>
                    <h1>{journey.title}</h1>
                    <p>{journey.description}</p>
                </>
            )}

            { journey &&
                journey.task.map((task) => (
                    <li className="TaskCard card" key={task._id}>
                        <h3>{task.title}</h3>
                        <h4>Description:</h4>
                        <p>{task.description}</p>
                    </li>
                ))}

            <Link to='/journeys'>
                <button>Back to journeys</button>
            </Link>

            <Link to={`/journeys/edit/${journeyId}`}>
                <button>Edit Journey</button>
            </Link>
        </div >
    );
}

export default JourneyDetailsPage;