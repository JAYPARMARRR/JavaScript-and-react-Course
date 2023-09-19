import TernaryO from "../Components/TernaryO";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const Dashboard = () => {

 const isLoggedIn = true


  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<TernaryO isLoggedIn={isLoggedIn}/>} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default Dashboard;
