import React from "react";
import ShoppingBagIcon from "@mui/icons-material/ShoppingBag";
import { Divider } from "@mui/material";
import { useNavigate } from "react-router-dom";
import LogoutIcon from '@mui/icons-material/Logout';
import FavoriteIcon from '@mui/icons-material/Favorite';
import HomeIcon from '@mui/icons-material/Home';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import { useDispatch } from "react-redux";
import { logout } from "../../../State/Authentication/Action";

const menu = [
  { title: "Orders", icon: <ShoppingBagIcon /> },
  { title: "Favorites", icon: <FavoriteIcon /> },
  { title: "Address", icon: <HomeIcon /> },
  { title: "Payments", icon: <AccountBalanceWalletIcon /> },
  {title:"Logout", icon: <LogoutIcon/> }
];

const ProfileNavigation = () => {

  const navigate=useNavigate();
  const dispatch=useDispatch();

  const handleLogout=()=>{
    dispatch(logout());
  }

  const handleNavigate=(item)=>{
    navigate(`/my-profile/${item.title.toLowerCase()}`)
    if( item.title === "Logout" ){
      handleLogout()
      navigate("/")
    }
  }

  return (
    <div className="group h-[90vh] flex flex-col justify-center text-xl space-y-8">
      <Divider verticle />
      {menu.map((item, i) => (
        <>
          <div onClick={()=>handleNavigate(item)} className="px-5 flex items-center space-x-5 cursor-pointer">
            {item.icon}
            <span>{item.title}</span>
          </div>
          <Divider />
        </>
      ))}
    </div>
  );
};

export default ProfileNavigation;
