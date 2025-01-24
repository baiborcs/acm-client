import { Navigate, Route, Routes } from "react-router-dom";
import Home from "./pages/home/Home";
import Reservation from "./pages/reservation/Reservation";
import Invoice from "./pages/invoice/Invoice";
import Setting from "./pages/setting/Setting";
import Report from "./pages/report/Report";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Navigate to="/home" replace />} />
        <Route path="/home" element={<Home />} />
        <Route path="/reservation" element={<Reservation />} />
        <Route path="/invoice" element={<Invoice />} />
        <Route path="/report" element={<Report />} />
        <Route path="/setting" element={<Setting />} />
      </Routes>
    </>
  );
}

export default App;
