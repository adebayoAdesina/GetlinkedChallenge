import { Route, Routes } from "react-router-dom";
import "./App.css";
import { LandingPage } from "./Views/LandingPage";
const App = () => {
  return (
    <>

        <Routes>
          <Route path="" element={<LandingPage />}/>
          <Route path="/" element={<LandingPage />}/>
        </Routes>

    </>
  );
};

export default App;
