import HomeHeader from "./HomeHeader";
import ReservationContent from "./ReservationContent";

const ReservationBody = () => {
  return (
    <div className="w-full">
      <div className="pb-3 rounded-3xl bg-charlie">
        <HomeHeader />
        <div className="px-5 w-full h-[455px] overflow-y-scroll home-content-scrollbar">
          <ReservationContent />
        </div>
      </div>
    </div>
  );
};

export default ReservationBody;
