import React, { useContext } from "react";
// import {mycontect} from "../App"

import {mycontext} from "../App"
const Userdetails=()=>{
const data=useContext(mycontext);
    return(
        <div>MY NAME:{data.name}</div>
    );
}
export default Userdetails;