import {Provider} from "react-redux";
import {combineReducers, createStore} from "redux";
import {Outlet} from "react-router-dom";
import reviewReducer from "../reducers/reviewReducer";
import restaurantReducer from "../reducers/restaurantReducer";
import profileReducer from "../reducers/profileReducer";
import React from "react";

const reducer = combineReducers({
    reviews:reviewReducer,
    restaurants:restaurantReducer,
    profile: profileReducer,

});
const store = createStore(reducer);


const TooTasty = () => {

    return (
        <Provider store={store}>
            <Outlet />
        </Provider>
    );
}
export default TooTasty;