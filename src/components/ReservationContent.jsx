import excel from "../assets/excel.png";
import leftArrow from "../assets/leftArrow.png";
import rightArrow from "../assets/rightArrow.png";
import { reservationData, reservationInfo } from "../constant/general";

const ReservationContent = () => {
  const blockAmount = 8;
  let dataBlocks = [];

  for (let i = 0; i < blockAmount; i++) {
    dataBlocks.push(
      <div
        key={i}
        className={`flex justify-between ${
          i < blockAmount - 1 && "border-b border-gray-300"
        }`}
      >
        {reservationInfo.map((info, index) => (
          <div key={index} className="w-full py-3">
            <h1
              className={`${
                index === 0 && "text-basis"
              } text-center text-[11px]`}
            >
              {reservationData[i][`${info.name}`]}
            </h1>
          </div>
        ))}
      </div>
    );
  }

  return (
    <div className="w-full mt-6">
      <div className="flex items-center justify-between pb-4 text-base font-semibold font-montserrat">
        <h1>Reservation</h1>

        <div className="flex items-center gap-4">
          <div className="flex bg-white rounded-lg border border-gray-300">
            <button className="p-2.5 border-r border-gray-300">
              <img src={leftArrow} width={12} height={12} alt="left-arrow" />
            </button>
            <button className="p-2.5">
              <img src={rightArrow} width={12} height={12} alt="right-arrow" />
            </button>
          </div>
          <div className="flex">
            <div className="flex items-center py-2 px-3 rounded-l-lg bg-white border-y border-l border-gray-300">
              <img src={excel} width={16} height={16} alt="excel" />
            </div>
            <button className="bg-excel px-4 rounded-r-lg font-medium">
              <h1 className="text-[10px] text-white">Upload from Excel</h1>
            </button>
          </div>
        </div>
      </div>

      <div className="mt-4 bg-white rounded-lg border border-gray-300 font-montserrat">
        <div className="flex justify-between border-b border-gray-300">
          {reservationInfo.map((info, index) => (
            <div
              key={index}
              className={`w-full p-2.5 ${index % 2 === 0 ? "" : ""}`}
            >
              <h1 className="text-center text-xs font-semibold text-echo">
                {info.display}
              </h1>
            </div>
          ))}
        </div>
        <div className="">{dataBlocks}</div>
      </div>

      <div className="flex items-center justify-center pt-3 font-montserrat">
        <h1 className="text-[10px] text-gray-600">Showing 1-8 of 80</h1>
      </div>
    </div>
  );
};

export default ReservationContent;
