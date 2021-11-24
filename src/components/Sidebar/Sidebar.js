import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import CssBaseline from "@mui/material/CssBaseline";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import Typography from "@mui/material/Typography";
import { withStyles } from "@mui/styles";
import { Link } from "react-router-dom";
import Divider from "@mui/material/Divider";
import MuiListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import "./sidebar.css";
const drawerWidth = 240;

export default function PermanentDrawerLeft() {
  const ListItem = withStyles({
    root: {
      "&$selected": {
        backgroundColor: "#00ACC1",
        color: "white",
        "& .MuiListItemIcon-root": {
          color: "white",
        },
      },
      "&$selected:hover": {
        backgroundColor: "#00ACC1",
        color: "white",
        "& .MuiListItemIcon-root": {
          color: "white",
        },
      },
      "&:hover": {
        backgroundColor: "#00ACC1",
        color: "white",
        "& .MuiListItemIcon-root": {
          color: "white",
        },
      },
    },
    selected: {},
  })(MuiListItem);
  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        style={{ backgroundColor: "white" }}
        sx={{ width: `calc(100% - ${drawerWidth}px)`, ml: `${drawerWidth}px` }}
      >
        <Toolbar>
          <Typography variant="h6" noWrap component="div" style={{color:'#2D2925'}}>
            Permanent drawer
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        className="sidebar"
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: drawerWidth,
            boxSizing: "border-box",
          },
        }}
        variant="permanent"
        anchor="left"
      >
        <Toolbar />
        <Divider />
        <List>
          <Link to="/" style={{ textDecoration: "none", color: "#363636" }}>
            <ListItem button>
              <ListItemIcon>
                <InboxIcon />
              </ListItemIcon>
              <ListItemText
                primary={"Dashboard"}
                style={{ fontWeight: "bold" }}
              />
            </ListItem>
          </Link>
        </List>
        <Divider />
        <List>
          {[
            "Test Managment",
            "User Managment",
            "Article Managment",
            "Marketing Managment",
          ].map((text, index) => (
            <Link
              to="/UserManagement"
              style={{ textDecoration: "none", color: "#363636" }}
            >
              <ListItem button key={text}>
                <ListItemIcon>
                  {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                </ListItemIcon>
                <ListItemText primary={text} />
              </ListItem>
            </Link>
          ))}
        </List>
      </Drawer>
    </Box>
  );
}
