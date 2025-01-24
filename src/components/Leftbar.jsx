import { useNavigate } from "react-router-dom";
import acmLogo from "../assets/acmLogo.svg";
import { pages } from "../constant/general";

const Leftbar = ({ baseLink }) => {
  const navigate = useNavigate();

  return (
    <div className="fixed top-0 left-0 w-[220px] h-screen font-montserrat">
      <div className="flex items-center justify-center py-6">
        <button>
          <img src={acmLogo} width={75} height={75} alt="acm-logo" />
        </button>
      </div>

      <div className="flex-col w-full">
        {pages.map((page, index) => (
          <button
            key={index}
            onClick={() => navigate(page.link)}
            className={`${
              baseLink === page.link
                ? "text-white text-base font-semibold"
                : "text-beta"
            } w-full py-2.5 px-6 text-sm hover:text-white`}
          >
            <h1 className="text-start">{page.name}</h1>
          </button>
        ))}
      </div>
    </div>
  );
};

export default Leftbar;
