import Sidebar from "../components/sidebar.jsx";
import Main from "../components/main.jsx";
import ThirdBar from "../components/thirdbar.jsx";
import Header from "../components/header.jsx";
import Footer from "../components/footer.jsx";
function Home() {
  return (
    <>
      <div className="flex flex-col min-h-screen bg-zinc-900 sm:flex-row sm:w-screen">
        <Header />
        <Sidebar />
        <Main />
        <ThirdBar />
      </div>
      <Footer />
    </>
  );
}

export default Home;
