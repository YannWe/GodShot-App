import React from "react";
import { Routes, Route } from "react-router-dom";
import { NavLink, Outlet } from "react-router-dom";
import "./App.css";

import Navigation from "./navigation"
import Dashboard from "./components/Dashboard";
import PullAShot from "./components/PullAShot";
import Coffees from "./components/Coffees";
import Equipment from "./components/Equipment";


function App() {
  const initialInputsArray =
    JSON.parse(localStorage.getItem("inputsArray")) || [];
  const [inputsArray, setInputsArray] = React.useState(initialInputsArray);

  return (
    <div className="App">
      <h1>Espresso Shot Archive</h1>
      <Routes>
        <Route path="/">
          <Route
            path="/Dashboard"
            element={<Dashboard inputsArray={inputsArray} />}
          />
          <Route
            path="/PullAShot"
            element={
              <PullAShot
                inputsArray={inputsArray}
                setInputsArray={setInputsArray}
              />
            }
          />
          <Route path="/Equipment" element={<Equipment />} />
          <Route path="/Coffees" element={<Coffees />} />
        </Route>
      </Routes>
      <Navigation />
      <Outlet />
    </div>
  );
}

export default App;
