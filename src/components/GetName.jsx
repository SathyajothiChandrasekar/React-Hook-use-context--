import React from "react";
import { useContext } from "react";
import {appContext} from '../App'

export const GetName = () => {
  const {setName}=useContext(appContext)
  return (
    <>
      <h1 className="usecontext"><span>U</span>se <span>C</span>ontext-<span>H</span>ook</h1>
      <br></br>
      <h3>getName component</h3>
      <div className="getNameField">
      <label htmlFor="name" className="nameLabel">Enter Name :</label>
      <input type="text" placeholder="Enter Name...." className="name" onChange={(e)=>{setName(e.target.value)}}></input>
      </div>
    </>
  );
};
