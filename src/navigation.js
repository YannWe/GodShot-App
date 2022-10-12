import React from "react";
import { useState } from "react";
import { Box, Sheet, Tabs, TabList, Tab, ListItemDecorator } from "@mui/joy";
import SvgIcon from '@mui/material/SvgIcon';


// component import
import Dashboard from "./components/Dashboard";
import PullAShot from "./components/PullAShot";
import Coffees from "./components/Coffees";
import Equipment from "./components/Equipment";
import ShotOverview from "./components/ShotOverview";
// design imports
import espressoImg from "./img/icons8-portafilter-78.png";
import beansImg from "./img/icons8-coffee-bean-78.png";
import {ReactComponent as cupImg} from "./img/icons8-cafe-100.svg";
import equipmentImg from "./img/icons8-coffee-machine-78.png";


function Navigation() {
    const [index, setIndex] = useState(1);
    return (
        <Box sx={{ display: 'flex', gap: 2, flexDirection: 'column' }}>
            <Tabs  defaultValue={0} aria-label="Navigation tabs" value={index}
                onChange={(event, value) => setIndex(value)}>
                <TabList variant="plain">
                    <Tab orientation="vertical" variant={index === 0 ? 'solid' : 'plain'}>
                        <ListItemDecorator>
                        </ListItemDecorator>{ }
                        Dashboard</Tab>
                    <Tab orientation="vertical" variant={index === 1 ? 'solid' : 'plain'}
                    >
                        <img src={espressoImg} alt="pull a shot" />
                        New Shot</Tab>
                    <Tab orientation="vertical" variant={index === 2 ? 'solid' : 'plain'}>Shot Overview</Tab>
                    <Tab orientation="vertical" variant={index === 3 ? 'solid' : 'plain'}>Coffees</Tab>
                    <Tab orientation="vertical" variant={index === 4 ? 'solid' : 'plain'}>Equipment</Tab>
                </TabList>
            </Tabs>
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
        </Box>

    );
}

export default Navigation;


