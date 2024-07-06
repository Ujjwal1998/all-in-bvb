import Home from "./pages/home.jsx";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Sidebar from "./components/sidebar.jsx";
import Main from "./components/main.jsx";
import Statisitics from "./components/statistics.jsx";
import ThirdBar from "./components/thirdbar.jsx";
import Header from "./components/header.jsx";
import Footer from "./components/footer.jsx";
import Drawer from "./components/drawer.jsx";

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
        <Drawer />
        <Sidebar />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/stats" element={<Statisitics />} />
        </Routes>
        <ThirdBar />
      </div>
      <Footer />
    </Router>
  );
}

export default App;
