import React from "react";
import "./Restaurant.css";
import { useNavigate } from "react-router-dom";
import { Card, IconButton } from "@mui/material";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import { useDispatch, useSelector } from "react-redux";
import { addToFavorites } from "../../../State/Authentication/Action";
import FavoriteIcon from '@mui/icons-material/Favorite';
import { isPresentInFavorites } from "../../../config/logic";

const RestaurantCard = ({ data, index }) => {
  const navigate = useNavigate();
  const {auth}=useSelector(store=>store);

  const dispatch = useDispatch();

  const handleAddToFavorites = () => {
    dispatch(addToFavorites(data.id));
  };

  const navigateToRestaurant = () => {
    navigate(`/restaurant/${data.address.city}/${data.name}/${data.id}`);
  };

  


  return (
    <Card
      
      className="m-5 w-[18rem] productCard "
    >
      <div onClick={navigateToRestaurant} className="cursor-pointer">
        <img
          className="w-full h-[10rem] rounded-t-md object-cover "
          src={data.imageUrl}
          alt=""
        />
      </div>
      <div className="p-4 textPart lg:flex w-full justify-between">
        <div className="space-y-1">
          <p className="font-semibold text-lg">{data.name}</p>
          {/* <div>
          <span>{data.rating}</span>
        </div> */}
          <p className="text-gray-500 text-sm">
            {data.description.length > 40
              ? data.description.substring(0,40)+"..."
              : data.description}
          </p>
        </div>

        <div>
          <IconButton onClick={handleAddToFavorites}>
           {isPresentInFavorites(auth.favorites,data)?<FavoriteIcon color="primary"/>: <FavoriteBorderIcon />}
            
          </IconButton>
        </div>
      </div>
    </Card>
  );
};

export default RestaurantCard;
