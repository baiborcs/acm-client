import ReportBody from "../../components/ReportBody";
import Leftbar from "../../components/Leftbar";

const Report = () => {
  const baseLink = "/report";
  return (
    <div className="bg-basis max-w-screen-2xl mx-auto">
      <Leftbar baseLink={baseLink} />
      <div className="ml-[220px] bg-basis pr-5">
        <ReportBody />
        <div className="sticky bottom-0 w-full h-9 z-30 bg-basis">
          <div className="w-full bg-charlie h-4 rounded-b-3xl"></div>
        </div>
      </div>
    </div>
  );
};

// const Report = () => {
//   const baseLink = "/report";
//   return (
//     <div className="bg-basis max-w-screen-2xl h-screen mx-auto">
//       <Leftbar baseLink={baseLink} />
//       <div className="ml-[220px] bg-charlie h-screen">
//         <ReportBody />
//       </div>
//     </div>
//   );
// };

export default Report;
