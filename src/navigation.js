import React from "react";
import { Box, AppBar, Toolbar, Container, Button } from "@mui/material"
import CoffeeIcon from '@mui/icons-material/Coffee';
import { useNavigate } from "react-router-dom";

function Navigation() {
const navigate = useNavigate();


  return (
    <React.Fragment>
    <AppBar position="fixed" sx={{
      backgroundColor: '#4d2c03'
    }}>
      <Container>
        <Toolbar>
        <Box>
          <CoffeeIcon sx={{
            mr: 10,
          }} />
          </ Box>
          <Box sx={{ flexGrow: 1, }}>
            <Button
            onClick={() => navigate("/Dashboard")}
              sx={{ my: 2, color: 'white', display: 'block' }}
            >
              
              Dashboard
            </Button>
          </Box>
          <Box sx={{ flexGrow: 1, }}>
            <Button
              onClick={() => navigate("/PullAShot")}
              sx={{ my: 2, color: 'white', display: 'block' }}
            >
              New Shot
            </Button>
          </Box>
          <Box sx={{ flexGrow: 1 }}>
            <Button
              onClick={() => navigate("/Coffees")}
              sx={{ my: 2, color: 'white', display: 'block' }}
            >
              Coffees
            </Button>
          </Box>
          <Box sx={{ flexGrow: 1, }}>
            <Button
              onClick={() => navigate("/Equipment")}
              sx={{ my: 2, color: 'white', display: 'block' }}
            >
              Equipment
            </Button>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
    <Toolbar />
    </React.Fragment>
  );
};

export default Navigation;