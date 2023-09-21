import { Route, Routes } from "react-router-dom";
import "./App.css";
import { LandingPage } from "./Views/LandingPage";
import { ContactPage } from "./Views/ContactPage";
import { RegistrationPage } from "./Views/RegistrationPage";
const App = () => {
  return (
    <>

        <Routes>
          <Route path="" element={<LandingPage />} exact/>
          <Route path="/contact" element={<ContactPage />} exact/>
          <Route path="/register" element={<RegistrationPage />} exact/>
        </Routes>

    </>
  );
};

export default App;
