import ReportBody from "../../components/ReportBody";
import Leftbar from "../../components/Leftbar";

const Report = () => {
  const baseLink = "/report";
  return (
    <div className="bg-basis max-w-screen-2xl h-screen mx-auto">
      <Leftbar baseLink={baseLink} />
      <div className="ml-[220px] py-6 pr-6">
        <ReportBody />
      </div>
    </div>
  );
};

export default Report;
