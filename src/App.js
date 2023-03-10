import './App.css';
import { GetName } from './components/GetName';
import {UseName} from './components/UseName';
import { useState,createContext } from 'react';
export const appContext= createContext(null);


export const App= () => {
  const [name, setName] = useState(null)

  return (
 <div className='mainContainer'>
  <div className='contentContainer'>
 <appContext.Provider value={{name, setName}}>
 <GetName />
 <br></br>
 <UseName />
 </appContext.Provider>
 </div>
 </div>
 );
}


