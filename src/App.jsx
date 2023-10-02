import "./App.css";
import { Routes, Route } from 'react-router-dom';

import Navbar from "./components/Navbar";
import HomePage from "./pages/HomePage";
import JourneyListPage from "./pages/Journey/JourneyListPage";
import JourneyDetailsPage from "./pages/Journey/JourneyDetailsPage";
import EditJourneyPage from "./pages/Journey/EditJourneyPage";
import SignupPage from "./pages/SignupPage";
import LoginPage from "./pages/LoginPage";
import IsAnon from "./components/IsAnon";
import IsPrivate from "./components/isPrivate";
import ProfilePage from "./pages/Profilepage";
import ResultPage from "./pages/ResultPage";
import PakistanOptionsPage from "./pages/Pakistan/PakistanOptionsPage";
import IndiaOptionsPage from "./pages/India/IndiaOptionsPage";
import CurrentPlace from "./pages/CurrentPlace";
import UsaOptionsPage from "./pages/USA/UsaOptionsPage";
import SriLankaOptionsPage from "./pages/SriLanka/SriLankaOptionsPage";
import NewZealandOptionsPage from "./pages/NewZealand/NewZealandOptionsPage";
import FamilyReunionVisaChecklist from "./pages/India/FamilyReunionVisaChecklist";
import PakistanStudyVisa from "./pages/Pakistan/PakistanStudyVisa";
import PakistanJobSeekerVisaPage from "./pages/Pakistan/PakistanJobSeekerVisa";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route
          path="/home"
          element={<IsPrivate> <HomePage /> </IsPrivate>}
        />
        <Route
          path="/currentPlace"
          element={<IsPrivate> <CurrentPlace /> </IsPrivate>}
        />
        <Route path="/pak"
          element={<IsPrivate> <PakistanOptionsPage /> </IsPrivate>}
        />
        <Route path="/pakistan-to-germany/student"
          element={<IsPrivate> <PakistanStudyVisa /> </IsPrivate>}
        />
        <Route path="/pakistan-to-germany/jobseeker"
          element={<IsPrivate> <PakistanJobSeekerVisaPage /> </IsPrivate>}
        />

        <Route path="/ind"
          element={<IsPrivate> <IndiaOptionsPage /> </IsPrivate>}
        />
        <Route path="/india-to-germany/student"
          element={<IsPrivate> <FamilyReunionVisaChecklist /> </IsPrivate>}
        />
        <Route path="/sriLanka"
          element={<IsPrivate> <SriLankaOptionsPage /> </IsPrivate>}
        />
        <Route path="/usa"
          element={<IsPrivate> <UsaOptionsPage /> </IsPrivate>}
        />
        <Route path="/newZealand"
          element={<IsPrivate> <NewZealandOptionsPage /> </IsPrivate>}
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