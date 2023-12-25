import React from "react";
import { Route, Routes } from "react-router-dom";
import AdminDashboard from "./Dashboard/AdminDashboard";
import AdminSidebar from "./AdminSidebar";
import RestaurantDashboard from "./Dashboard/RestaurantDashboard";
import RestaurantsOrder from "./Orders/RestaurantsOrder";
import RestaurantsMenu from "./MenuItem/RestaurantsMenu";
import AddMenuForm from "./AddMenu/AddMenuForm";
import CreateRestaurantForm from "./AddRestaurants/CreateRestaurantForm";

const Admin = () => {
  return (
    <div className="lg:flex justify-between">
      <div className="">
       
        <AdminSidebar />
      </div>

      <div className="w-[80vw]">
        <Routes>
          <Route path="/" element={<RestaurantDashboard/>} />
          <Route path="/orders" element={<RestaurantsOrder/>} />
          <Route path="/menu" element={<RestaurantsMenu/>} />
          <Route path="/add-menu" element={<AddMenuForm/>} />
          <Route path="/add-restaurant" element={<CreateRestaurantForm/>} />
        </Routes>
      </div>
    </div>
  );
};

export default Admin;
