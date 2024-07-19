import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Sidebar from "./components/sidebar.jsx";
import Statisitics from "./pages/Stats.jsx";
import ThirdBar from "./components/thirdbar.jsx";
import Header from "./components/header.jsx";
import Footer from "./components/footer.jsx";
import Drawer from "./components/drawer.jsx";
import Home from "./pages/Home.jsx";
import Schedule from "./pages/Schedule.jsx";

function App() {
  return (
    <Router>
      <Header />
      <div
        className="
        flex
        bg-zinc-900
        sm:flex-row
        sm:w-screen"
      >
        {/* <Drawer /> */}
        <Sidebar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/stats" element={<Statisitics />} />
          <Route path="/schedule" element={<Schedule />} />
        </Routes>
      </div>
      <Footer />
    </Router>
  );
}

export default App;
