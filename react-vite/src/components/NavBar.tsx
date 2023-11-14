import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { NavLink } from "react-router-dom";

export default function NavBar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" color="transparent">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Crud Nestjs React
          </Typography>
          <NavLink className="px-2" to={"/"}>
            Home
          </NavLink>
          <NavLink className="px-2" to={"/applications"}>
            Applications
          </NavLink>
          <NavLink className="px-2" to={"/group"}>
            Group
          </NavLink>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
