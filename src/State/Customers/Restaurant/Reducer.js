// Reducers.js
import * as actionTypes from './ActionTypes';

const initialState = {
  restaurants: [],
  usersRestaurant:[],
  restaurant: null,
  loading: false,
  error: null,
};

const restaurantReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.CREATE_RESTAURANT_REQUEST:
    case actionTypes.GET_ALL_RESTAURANTS_REQUEST:
    case actionTypes.DELETE_RESTAURANT_REQUEST:
    case actionTypes.UPDATE_RESTAURANT_REQUEST:
    case actionTypes.GET_RESTAURANT_BY_ID_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case actionTypes.CREATE_RESTAURANT_SUCCESS:
      return {
        ...state,
        loading: false,
        restaurants: [...state.restaurants, action.payload],
      };
    case actionTypes.GET_ALL_RESTAURANTS_SUCCESS:
      return {
        ...state,
        loading: false,
        restaurants: action.payload,
      };
      case actionTypes.GET_RESTAURANT_BY_ID_SUCCESS:
      return {
        ...state,
        loading: false,
        restaurant: action.payload,
      };
      case actionTypes.GET_RESTAURANT_BY_USER_ID_SUCCESS:
        return{
          ...state,
          loading: false,
          usersRestaurant: action.payload,
        };

    case actionTypes.DELETE_RESTAURANT_SUCCESS:
        return{...state,
            error:null,
            loading:false,
            restaurants:state.restaurants.filter((item)=>item.id!==action.payload),
            usersRestaurant:state.usersRestaurant.filter((item)=>item.id!==action.payload)
          }
      // Implement similar logic for DELETE and UPDATE as needed
    case actionTypes.UPDATE_RESTAURANT_SUCCESS:
      return {
        ...state,
        loading: false,
        restaurants: state.restaurants.map((restaurant) =>
          restaurant.id === action.payload.id ? action.payload : restaurant
        ),
      };
    case actionTypes.CREATE_RESTAURANT_FAILURE:
    case actionTypes.GET_ALL_RESTAURANTS_FAILURE:
    case actionTypes.DELETE_RESTAURANT_FAILURE:
    case actionTypes.UPDATE_RESTAURANT_FAILURE:
    case actionTypes.GET_RESTAURANT_BY_ID_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default restaurantReducer;
