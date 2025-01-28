import HomeBody from "../../components/HomeBody";
import Leftbar from "../../components/Leftbar";

const Home = () => {
  const baseLink = "/home";
  return (
    <div className="bg-basis max-w-screen-2xl mx-auto">
      <Leftbar baseLink={baseLink} />
      <div className="ml-[220px] bg-basis pr-5">
        <HomeBody />
        <div className="sticky bottom-0 w-full h-9 z-30 bg-basis">
          <div className="w-full bg-charlie h-4 rounded-b-3xl"></div>
        </div>
      </div>
    </div>
  );
};
// const Home = () => {
//   const baseLink = "/home";
//   return (
//     <div className="bg-basis max-w-screen-2xl h-screen mx-auto">
//       <Leftbar baseLink={baseLink} />
//       <div className="ml-[220px] py-6 pr-6">
//         <HomeBody />
//       </div>
//     </div>
//   );
// };

export default Home;
