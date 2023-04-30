import React from "react";
import  PERSONAL from "./section/personal";
import Repositories from "./section/project";
import CALL from "./section/call";

function BODY(){
    return(
        <main>
            <PERSONAL />
            <Repositories />
            <CALL />
        </main>
    );
}
export default BODY;