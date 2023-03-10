import React from "react";
import { useContext } from "react";
import {appContext} from '../App'

export const UseName = () => {
    const {name}=useContext(appContext)
  return <>
  <h3>useName component</h3> 
 <h4 className="nameText"><strong>Name:</strong></h4><h4 className="useNameField">{name}</h4>
  </>;
};
