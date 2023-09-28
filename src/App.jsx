import "./App.css";
import { Routes, Route } from 'react-router-dom';

import Navbar from "./components/Navbar";
import HomePage from "./pages/HomePage";
import JourneyListPage from "./pages/JourneyListPage";
import JourneyDetailsPage from "./pages/JourneyDetailsPage";
import EditJourneyPage from "./pages/EditJourneyPage";
import SignupPage from "./pages/SignupPage";
import LoginPage from "./pages/LoginPage";
import IsAnon from "./components/IsAnon";
import IsPrivate from "./components/isPrivate";


function App() {
  return (
    <div className="App">
      <Navbar />

      <Routes>
        <Route
          path="/journeys"
          element={<IsPrivate> <JourneyListPage /> </IsPrivate>}
        />

        <Route
          path="/journeys/:journeyId"
          element={<IsPrivate> <JourneyDetailsPage /> </IsPrivate>}
        />

        <Route
          path="/journeys/edit/:journeyId"
          element={<IsPrivate> <EditJourneyPage /> </IsPrivate>}
        />

        <Route path="/signup" element={<IsAnon> <SignupPage /> </IsAnon>} />
        <Route path="/login" element={<IsAnon> <LoginPage /> </IsAnon>} />

      </Routes>
    </div>
  );
}

export default App;