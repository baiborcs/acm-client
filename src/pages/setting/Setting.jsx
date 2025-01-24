import SettingBody from "../../components/SettingBody";
import Leftbar from "../../components/Leftbar";

const Setting = () => {
  const baseLink = "/setting";
  return (
    <div className="bg-basis max-w-screen-2xl h-screen mx-auto">
      <Leftbar baseLink={baseLink} />
      <div className="ml-[220px] py-6 pr-6">
        <SettingBody />
      </div>
    </div>
  );
};

export default Setting;
