import { useState } from "react";
import axios from "axios";

const API_URL = "http://localhost:5005";


function AddTask(props) {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");


    const handleSubmit = (e) => {
        e.preventDefault();

        const { journeyId } = props;
        const requestBody = { title, description, journeyId };

        axios
            .post(`${API_URL}/task/tasks`, requestBody,

            )
            .then((response) => {
                setTitle("");
                setDescription("");
                props.refreshJourney();
            })
            .catch((error) => console.log(error));
    };

    return (
        <div className="AddTask">
            <h3>Add New Task</h3>

            <form onSubmit={handleSubmit}>
                <label>Title:</label>
                <input className="title-input"
                    type="text"
                    name="title"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                />

                <label>Description:</label>
                <textarea className="text-description"
                    type="text"
                    name="description"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                />

                <button className="add-task" type="submit">Add Task</button>
            </form>
        </div>
    );
}

export default AddTask;
