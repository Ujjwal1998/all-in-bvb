import Sidebar from "../components/sidebar";
import Main from "../components/main";
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
