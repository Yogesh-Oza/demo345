import { Button, Card, CardContent, CardHeader, IconButton } from "@mui/material";
import React from "react";
import StarIcon from "@mui/icons-material/Star";
import EastIcon from "@mui/icons-material/East";
import { useDispatch } from "react-redux";
import { addItemToCart } from "../../../State/Customers/Cart/cart.action";
import { useNavigate } from "react-router-dom";

const SearchDishCard = ({item}) => {
    const dispatch = useDispatch();
  const handleAddItemToCart = () => {
    const data = {
      token: localStorage.getItem("jwt"),
      cartItem: {
        menuItemId: item.id,
        quantity: 1,
      },
    };
    dispatch(addItemToCart(data));
  };
  const navigate=useNavigate()
  return (
    <Card className="w-[28rem] m-3">
      <CardHeader className="text-sm"
        action={
          <IconButton onClick={()=>navigate(`/restaurant/${item.restaurant.address.city}/${item.restaurant.name}/${item.restaurant.id}`)} aria-label="settings">
            <EastIcon />
          </IconButton>
        }
        title={<p className="text-base"> {item.restaurant.name}t </p>}
        subheader={
          <div className="flex space-x-2 text-sm items-center">
            <div className="flex items-center space-x-1">
              <StarIcon sx={{fontSize:"1.2rem"}} />
              <p>4.3</p>
            </div>
            <p>27MIN</p>
          </div>
        }
      />
      <CardContent>
        <div>
        <div className="flex justify-between">
          <div className="w-[70%]">
            <div>
              <p className="font-extralight text-sm"> Promoted Dish </p>
            </div>

            <p className="font-semibold">{item.name} </p>
            <p>₹{item.price}</p>
            <p className="text-gray-400 text-sm">
              {item.description}
            </p>
          </div>
          <div className="flex flex-col justify-center items-center">
            <img
              className="w-[5rem] h-[5rem]"
              src={item.imageUrl}
              alt=""
            />
            <Button onClick={handleAddItemToCart} size="small">Add</Button>
          </div>
        </div>
      </div>
      </CardContent>
      
    </Card>
  );
};

export default SearchDishCard;
