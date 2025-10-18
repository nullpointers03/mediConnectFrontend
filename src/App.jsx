import Body from "./components/Body.jsx";
import Login from "./components/Login.jsx";
import Signup from "./components/SignUp.jsx";
import Feed from "./components/Feed.jsx";
import LiveConsultationPage from "./components/Features/live-consultation.jsx"; // add import for live consultation page
import LabTestPage from "./components/Features/labTestPage.jsx"; 
import MedicineDeliveryPage from "./components/Features/medicine-delivery.jsx";
import MultilingualBotPage from "./components/Features/multilingual-bot.jsx";
import DiseaseModelsPage from "./components/Features/disease-models.jsx";
import MedicalPassportPage from "./components/Features/medical-passport.jsx";
import Chat from "../src/components/Features/chat.jsx";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";
import appStore from "./utils/appStore.jsx";
import AppointmentPage from "./components/Features/Appointment.jsx";

function App() {
  return (
    <Provider store={appStore}>
      <BrowserRouter basename="/">
        <Routes>
          <Route path="/" element={<Body />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/feed" element={<Feed />} />
          {/* Add your feature page routes */}
          <Route path="/live-consultation" element={<LiveConsultationPage />} />
          <Route path="/lab-test" element={<LabTestPage />} />
          <Route path="/medicine-delivery" element={<MedicineDeliveryPage />} />
          <Route path="/multilingual-bot" element={<MultilingualBotPage />} />
          <Route path="/disease-models" element={<DiseaseModelsPage />} />
          <Route path="/medical-passport" element={<MedicalPassportPage />} />
          <Route path="/chat" element={<Chat />} />
          <Route path="/appointment" element={<AppointmentPage />}/>
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
