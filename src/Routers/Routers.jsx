import React from "react";
import { Route, Routes } from "react-router-dom";
import CustomerRoutes from "./CustomerRoutes";
import Admin from "../Admin/Admin";
import AdminDashboard from "../Admin/Dashboard/AdminDashboard";
import SuperAdmin from "../SuperAdmin/SuperAdmin";
import { useSelector } from "react-redux";
import NotFound from "../customers/pages/NotFound/NotFound";

const Routers = () => {
  const {auth}=useSelector(store=>store)
  return (
    <Routes>
      <Route path="/*" element={<CustomerRoutes />} />
      <Route exact path="/admin" element={auth.user?.role==="ROLE_ADMIN"?<AdminDashboard />:<NotFound/>} />
      <Route exact path="/admin/restaurants/:id/*" element={<Admin />} />
      <Route exact path="/super-admin/*" element={auth.user?.role==="SUPER_ADMIN"?<SuperAdmin />:<NotFound/>} />
    </Routes>
  );
};

export default Routers;
