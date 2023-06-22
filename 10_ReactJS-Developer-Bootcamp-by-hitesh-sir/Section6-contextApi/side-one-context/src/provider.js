import React, {useState} from "react";

import  PackageContext from "./context"


const Provider = props => {
    const [mission, setMission] = useState({
        mname : "Go to Russia",
        agent: 7,
        accept: "Not Accepted"
    })
    return(
        <PackageContext.Provider 
        value={{
            data: mission,
            isMissionAccepted: () => {
                setMission({...mission, accept: "ACCEPTED"})
            }
        }}
        >
            {props.children}
        </PackageContext.Provider>
    )
}

export default Provider;