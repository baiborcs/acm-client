import HomeHeader from "./HomeHeader";
import ReservationContent from "./ReservationContent";

const ReservationBody = () => {
  return (
    <div className="w-full">
      <div className="bg-charlie">
        <HomeHeader />
        <div className="px-5 w-full">
          <ReservationContent />
        </div>
      </div>
    </div>
  );
};

export default ReservationBody;
