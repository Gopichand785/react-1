import React from "react";
import SamC from './SamC'
const SamB=(props)=>{
    return(
        
        <div>
            <h1>propdrill B</h1>
            <hr/>
            <SamC emp={props.emp}/>
        </div>
    )
}
export default SamB