import HomeBody from "../../components/HomeBody";
import Leftbar from "../../components/Leftbar";

const Home = () => {
  const baseLink = "/home";
  return (
    <div className="bg-basis max-w-screen-2xl h-screen mx-auto">
      <Leftbar baseLink={baseLink} />
      <div className="ml-[220px] py-6 pr-6">
        <HomeBody />
      </div>
    </div>
  );
};

export default Home;
