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
import ProfilePage from "./pages/UserProfilePage";
import ResultPage from "./pages/ResultPage";
import PakistanOptionsPage from "./pages/Pakistan/PakistanOptionsPage";
import IndiaOptionsPage from "./pages/India/IndiaOptionsPage";
import CurrentPlace from "./pages/CurrentPlace";
import UsaOptionsPage from "./pages/USA/UsaOptionsPage";
import SriLankaOptionsPage from "./pages/SriLanka/SriLankaOptionsPage";
import NewZealandOptionsPage from "./pages/Australia/AustraliaOptionsPage";
import PakistanStudyVisa from "./pages/Pakistan/PakistanStudyVisa";
import PakistanJobSeekerVisaPage from "./pages/Pakistan/PakistanJobSeekerVisa";
import PakistanFamilyReunionVisa from "./pages/Pakistan/PakistanFamilyReunionVisa";
import IndiaJobSeekerVisa from "./pages/India/IndiaJobSeekerVisaPage.JSX";
import IndiaStudyVisaPage from "./pages/India/IndiaStudyVisaPage";
import EditUserProfilePage from "./pages/EditUserProfilePage";
import UserProfilePage from "./pages/UserProfilePage";
import IndiaFamilyReunionVisaChecklist from "./pages/India/IndiaFamilyReunionPage";
import SriLankaJobSeekerVisaPage from "./pages/SriLanka/SriLankaJobSeekerVisaPage";
import SriLankaStudyVisaPage from "./pages/SriLanka/SriLankaSudyVisaPage";
import SriLankaFamilyReunionVisaPage from "./pages/SriLanka/SriLankaFamilyReunionVisaPage";
import UsaStudyVisaPage from "./pages/USA/UsaStudyVisaPage";
import UsaJobSeekerVisaPage from "./pages/USA/UsaJobSeekerVisaPage";
import UsaFamilyReunionVisaPage from "./pages/USA/UsaFamilyReunionVisaPage";
import AustraliaOptionsPage from "./pages/Australia/AustraliaOptionsPage";
import AustraliaFamilyReunionVisaPage from "./pages/Australia/AustraliaFamilyReunionVisaPage";
import AustraliaStudyVisaPage from "./pages/Australia/AustraliaStudyVisaPage";
import AustraliaJobSeekerVisaPage from "./pages/Australia/AustraliaJobSeekerVisaPage";
import GermanyOptionsPage from "./pages/Germany/GermanyOptionspAGE.JSX";
import GermanyStudyVisaPage from "./pages/Germany/GermanyStudyVisaPage";

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
        <Route path="/pakistan-to-germany/family-reunion"
          element={<IsPrivate> <PakistanFamilyReunionVisa /> </IsPrivate>}
        />
        <Route path="/ind"
          element={<IsPrivate> <IndiaOptionsPage /> </IsPrivate>}
        />
        <Route path="/india-to-germany/student"
          element={<IsPrivate> <IndiaStudyVisaPage /> </IsPrivate>}
        />
        <Route path="/india-to-germany/jobseeker"
          element={<IsPrivate> <IndiaJobSeekerVisa /> </IsPrivate>}
        />
        <Route path="/india-to-germany/family-reunion"
          element={<IsPrivate> <IndiaFamilyReunionVisaChecklist /> </IsPrivate>}
        />
        <Route path="/sriLanka"
          element={<IsPrivate> <SriLankaOptionsPage /> </IsPrivate>}
        />
        <Route path="/sriLanka-to-germany/student"
          element={<IsPrivate> <SriLankaStudyVisaPage /> </IsPrivate>}
        />
        <Route path="/sriLanka-to-germany/jobseeker"
          element={<IsPrivate> <SriLankaJobSeekerVisaPage /> </IsPrivate>}
        />
        <Route path="/sriLanka-to-germany/family-reunion"
          element={<IsPrivate> <SriLankaFamilyReunionVisaPage /> </IsPrivate>}
        />
        <Route path="/usa"
          element={<IsPrivate> <UsaOptionsPage /> </IsPrivate>}
        />
        <Route path="/usa-to-germany/student"
          element={<IsPrivate> <UsaStudyVisaPage /> </IsPrivate>}
        />
        <Route path="/usa-to-germany/jobseeker"
          element={<IsPrivate> <UsaJobSeekerVisaPage /> </IsPrivate>}
        />
        <Route path="/usa-to-germany/family-reunion"
          element={<IsPrivate> <UsaFamilyReunionVisaPage /> </IsPrivate>}
        />
        <Route path="/aus"
          element={<IsPrivate> <AustraliaOptionsPage /> </IsPrivate>}
        />
        <Route path="/aus-to-germany/student"
          element={<IsPrivate> <AustraliaStudyVisaPage /> </IsPrivate>}
        />
        <Route path="/aus-to-germany/jobseeker"
          element={<IsPrivate> <AustraliaJobSeekerVisaPage /> </IsPrivate>}
        />
        <Route path="/aus-to-germany/family-reunion"
          element={<IsPrivate> <AustraliaFamilyReunionVisaPage /> </IsPrivate>}
        />
        <Route path="/ger"
          element={<IsPrivate> <GermanyOptionsPage /> </IsPrivate>}
        />
        <Route path="/in-germany/student"
          element={<IsPrivate> <GermanyStudyVisaPage /> </IsPrivate>}
        />
        <Route path="/ResultPage"
          element={<IsPrivate> <ResultPage /> </IsPrivate>}
        />
        <Route
          path="/journeys"
          element={<IsPrivate> <JourneyListPage /> </IsPrivate>}
        />
        <Route
          path="/user"
          element={<IsPrivate> <UserProfilePage /> </IsPrivate>}
        />
        <Route
          path="/user/:userId"
          element={<IsPrivate> <UserProfilePage /> </IsPrivate>}
        />
        <Route
          path="/user/:userId/edit"
          element={<IsPrivate> <EditUserProfilePage /> </IsPrivate>}
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