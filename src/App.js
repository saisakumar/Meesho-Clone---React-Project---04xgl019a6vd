import React, { useState } from "react";
import './App.css';
import Allroutes from './Camponent/Allroute';
import Profile from "./Camponent/Profile";
import { Register } from "./Camponent/Regester";

function App() {
  const [currentForm, setCurrentForm] = useState('login');

  const toggleForm = (formName) => {
    setCurrentForm(formName);
  }

  return (
    <div>
      <div className="App">
      <Allroutes />
        {
          currentForm === "login" ? <Profile onFormSwitch={() => toggleForm('register')} /> : <Register onFormSwitch={() => toggleForm('login')} />
        }
      </div>
      
    </div>
  );
}

export default App;
 
