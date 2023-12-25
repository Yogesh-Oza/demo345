import { Button, Divider, IconButton } from "@mui/material";
import React from "react";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import RemoveCircleOutlineIcon from "@mui/icons-material/RemoveCircleOutline";
import { useDispatch } from "react-redux";
import {
  addItemToCart,
  removeCartItem,
  updateCartItem,
} from "../../../State/Customers/Cart/cart.action";

const CartItemCard = ({ item }) => {
  const dispatch = useDispatch();
  const handleUpdateCartItem = (value) => {
    if(value===-1 && item.quantity==1){
      handleRemoveCartItem()
    }
    dispatch(
      updateCartItem({ cartItemId: item.id, quantity: item.quantity + value })
    );
  };
  const handleRemoveCartItem=()=>{
    dispatch(removeCartItem(item.id))
    
  }
  return (
    <div className="px-5">
      <div className="lg:flex items-center lg:space-x-5">
        <div>
          <img
            className="w-[5rem] h-[5rem] object-cover"
            src={item.menuItem.imageUrl}
            alt=""
          />
        </div>

        <div className="flex items-center justify-between lg:w-[70%]">
          <div className="space-y-1 lg:space-y-3 w-full ">
            <p className="">{item.menuItem.name}</p>
            {
              <div className="flex justify-between items-center">
                <div className="flex items-center space-x-1">
                  <IconButton
                    onClick={() => handleUpdateCartItem(-1)}
                    color="primary"
                  >
                    <RemoveCircleOutlineIcon />
                  </IconButton>
                  <div className="w-5 h-5 text-xs flex items-center justify-center ">
                    {item.quantity}
                  </div>

                  <IconButton
                    onClick={() => handleUpdateCartItem(1)}
                    color="primary"
                  >
                    <AddCircleOutlineIcon />
                  </IconButton>
                </div>
              </div>
            }
          </div>

          <p>₹{item.menuItem.price}</p>
        </div>
      </div>
    </div>
  );
};

export default CartItemCard;
