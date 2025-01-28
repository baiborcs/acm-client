import InvoiceBody from "../../components/InvoiceBody";
import Leftbar from "../../components/Leftbar";

const Invoice = () => {
  const baseLink = "/invoice";
  return (
    <div className="bg-basis max-w-screen-2xl mx-auto">
      <Leftbar baseLink={baseLink} />
      <div className="ml-[220px] bg-basis pr-5">
        <InvoiceBody />
        <div className="sticky bottom-0 w-full h-9 z-30 bg-basis">
          <div className="w-full bg-charlie h-4 rounded-b-3xl"></div>
        </div>
      </div>
    </div>
  );
};

// const Invoice = () => {
//   const baseLink = "/invoice";
//   return (
//     <div className="bg-basis max-w-screen-2xl h-screen mx-auto">
//       <Leftbar baseLink={baseLink} />
//       <div className="ml-[220px] py-6 pr-6">
//         <InvoiceBody />
//       </div>
//     </div>
//   );
// };

export default Invoice;
