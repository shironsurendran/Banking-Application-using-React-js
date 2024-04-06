import Navigation from "./navbar"
import Create from "./create"
import Depo from "./deposit"
import Withdaraw from "./withdraw"
import Alldata from "./alldata"
import { HashRouter,Routes,Route } from "react-router-dom"
export default function App(){

  return(
    <>
    
    <HashRouter>
    <Navigation/>
    {/* <Create/> */}
    <Routes>
      <Route path="/create" element={<Create/>}></Route>
      <Route path="/deposit" element={<Depo/>}></Route>
      <Route path="/withdraw" element={<Withdaraw/>}></Route>
      <Route path="/alldata" element={<Alldata/>}></Route>
    </Routes>
    </HashRouter>
    </>
  )
}