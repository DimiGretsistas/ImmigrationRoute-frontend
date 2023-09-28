import "./App.css";
import { Routes, Route } from 'react-router-dom';

import Navbar from "./components/Navbar";
import HomePage from "./pages/HomePage";
import JourneyListPage from "./pages/JourneyListPage";
import JourneyDetailsPage from "./pages/JourneyDetailsPage";
import EditJourneyPage from "./pages/EditJourneyPage";


function App() {
  return (
    <div className="App">
      <Navbar />

      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/journeys' element={<JourneyListPage />} />
        <Route path="/journeys/:journeyId" element={<JourneyDetailsPage />} />
        <Route path="/journeys/edit/:journeyId" element={<EditJourneyPage />} />
      </Routes>
    </div>
  );
}
export default App;