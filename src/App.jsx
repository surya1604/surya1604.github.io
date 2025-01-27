/**
 * @copyright 2024 SuryaVashisth 
 * @license Apache-2.0
 */

/**
 * Components
 */

import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Work from "./components/Work";
import AceLucid from "./components/Acelucid";
import Medivision from "./components/Medivision";
import DDS from "./components/DDS"
import ALHS from "./components/ALHS";
import Extra from "./components/Extra";
import BTD from "./components/BTD";

const App = () => {
  return (
    <>
      <Header />
      <main className="container mx-auto p-4">
        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="/about" element={<About />} />
          <Route path="/work" element={<Work />} />
          <Route path="/acelucid" element={<AceLucid />} />
          <Route path="/medivision" element={<Medivision />} />
          <Route path="/drowsiness" element={<DDS />} />
          <Route path="/light-human" element={<ALHS />} />
          <Route path="/BrainTumor" element={<BTD />} />
          <Route path="/more-work" element={<Extra />} />

          {/* Add more routes here as needed */}
        </Routes>
      </main>
    </>
  );
};

export default App;
