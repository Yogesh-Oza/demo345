import { api } from "../../../config/api";
import {
  createMenuItemFailure,
  createMenuItemRequest,
  createMenuItemSuccess,
  deleteMenuItemFailure,
  deleteMenuItemRequest,
  deleteMenuItemSuccess,
  getMenuItemsByRestaurantIdFailure,
  getMenuItemsByRestaurantIdRequest,
  getMenuItemsByRestaurantIdSuccess,
} from "./ActionCreators";
import {
  SEARCH_MENU_ITEM_FAILURE,
  SEARCH_MENU_ITEM_REQUEST,
  SEARCH_MENU_ITEM_SUCCESS,
} from "./ActionType";

export const createMenuItem = (menuItemData) => {
  return async (dispatch) => {
    dispatch(createMenuItemRequest());
    try {
      const { data } = await api.post("api/admin/menu", menuItemData);
      console.log({ data });
      dispatch(createMenuItemSuccess(data));
    } catch (error) {
      dispatch(createMenuItemFailure(error));
    }
  };
};

export const getMenuItemsByRestaurantId = (reqData) => {
  return async (dispatch) => {
    dispatch(getMenuItemsByRestaurantIdRequest());
    try {
      const { data } = await api.get(
        `api/menu/restaurant/${reqData.restaurantId}`,
        {
          headers: {
            Authorization: `Bearer ${reqData.jwt}`,
          },
        }
      );
      console.log("menu item by restaurants ", data);
      dispatch(getMenuItemsByRestaurantIdSuccess(data));
    } catch (error) {
      dispatch(getMenuItemsByRestaurantIdFailure(error));
    }
  };
};

export const deleteMenuItem = (menuItemId) => {
  return async (dispatch) => {
    dispatch(deleteMenuItemRequest());
    try {
      await api.delete(`api/admin/menu/${menuItemId}`);
      dispatch(deleteMenuItemSuccess(menuItemId));
    } catch (error) {
      dispatch(deleteMenuItemFailure(error));
    }
  };
};

export const searchMenuItem = (keyword) => {
  return async (dispatch) => {
    dispatch({ type: SEARCH_MENU_ITEM_REQUEST });
    try {
      const { data } = await api.get(`api/menu/search?name=${keyword}`);
      console.log("data ----------- ",data)
      dispatch({ type: SEARCH_MENU_ITEM_SUCCESS, payload: data });
    } catch (error) {
      dispatch({ type: SEARCH_MENU_ITEM_FAILURE });
    }
  };
};
