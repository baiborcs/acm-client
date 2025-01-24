import ReservationBody from "../../components/ReservationBody";
import Leftbar from "../../components/Leftbar";

const Reservation = () => {
  const baseLink = "/reservation";
  return (
    <div className="bg-basis max-w-screen-2xl h-screen mx-auto">
      <Leftbar baseLink={baseLink} />
      <div className="ml-[220px] py-6 pr-6">
        <ReservationBody />
      </div>
    </div>
  );
};

export default Reservation;
