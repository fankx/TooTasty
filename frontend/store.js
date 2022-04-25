import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import {
  restaurantListReducer,
  restaurantDetailsReducer,
  restaurantDeleteReducer,
  restaurantCreateReducer,
  restaurantUpdateReducer,
  restaurantReviewCreateReducer,
  restaurantTopRatedReducer,
} from './reducers/restaurantReducers';
import {
  userLoginReducer,
  userRegisterReducer,
  userDetailsReducer,
  userUpdateProfileReducer,
  userListReducer,
  userDeleteReducer,
  userUpdateReducer,
} from './reducers/userReducers';

const reducer = combineReducers({
  restaurantList: restaurantListReducer,
  restaurantDetails: restaurantDetailsReducer,
  restaurantDelete: restaurantDeleteReducer,
  restaurantCreate: restaurantCreateReducer,
  restaurantUpdate: restaurantUpdateReducer,
  restaurantReviewCreate: restaurantReviewCreateReducer,
  restaurantTopRated: restaurantTopRatedReducer,
  userLogin: userLoginReducer,
  userRegister: userRegisterReducer,
  userDetails: userDetailsReducer,
  userUpdateProfile: userUpdateProfileReducer,
  userList: userListReducer,
  userDelete: userDeleteReducer,
  userUpdate: userUpdateReducer,
});

// we get the carItems as a string from localStorage and parse it to an array
// and fill it to the cart.cartItems of the initialState
const cartItemsFromStorage = localStorage.getItem('cartItems')
  ? JSON.parse(localStorage.getItem('cartItems'))
  : [];

const shippingAddressFromStorage = localStorage.getItem('shippingAddress')
  ? JSON.parse(localStorage.getItem('shippingAddress'))
  : {};

const userInfoFromStorage = localStorage.getItem('userInfo')
  ? JSON.parse(localStorage.getItem('userInfo'))
  : null;

const initialState = {
  //   cart: {
  //     cartItems: cartItemsFromStorage,
  //     shippingAddress: shippingAddressFromStorage,
  //   },
  userLogin: {
    userInfo: userInfoFromStorage,
  },
};

const middleware = [thunk];

const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
