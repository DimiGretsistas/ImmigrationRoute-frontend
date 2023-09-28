import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from 'react-router-dom';


const API_URL = "http://localhost:5005";

function EditJourneyPage(props) {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");

    const { journeyId } = useParams();

    useEffect(() => {
        axios
            .get(`${API_URL}/api/journeys/${journeyId}`)
            .then((response) => {
                const oneJourney = response.data;
                setTitle(oneJourney.title);
                setDescription(oneJourney.description);
            })
            .catch((error) => console.log(error));
    }, [journeyId]);

    const handleFormSubmit = (e) => {
        e.preventDefault();
        const requestBody = { title, description };

        axios
            .put(`${API_URL}/api/journeys/${journeyId}`, requestBody)
            .then((response) => {
                navigate(`/journeys/${journeyId}`)
            });
    };

    return (
        <div className="EditJourneyPage">
            <h3>Edit the Journey</h3>

            <form form onSubmit={handleFormSubmit}>
                <label>Title:</label>
                <input
                    type="text"
                    name="title"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                />

                <label>Description:</label>
                <textarea
                    name="description"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                />

                <input type="submit" value="Submit" />
            </form>
        </div>
    );
}

export default EditJourneyPage;
