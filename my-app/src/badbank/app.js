// import "./styles.css";
import Navbars from "./nav.js";
import Create from "./create.js";
import userContext from "./context.js";
import { HashRouter, Routes, Route } from "react-router-dom";
import Deposit from "./deposit.js";
import Withdraw from "./withdraw.js";
import Alldata from "./alldata.js";
import HomePage from "./home.js";

export default function App() {
  return (
    <>
      <HashRouter>
        <userContext.Provider
          value={{users:[{Name: "gowtham",Email: "gowtham@gmail.com",balance: 0}]}}
        >
          <Navbars />
          
          <Routes>

            <Route path="/" element={<HomePage />} />
            <Route path="/create" element={<Create />} />
            <Route path="/deposit" element={<Deposit />} />
            <Route path="/withdraw" element={<Withdraw />} />
            <Route path="/alldata" element={<Alldata />} />
          </Routes>
        </userContext.Provider>
      </HashRouter>
    </>
  );
}