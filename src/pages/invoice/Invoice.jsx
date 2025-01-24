import InvoiceBody from "../../components/InvoiceBody";
import Leftbar from "../../components/Leftbar";

const Invoice = () => {
  const baseLink = "/invoice";
  return (
    <div className="bg-basis max-w-screen-2xl h-screen mx-auto">
      <Leftbar baseLink={baseLink} />
      <div className="ml-[220px] py-6 pr-6">
        <InvoiceBody />
      </div>
    </div>
  );
};

export default Invoice;
