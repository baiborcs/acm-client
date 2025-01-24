import HomeHeader from "./HomeHeader";
import comingSoon from "../assets/comingSoon.png";

const SettingBody = () => {
  return (
    <div className="w-full">
      <div className="pb-3 rounded-3xl bg-charlie">
        <HomeHeader />
        <div className="px-5 w-full h-[455px] overflow-y-scroll home-content-scrollbar">
          {/* <h1>Setting goes here</h1> */}
          <div className="flex items-center justify-center py-48 bg-white rounded-xl">
            <img src={comingSoon} width={80} height={80} alt="coming-soon" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SettingBody;
