import {
  Avatar,
  AvatarGroup,
  Backdrop,
  Box,
  Button,
  Card,
  CardHeader,
  Chip,
  CircularProgress,
  Menu,
  MenuItem,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";

import React, { useEffect, useState } from "react";

import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchRestaurantsOrder, updateOrderStatus } from "../../State/Admin/Order/restaurants.order.action";
// import {
//   confirmOrder,
//   deleteOrder,
//   deliveredOrder,
//   getOrders,
//   shipOrder,
// } from "../../state/Admin/Order/Action";


const orderStatus=[
  {status:"CONFIRMED"},
  {status:"PLACED"},
  {status:"DELIVERED"}
  
]

const OrdersTable = ({ isDashboard, name }) => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({ status: "", sort: "" });
  const dispatch = useDispatch();
  const jwt = localStorage.getItem("jwt");
  const { restaurantsOrder } = useSelector((store) => store);
  const [anchorElArray, setAnchorElArray] = useState([]);
  const {id}=useParams();

  useEffect(() => {
    dispatch(fetchRestaurantsOrder(id));
  }, [jwt]);

  

  const handleUpdateStatusMenuClick = (event, index) => {
    const newAnchorElArray = [...anchorElArray];
    newAnchorElArray[index] = event.currentTarget;
    setAnchorElArray(newAnchorElArray);
  };

  const handleUpdateStatusMenuClose = (index) => {
    const newAnchorElArray = [...anchorElArray];
    newAnchorElArray[index] = null;
    setAnchorElArray(newAnchorElArray);
  };

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;

    setFormData({ ...formData, [name]: value });
  };

  
  const handleUpdateOrder = (orderId,orderStatus, index) => {
    handleUpdateStatusMenuClose(index);
    dispatch(updateOrderStatus({orderId,orderStatus}))
    
  };
  const handleConfirmedOrder = (orderId, index) => {
    handleUpdateStatusMenuClose(index);
    // dispatch(confirmOrder(orderId));
  };

  const handleShippedOrder = (orderId, index) => {
    handleUpdateStatusMenuClose(index);
    // dispatch(shipOrder(orderId));
  };

  const handleDeliveredOrder = (orderId, index) => {
    handleUpdateStatusMenuClose(index);
    // dispatch(deliveredOrder(orderId));
  };

  const handleDeleteOrder = (orderId) => {
    handleUpdateStatusMenuClose();
    // dispatch(deleteOrder(orderId));
  };

  // console.log("restaurants orders store ", restaurantsOrder)

  return (
    <Box>
      <Card className="mt-1">
        <CardHeader
          title={name}
          sx={{
            pt: 2,
            alignItems: "center",
            "& .MuiCardHeader-action": { mt: 0.6 },
          }}
        />
        <TableContainer>
          <Table sx={{  }} aria-label="table in dashboard">
            <TableHead>
              <TableRow>
                <TableCell>Image</TableCell>
                {/* {!isDashboard && <TableCell>Title</TableCell>} */}

                <TableCell>Price</TableCell>
                <TableCell>Id</TableCell>
                <TableCell>Status</TableCell>
                {!isDashboard && (
                  <TableCell sx={{ textAlign: "center" }}>Update</TableCell>
                )}
                {/* {!isDashboard && (
                  <TableCell sx={{ textAlign: "center" }}>Delete</TableCell>
                )} */}
              </TableRow>
            </TableHead>
            <TableBody>
              {restaurantsOrder.orders?.slice(0,isDashboard?7:restaurantsOrder.orders.length).map((item, index) => (
                <TableRow
                  className="cursor-pointer"
                  hover
                  key={item.name}
                  sx={{ "&:last-of-type td, &:last-of-type th": { border: 0 } }}
                >
                  <TableCell sx={{}}>
                    <AvatarGroup max={4} sx={{ justifyContent: "start" }}>
                      {item.items.map((orderItem) => (
                        <Avatar
                          alt={item.title}
                          src={orderItem.menuItem?.imageUrl}
                        />
                      ))}
                    </AvatarGroup>{" "}
                  </TableCell>

                 

                  <TableCell>₹{item?.totalAmount}</TableCell>
                  <TableCell
                    // onClick={() => navigate(`/admin/orders/${item.id}`)}
                  >
                    {item?.id}
                  </TableCell>
                  <TableCell className="text-white">
                    <Chip
                      sx={{
                        color: "white !important",
                        fontWeight: "bold",
                        textAlign: "center",
                      }}
                      label={item?.orderStatus}
                      size="small"
                      color={
                        item.orderStatus === "PENDING"
                          ? "info"
                          : item?.orderStatus === "DELIVERED"
                          ? "success"
                          : "secondary"
                      }
                      className="text-white"
                    />
                  </TableCell>
                  {!isDashboard && (
                    <TableCell
                      sx={{ textAlign: "center" }}
                      className="text-white"
                    >
                      <div>
                        <Button
                          id={`basic-button-${item?._id}`}
                          aria-controls={`basic-menu-${item._id}`}
                          aria-haspopup="true"
                          aria-expanded={Boolean(anchorElArray[index])}
                          onClick={(event) =>
                            handleUpdateStatusMenuClick(event, index)
                          }
                        >
                          Status
                        </Button>
                        <Menu
                          id={`basic-menu-${item?._id}`}
                          anchorEl={anchorElArray[index]}
                          open={Boolean(anchorElArray[index])}
                          onClose={() => handleUpdateStatusMenuClose(index)}
                          MenuListProps={{
                            "aria-labelledby": `basic-button-${item._id}`,
                          }}
                        >
                          {orderStatus.map((s)=> <MenuItem
                            onClick={() => handleUpdateOrder(item.id,s.status,index)}
                          >
                            {s.status}
                          </MenuItem>)}
                         
                         
                        </Menu>
                      </div>
                    </TableCell>
                  )}
                  {/* {!isDashboard && (
                    <TableCell
                      sx={{ textAlign: "center" }}
                      className="text-white"
                    >
                      <Button
                        onClick={() => handleDeleteOrder(item._id)}
                        variant="text"
                      >
                        delete
                      </Button>
                    </TableCell>
                  )} */}
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Card>
      {/* <Card className="mt-2 felx justify-center items-center">
        <Pagination
          className="py-5 w-auto"
          size="large"
          count={10}
          onChange={handlePaginationChange}
        />
      </Card> */}

      <Backdrop
        sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={restaurantsOrder.loading}
      >
        <CircularProgress color="inherit" />
      </Backdrop>
    </Box>
  );
};

export default OrdersTable;
