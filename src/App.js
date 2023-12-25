import { CssBaseline, ThemeProvider } from "@mui/material";
import "./App.css";
import HomePage from "./customers/pages/Home/HomePage";
import darkTheme from "./theme/DarkTheme";
import Routers from "./Routers/Routers";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getUser } from "./State/Authentication/Action";
import { findCart } from "./State/Customers/Cart/cart.action";
import { getAllRestaurantsAction } from "./State/Customers/Restaurant/restaurant.action";

function App() {
  const dispatch=useDispatch()
  const {auth}=useSelector(store=>store)
  console.log("auth ",auth)

  useEffect(()=>{
    const jwt=localStorage.getItem("jwt");
    if(jwt){
      dispatch(getUser(jwt))
      dispatch(findCart(jwt))
      dispatch(getAllRestaurantsAction(jwt))
    }
  },[auth.jwt])
  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <Routers/>
    </ThemeProvider>
  );
}

export default App;
