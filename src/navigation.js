import React from "react";
import { useState } from "react";
import { Box, BottomNavigation, BottomNavigationAction } from "@mui/material"

// component import
import Dashboard from "./components/Dashboard";
import PullAShot from "./components/PullAShot";
import Coffees from "./components/Coffees";
import Equipment from "./components/Equipment";
import ShotOverview from "./components/ShotOverview";



function Navigation() {
  const [value, setValue] = useState(0);

  return (
    <Box sx={{ display: 'flex', gap: 2, flexDirection: 'column' }}>
      <BottomNavigation 
      showLabels
      value={value}
      onChange={(event, newValue) => {
        setValue(newValue);
      }}
    >
          <BottomNavigationAction label="Dashboard" />
          <BottomNavigationAction label="New Shot" />
          <BottomNavigationAction label="Coffees" />
          <BottomNavigationAction label="Equipment" />

      {/* <nav>
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
          </NavLink>}
        </nav> */}
        </ BottomNavigation>
    </Box>

  );
}

export default Navigation;


