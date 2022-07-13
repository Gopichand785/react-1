import React from "react";
import SamD from './SamD'
const SamC=(props)=>{
    return(
        
        <div>
            <h1>propdrill C</h1>
            <hr/>
            <SamD emp={props.emp}/>
        </div>
    )
}
export default SamC