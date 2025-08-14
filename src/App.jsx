//import reactLogo from "./assets/react.svg";
//import viteLogo from "/vite.svg";

import Squares from "./assets/animation/Squares";
import HomePage from "./assets/pages/Home";
import Footer from "./components/footer";
import Header from "./components/header";
import Hero from "./components/hero";
import { Routes, Route } from "react-router";

function App() {
  return (
    <Routes>
      <Route path='/portfolio' element={<HomePage />} />
    </Routes>
  );
}

export default App;
