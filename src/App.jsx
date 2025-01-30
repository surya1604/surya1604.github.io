import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

const App = () => {
  return (
    <Router basename="/">
      <ReactLenis root>
        <ScrollToTop />
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
          </Routes>
        </main>
      </ReactLenis>
    </Router>
  );
};

export default App;
