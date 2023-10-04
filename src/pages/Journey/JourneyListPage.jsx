import AddJourney from "../../components/AddJourney";
import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import JourneyCard from "../../components/JourneyCard";
import AddTask from "../../components/AddTask";
import BlueMap from "../../assets/blue-world-map.jpg"
const API_URL = "http://localhost:5005";


function JourneyListPage() {
    const [journeys, setJourneys] = useState([]);

    const getAllJourneys = () => {
        const storedToken = localStorage.getItem("authToken");

        axios
            .get
            (`${API_URL}/journeys`,
                {
                    headers: { Authorization: `Bearer ${storedToken}` },
                })
            .then((response) => setJourneys(response.data))
            .catch((error) => console.log(error));
    };


    useEffect(() => {
        getAllJourneys();
    }, []);


    return (

        <div className="JourneyListPage">
            <h1>Welcome to your list of Journeys</h1>
            <AddJourney refreshJourneys={getAllJourneys} />
            {journeys.map((journey) => (
                <JourneyCard key={journey._id} {...journey} />
            ))}

        </div>
    );
}

export default JourneyListPage;
