import RatingStar from "../Rating/ratingStar";
import RestaurantReview from "../RestaurantReview/restaurantReview";
import React from "react";
import {useSelector} from "react-redux";
import RestaurantInfo from "./restaurantInfo";


const RestaurantDetail = () => {

    const restaurants = useSelector(
        state => state.restaurants);

    return(
        <>
            <section className="header height-auto">
                <div className="container ps-0 pe-0">
                    <div className="row">
                        {
                            restaurants.map && restaurants.map(restaurant =>
                            <RestaurantInfo restaurant={restaurant}/>)
                        }

                    </div>
                </div>
            </section>

        </>

    );
}

export default RestaurantDetail;

