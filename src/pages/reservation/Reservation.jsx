import ReservationBody from "../../components/ReservationBody";
import Leftbar from "../../components/Leftbar";

const Reservation = () => {
  const baseLink = "/reservation";
  return (
    <div className="bg-basis max-w-screen-2xl mx-auto">
      <Leftbar baseLink={baseLink} />
      <div className="ml-[220px] bg-basis pr-5">
        <ReservationBody />
        <div className="sticky bottom-0 w-full h-9 z-30 bg-basis">
          <div className="w-full bg-charlie h-4 rounded-b-3xl"></div>
        </div>
      </div>
    </div>
  );
};

// const Reservation = () => {
//   const baseLink = "/reservation";
//   return (
//     <div className="bg-basis max-w-screen-2xl h-screen mx-auto">
//       <Leftbar baseLink={baseLink} />
//       <div className="ml-[220px] py-6 pr-6">
//         <ReservationBody />
//       </div>
//     </div>
//   );
// };

export default Reservation;
