import Sidebar from "../components/sidebar";
import Main from "../components/main";
import ThirdBar from "../components/thirdbar.jsx";
function Home() {
  return (
    <>
      <div className="flex flex-row">
        <Sidebar />
        <Main />
        <ThirdBar />
      </div>
    </>
  );
}

export default Home;
