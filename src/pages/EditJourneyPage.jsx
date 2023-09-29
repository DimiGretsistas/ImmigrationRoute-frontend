import { useState, useEffect } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";

const API_URL = "http://localhost:5005";

function EditJourneyPage(props) {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");

    const { journeyId } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        const storedToken = localStorage.getItem('authToken');

        axios
            .get(`${API_URL}/journeys/${journeyId}`,
                { headers: { Authorization: `Bearer ${storedToken}` } }
            )
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

        const storedToken = localStorage.getItem('authToken');


        axios
            .put(`${API_URL}/journeys/${journeyId}`, requestBody,
                { headers: { Authorization: `Bearer ${storedToken}` } }
            )
            .then((response) => {
                navigate(`/journeys/${journeyId}`)
            });
    };

    const deleteJourney = () => {

        const storedToken = localStorage.getItem('authToken');

        axios
            .delete(`${API_URL}/journeys/${journeyId}`,
                { headers: { Authorization: `Bearer ${storedToken}` } })
            .then(() => {
                navigate("/journeys");
            })
            .catch((err) => console.log(err));
    };
    return (
        <div className="EditJourneyPage">
            <h3>Edit your Journey</h3>

            <form onSubmit={handleFormSubmit}>
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

                <input type="submit" value="Submit Update" />
            </form>

            <button onClick={deleteJourney}>Delete Journey</button>

        </div>
    );
}

export default EditJourneyPage;
