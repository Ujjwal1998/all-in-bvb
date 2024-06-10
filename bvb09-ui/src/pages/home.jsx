import Sidebar from "../components/sidebar.jsx";
import Main from "../components/main.jsx";
import ThirdBar from "../components/thirdbar.jsx";
import Header from "../components/header.jsx";
import Footer from "../components/footer.jsx";
function Home() {
  return (
    <>
      <div className="flex flex-col min-h-screen sm:flex-row">
        <Header />
        <Sidebar />
        <Main />
        <ThirdBar />
        <Footer />
      </div>
    </>
  );
}

export default Home;
