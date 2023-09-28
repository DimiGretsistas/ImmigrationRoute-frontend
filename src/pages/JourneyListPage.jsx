import AddJourney from "../components/AddJourney";
import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const API_URL = "http://localhost:5005";


function JourneyListPage() {
    const [journeys, setJourneys] = useState([]);

    const getAllJourneys = () => {
        axios
            .get(`${API_URL}/api/journeys`)
            .then((response) => {
                console.log(response)
                setJourneys(response.data)
            })
            .catch((error) => console.log(error));
    };


    useEffect(() => {
        getAllJourneys();
    }, []);


    return (
        <div className="JourneyListPage">
            <AddJourney refreshJourneys={getAllJourneys} />

            {journeys.map((journey) => {
                return (
                    <div className="JourneyCard card" key={journey._id}>
                        <Link to={`/journeys/${journey._id}`}>
                            <h3>{journey.title}</h3>
                        </Link>
                    </div>
                );
            })}

        </div>
    );
}

export default JourneyListPage;
