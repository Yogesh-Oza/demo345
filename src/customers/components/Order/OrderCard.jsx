import { Button, Card } from "@mui/material";
import React from "react";

const OrderCard = ({order}) => {
  return (
    <Card className="flex justify-between items-center p-5 ">
      <div className="flex items-center space-x-5">
        <img
          className="h-16 w-16"
          src={order.menuItem.imageUrl}
          alt=""
        />
        <div>
          <p>{order.menuItem.name}</p>
          <p className="text-gray-400">₹{order.menuItem.price}</p>
        </div>
      </div>
      <div>
        <Button variant="contained">Track</Button>
      </div>
    </Card>
  );
};

export default OrderCard;
