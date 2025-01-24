import BarChart from "./BarChart";

const RequestedService = () => {
  return (
    <div className="mt-12 px-4 py-3 rounded-xl bg-white">
      <div className="relative text-sm font-semibold text-echo font-montserrat">
        <h1>Requested Service by client</h1>
        <div className="absolute top-[25px] bg-basis w-[20px] h-[2px]"></div>
        <div className="absolute left-[23px] top-[26px] bg-gray-300 w-[180px] h-[1px]"></div>
      </div>

      <div className="pt-10">
        <BarChart />
      </div>

      <div className="flex items-center justify-center gap-5 pt-6 pb-2.5 font-montserrat font-medium text-[#5b5b5b] text-[10px]">
        <div className="flex gap-2 items-center">
          <div className="p-1 bg-[#7086fd]"></div>
          <h1 className="">AR</h1>
        </div>
        <div className="flex gap-2 items-center">
          <div className="p-1 bg-[#6fd195]"></div>
          <h1 className="">FS</h1>
        </div>
        <div className="flex gap-2 items-center">
          <div className="p-1 bg-[#ffae4c]"></div>
          <h1 className="">BA</h1>
        </div>
        <div className="flex gap-2 items-center">
          <div className="p-1 bg-[#07dbfa]"></div>
          <h1 className="">GA</h1>
        </div>
      </div>
    </div>
  );
};

export default RequestedService;
