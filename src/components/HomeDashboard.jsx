import { dashboardOpts } from "../constant/general";

const HomeDashboard = () => {
  return (
    <div className="relative w-full mt-3">
      <div className="pb-4 text-base font-semibold font-montserrat">
        <h1>Dashboard</h1>
      </div>
      <div className="grid grid-cols-4 grid-flow-row gap-8 w-full font-montserrat">
        {dashboardOpts.map((opt, index) => (
          <div
            key={index}
            className="flex flex-col justify-between h-[130px] rounded-lg bg-white p-3 z-10"
          >
            <div className="relative flex justify-between">
              <div>
                <h1 className="text-xs text-delta font-medium">{opt.name}</h1>
              </div>
              <div>
                <img
                  src={opt.icon}
                  width={opt.size}
                  height={opt.size}
                  alt={opt.name}
                />
              </div>

              <div className="absolute top-9">
                <h1 className="text-lg font-semibold">{opt.order}</h1>
              </div>
            </div>

            <div className="flex items-center gap-1.5">
              <div>
                <img
                  src={opt.trendIcon}
                  width={20}
                  height={20}
                  alt="trend-icon"
                />
              </div>
              <h1 className="text-xs text-delta">
                <span
                  className={`${
                    opt.trend === "up" ? "text-[#11b293]" : "text-[#f63b6c]"
                  }`}
                >
                  {opt.percentage}
                </span>{" "}
                {opt.trendInfo}
              </h1>
            </div>
          </div>
        ))}
      </div>
      <div className="absolute top-[50px] left-[5px] grid grid-cols-4 grid-flow-row gap-8 w-full font-montserrat">
        {dashboardOpts.map((opt, index) => (
          <div key={index} className={`h-[130px] rounded-lg bg-basis`}></div>
        ))}
      </div>
    </div>
  );
};

export default HomeDashboard;
