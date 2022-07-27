import "./App.css";
import Home from "./components/Home/Home";
import Admin from "./components/pages/Admin";
import Candidate from "./components/pages/Candidate";
import Mentor from "./components/pages/Mentor";
import background from "./background.jpg";
import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
  return (
    <BrowserRouter>
      <div
        className="fixed inset-0 overflow-auto	"
        style={{ backgroundImage: `url(${background})` }}
      >
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="mentor" element={<Mentor />} />
          <Route path="candidate" element={<Candidate />} />
          <Route path="admin" element={<Admin />}></Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
