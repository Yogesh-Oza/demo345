import { api } from "../../../config/api";
import { createOrderFailure, createOrderRequest, createOrderSuccess, getUsersOrdersFailure, getUsersOrdersRequest, getUsersOrdersSuccess } from "./ActionCreators";


export const createOrder = (reqData) => {
  return async (dispatch) => {
    dispatch(createOrderRequest());
    try {
      const {data} = await api.post('/api/order', reqData.order,{
        headers: {
            Authorization: `Bearer ${reqData.token}`,
          },
      });
      if(data.payment_url){
        window.location.href=data.payment_url;
      }
      console.log("created order data",data)
      dispatch(createOrderSuccess(data));
    } catch (error) {
      console.log("error ",error)
      dispatch(createOrderFailure(error));
    }
  };
};


export const getUsersOrders = () => {
  return async (dispatch) => {
    dispatch(getUsersOrdersRequest());
    try {
      const {data} = await api.get(`/api/order/user`);
      console.log("users order ",data)
      dispatch(getUsersOrdersSuccess(data));
    } catch (error) {
      dispatch(getUsersOrdersFailure(error));
    }
  };
};

