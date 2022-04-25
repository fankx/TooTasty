
import "./restaurant.css"
import React, { useState, useEffect } from "react";
import RestaurantDetail from "../RestaurantDetail/restaurantDetail";
import NavSearchBar from "../NavSearchBar/navSearchBar";
import RestaurantReview from "../RestaurantReview/restaurantReview";
import reviewReducer from "../../reducers/reviewReducer";
import restaurantReducer from "../../reducers/restaurantReducer";
import {Provider} from "react-redux";
import {combineReducers, createStore} from "redux";


//
// const reducer = combineReducers({
//     reviews:reviewReducer,
//     restaurants:restaurantReducer,
//
// });
// const store = createStore(reducer);


const RestaurantScreen = () => {

    return (
        // <Provider store={store}>
        <>

            <RestaurantDetail />
            <RestaurantReview />
        </>
        // </Provider>
    );
 }
export default RestaurantScreen;
