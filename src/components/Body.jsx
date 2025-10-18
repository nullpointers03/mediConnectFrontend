
import Homepage from "./Homepage/homepage.jsx";

import { Outlet } from "react-router-dom";

const Body = ()=>{
    return(
      <div>
        <Homepage/>
        <Outlet/>
        
      </div>
    )
}
export default Body;