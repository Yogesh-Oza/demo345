// Actions.js

import { api } from "../../../config/api";

import {
  createRestaurantFailure,
  createRestaurantRequest,
  createRestaurantSuccess,
  deleteRestaurantFailure,
  deleteRestaurantRequest,
  deleteRestaurantSuccess,
  getAllRestaurantsFailure,
  getAllRestaurantsRequest,
  getAllRestaurantsSuccess,
  getRestaurantByIdFailure,
  getRestaurantByIdRequest,
  getRestaurantByIdSuccess,
  updateRestaurantFailure,
  updateRestaurantRequest,
  updateRestaurantSuccess,
} from "./ActionCreateros";

import {
  
  GET_RESTAURANT_BY_USER_ID_FAILURE,
  GET_RESTAURANT_BY_USER_ID_REQUEST,
  GET_RESTAURANT_BY_USER_ID_SUCCESS,
} from "./ActionTypes";

export const getAllRestaurantsAction = (token) => {
  return async (dispatch) => {
    dispatch(getAllRestaurantsRequest());
    try {
      const { data } = await api.get("/api/restaurants", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      dispatch(getAllRestaurantsSuccess(data));
      console.log("all restaurant ", data);
    } catch (error) {
      dispatch(getAllRestaurantsFailure(error));
    }
  };
};


export const getRestaurantById = (reqData) => {
  return async (dispatch) => {
    dispatch(getRestaurantByIdRequest());
    try {
      const response = await api.get(`api/restaurant/${reqData.restaurantId}`, {
        headers: {
          Authorization: `Bearer ${reqData.token}`,
        },
      });
      dispatch(getRestaurantByIdSuccess(response.data));
    } catch (error) {
      dispatch(getRestaurantByIdFailure(error));
    }
  };
};

export const getRestaurantByUserId = (reqData) => {
  console.log("get restaurants by id")
  return async (dispatch) => {
    dispatch({ type: GET_RESTAURANT_BY_USER_ID_REQUEST });
    try {
      const { data } = await api.get(`/api/admin/restaurants/user`);
      console.log("data ",data)
      dispatch({ type: GET_RESTAURANT_BY_USER_ID_SUCCESS, payload: data });
    } catch (error) {
      console.log("catch error ",error)
      dispatch({
        type: GET_RESTAURANT_BY_USER_ID_FAILURE,
        payload: error.message,
      });
    }
  };
};

export const createRestaurant = (restaurantData) => {
  return async (dispatch) => {
    dispatch(createRestaurantRequest());

    try {
      const { data } = await api.post("/api/admin/restaurant", restaurantData);
      dispatch(createRestaurantSuccess(data));
      console.log("created restaurant ", data);
    } catch (error) {
      dispatch(createRestaurantFailure(error));
    }
  };
};

export const updateRestaurant = (restaurantId, restaurantData) => {
  return async (dispatch) => {
    dispatch(updateRestaurantRequest());

    try {
      const res = await api.put(
        `api/admin/restaurant/${restaurantId}`,
        restaurantData
      );
      dispatch(updateRestaurantSuccess(res.data));
    } catch (error) {
      dispatch(updateRestaurantFailure(error));
    }
  };
};
export const deleteRestaurant = (restaurantId) => {
  return async (dispatch) => {
    dispatch(deleteRestaurantRequest());

    try {
      const res = await api.delete(`/api/admin/restaurant/${restaurantId}`);
      console.log("delete restaurant ", res.data);
      dispatch(deleteRestaurantSuccess(restaurantId));
    } catch (error) {
      console.log("catch error ",error)
      dispatch(deleteRestaurantFailure(error));
    }
  };
};