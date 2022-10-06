import React from "react";
import Dashboard from "./components/Dashboard";
import PullAShot from "./components/PullAShot";
import Coffees from "./components/Coffees";
import Equipment from "./components/Equipment";
import { Routes, Route } from "react-router-dom";
import { NavLink, Outlet } from "react-router-dom";
import espressoImg from "./img/icons8-portafilter-78.png";
import beansImg from "./img/icons8-coffee-bean-78.png";
import cupImg from "./img/icons8-cafe-100.png";
import equipmentImg from "./img/icons8-coffee-machine-78.png";
import "./App.css";

function App() {
  const initialInputsArray =
    JSON.parse(localStorage.getItem("inputsArray")) || [];
  const [inputsArray, setInputsArray] = React.useState(initialInputsArray);

  return (
    <div className="App">
      <h1>It's God Shot Time</h1>
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
      <Outlet />
      <nav>
        <NavLink
          className={({ isActive }) =>
            isActive ? "activeNavigation" : "navigation"
          }
          to="/Dashboard"
        >
          <img src={cupImg} alt="dashboard" />
          <p>Dashboard</p>
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            isActive ? "activeNavigation" : "navigation"
          }
          to="PullAShot"
        >
          <img src={espressoImg} alt="pull a shot" />
          <p>Pull A Shot</p>
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            isActive ? "activeNavigation" : "navigation"
          }
          to="Equipment"
        >
          <img src={equipmentImg} alt="equipment" />
          <p>Equipment</p>
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            isActive ? "activeNavigation" : "navigation"
          }
          to="Coffees"
        >
          <img src={beansImg} alt="Coffees" />
          <p>Coffees</p>
        </NavLink>
      </nav>
    </div>
  );
}

export default App;
