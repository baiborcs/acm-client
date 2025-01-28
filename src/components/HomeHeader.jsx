import magnifierOne from "../assets/magnifierOne.png";
import notif from "../assets/notif.svg";
import britishFlag from "../assets/britishFlag.svg";
import avatar from "../assets/avatar.png";
import arrowDown from "../assets/arrowDown.png";

const HomeHeader = () => {
  return (
    <div className="sticky top-0 w-full bg-charlie z-20">
      <div className="bg-basis py-3"></div>
      <div className="bg-basis">
        <div className="py-2.5 px-5 rounded-t-3xl bg-charlie">
          <div className="flex justify-between px-6 rounded-3xl bg-white">
            <div className="py-2.5">
              <div className="flex items-center w-[250px] py-1.5 px-4 rounded-full bg-charlie">
                <div className="w-[14px] h-[14px]">
                  <img src={magnifierOne} alt="magnifier-one" />
                </div>
                <input
                  type="text"
                  className="w-full pl-2 outline-none text-xs font-montserrat bg-transparent placeholder-gray-400"
                  placeholder="Search"
                  spellCheck="false"
                  autoComplete="off"
                />
              </div>
            </div>

            <div className="flex font-montserrat">
              <button className="px-3">
                <img src={notif} width={15} height={15} alt="notif" />
              </button>
              <button className="px-2 flex items-center gap-2">
                <img
                  src={britishFlag}
                  width={25}
                  height={15}
                  alt="british-flag"
                />
                <h1 className="text-[10px] text-delta font-medium">English</h1>
                <img src={arrowDown} width={10} height={10} alt="arrow-down" />
              </button>
              <button className="px-2 flex items-center gap-2">
                <img src={avatar} width={37} height={37} alt="avatar" />
                <div className="">
                  <h1 className="text-[10px] font-semibold text-echo">Teguh</h1>
                  <h1 className="text-[9px] text-delta">Admin</h1>
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// const HomeHeader = () => {
//   return (
//     <div className="py-2.5 px-5 rounded-t-3xl">
//       <div className="flex justify-between px-6 rounded-3xl bg-white">
//         <div className="py-2.5">
//           <div className="flex items-center w-[250px] py-1.5 px-4 rounded-full bg-charlie">
//             <div className="w-[14px] h-[14px]">
//               <img src={magnifierOne} alt="magnifier-one" />
//             </div>
//             <input
//               type="text"
//               className="w-full pl-2 outline-none text-xs font-montserrat bg-transparent placeholder-gray-400"
//               placeholder="Search"
//               spellCheck="false"
//               autoComplete="off"
//             />
//           </div>
//         </div>

//         <div className="flex font-montserrat">
//           <button className="px-3">
//             <img src={notif} width={15} height={15} alt="notif" />
//           </button>
//           <button className="px-2 flex items-center gap-2">
//             <img src={britishFlag} width={25} height={15} alt="british-flag" />
//             <h1 className="text-[10px] text-delta font-medium">English</h1>
//             <img src={arrowDown} width={10} height={10} alt="arrow-down" />
//           </button>
//           <button className="px-2 flex items-center gap-2">
//             <img src={avatar} width={37} height={37} alt="avatar" />
//             <div className="">
//               <h1 className="text-[10px] font-semibold text-echo">Teguh</h1>
//               <h1 className="text-[9px] text-delta">Admin</h1>
//             </div>
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

export default HomeHeader;
