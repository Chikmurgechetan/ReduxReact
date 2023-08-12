import React from "react";

const togglethem = () => {
    alert("Add Somthing")
}

const Darkmode = () =>{
    return(
        <>
        <button style={{color:"wheat"}} onClick={()=>togglethem()}>DarkMode</button>
        </>
    )
};
export default Darkmode;