import { Route, Routes, useLocation } from "react-router-dom";
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
import { AnimatePresence } from "framer-motion";
import ScrollTop from "./utils/ScrollTop";

const App = () => {
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 4000);
  }, []);

  const location = useLocation();
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
        <>
        <ScrollTop/>
        <AnimatePresence>
          <Routes location={location} key={location.pathname}>
            <Route path="" element={<LandingPage />} exact />
            <Route path="/contact" element={<ContactPage />} exact />
            <Route path="/register" element={<RegistrationPage />} exact />
          </Routes>
        </AnimatePresence>
        </>
      )}
    </>
  );
};

export default App;
