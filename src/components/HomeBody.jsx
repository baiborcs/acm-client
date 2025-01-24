import DeliveredService from "./DeliveredService";
import HomeDashboard from "./HomeDashboard";
import HomeHeader from "./HomeHeader";
import RequestedService from "./RequestedService";

const HomeBody = () => {
  return (
    <div className="w-full">
      <div className="pb-3 rounded-3xl bg-charlie">
        <HomeHeader />
        <div className="px-5 w-full h-[455px] overflow-y-scroll home-content-scrollbar">
          <HomeDashboard />
          <DeliveredService />
          <RequestedService />
        </div>
      </div>
    </div>
  );
};

export default HomeBody;
