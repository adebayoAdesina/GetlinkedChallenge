import { Route, Routes } from "react-router-dom";
import "./App.css";
import { LandingPage } from "./Views/LandingPage";
import { ContactPage } from "./Views/ContactPage";
import { RegistrationPage } from "./Views/RegistrationPage";
import { useEffect, useState } from "react";
import {
  CreativeImage,
  ChainImageURL,
  BoomImageURL,
  MaleWalking,
} from "./utils/image";

const App = () => {
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 8000);
  }, []);

  return (
    <>
      {loading ? (
        <div className="loading-spinners">
          <div id="html-spinner"></div>
          <div id="html-spinner"></div>
          <p id="html-para">
            <div className="logo">
              <span className="get">
                get<span className="linked">linked</span>
              </span>
            </div>
          </p>
          <img src={CreativeImage} alt="creative" className="creative-image" />
          <img src={ChainImageURL} alt="chain_img" className="chain-image" />
          <img src={BoomImageURL} alt="boom_img" className="boom-image" />
          <img src={MaleWalking} alt="boom_img" className="male-image" />
        </div>
      ) : (
        <Routes>
          <Route path="" element={<LandingPage />} exact />
          <Route path="/contact" element={<ContactPage />} exact />
          <Route path="/register" element={<RegistrationPage />} exact />
        </Routes>
      )}
    </>
  );
};

export default App;
