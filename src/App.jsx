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
import ProfilePage from "./pages/Profilepage";
import ResultPage from "./pages/ResultPage";
import PurposeOfStayPage from "./pages/PurposeOfStayPage";
import CurrentlyLivingInPage from "./pages/CurrentlyLivingInPage";
import PakistanOptionsPage from "./pages/PakistanOptionsPage";
import IndiaToGermanyVisaOptions from "./pages/IndiaOptionsPage";
import IndiaOptionsPage from "./pages/IndiaOptionsPage";
import ColumbiaOptionsPage from "./pages/ColumbiaOptionsPage";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route
          path="/home"
          element={<IsPrivate> <CurrentlyLivingInPage /> </IsPrivate>}
        />
        <Route path="/pak"
          element={<IsPrivate> <PakistanOptionsPage /> </IsPrivate>}
        />
        <Route path="/ind"
          element={<IsPrivate> <IndiaOptionsPage /> </IsPrivate>}
        />
        <Route path="/col"
          element={<IsPrivate> <ColumbiaOptionsPage /> </IsPrivate>}
        />
        <Route path="/ResultPage"
          element={<IsPrivate> <ResultPage /> </IsPrivate>}
        />

        <Route
          path="/journeys"
          element={<IsPrivate> <JourneyListPage /> </IsPrivate>}
        />
        <Route
          path="/profile"
          element={<IsPrivate> <ProfilePage /> </IsPrivate>}
        />
        <Route
          path="/profile/:userId"
          element={<IsPrivate> <ProfilePage /> </IsPrivate>}
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