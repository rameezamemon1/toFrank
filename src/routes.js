import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import UserManagement from "./pages/UserManagement/User";
import UserManagementDetail from "./pages/UserManagement/UserDetails";
import Sidebar from "./components/Sidebar/Sidebar";
import Box from "@mui/material/Box";

function Routs() {
  return (
    <Box sx={{ display: "flex" }}>
      <Router>
        <Sidebar />

        <Box
          component="main"
          sx={{ flexGrow: 1, p: 3 }}
        >
          <Routes>
            <Route path="/UserManagement" element={<UserManagement />} />
            <Route path="/UserDetail/:id" element={<UserManagementDetail />} />
          </Routes>
        </Box>
      </Router>
    </Box>
  );
}

export default Routs;
