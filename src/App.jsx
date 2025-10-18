import Body from "./components/Body.jsx";
import Login from "./components/Login.jsx";
import Signup from "./components/SignUp.jsx";
import Feed from "./components/Feed.jsx";
import { BrowserRouter,Routes ,Route } from "react-router-dom";
import { Provider } from "react-redux";
import appStore from "./utils/appStore.jsx";
import AppointmentBookingForm from "./components/LiveConsultation/AppointmentBookingForm.jsx";

function App() {
  return (
    <>
       <Provider store={appStore}>
        <BrowserRouter basename="/">
        <Routes>
          <Route path="/" element={<Body />}/>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/feed" element={<Feed />} />
          <Route path="/appointmentbookingform" element={<AppointmentBookingForm />} />
        </Routes>
        </BrowserRouter>
      </Provider>
    </>
  );
}

export default App;
