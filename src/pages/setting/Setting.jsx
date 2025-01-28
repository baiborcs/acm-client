import SettingBody from "../../components/SettingBody";
import Leftbar from "../../components/Leftbar";

const Setting = () => {
  const baseLink = "/setting";
  return (
    <div className="bg-basis max-w-screen-2xl mx-auto">
      <Leftbar baseLink={baseLink} />
      <div className="ml-[220px] bg-basis pr-5">
        <SettingBody />
        <div className="sticky bottom-0 w-full h-9 z-30 bg-basis">
          <div className="w-full bg-charlie h-4 rounded-b-3xl"></div>
        </div>
      </div>
    </div>
  );
};

export default Setting;
