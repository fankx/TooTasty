import React from "react";
import RatingStar from "../Rating/ratingStar";
import {useDispatch} from "react-redux";

const RestaurantInfo = ({restaurant}) =>{
    const dispatch = useDispatch();
    const likeRestaurant = () =>{
        dispatch({type:'like-restaurant', restaurant});
    };

    return(
        <>
            <div className="position-relative">
                <img src={restaurant.image} className="card-img-top banner-height" alt=""/>
            </div>
            <div className="position-absolute img-title-pos">
                <h1 className="restaurant-title ">{restaurant.name}</h1>
                <ul className="list-inline font-orange-bolder">
                    <li className="list-inline-item">
                        <RatingStar value={restaurant.rating}/>
                    </li>
                    <li className="list-inline-item position-up"> <i className="fa fa-user-o"></i>{restaurant.stats.numReviews} Reviews</li>
                </ul>

                <ul className="list-inline font-orange-bolder">
                    <li className="list-inline-item"><i className="fa-solid fa-calendar-days"></i> {restaurant.is_closed?'Closed':'Open'} </li>
                    {/*<li className="list-inline-item ps-2"><i className="fa-solid fa-utensils"></i> Asian Chinese </li>*/}
                    {/*<li className="list-inline-item ps-2"> price $$</li>*/}
                </ul>
                <ul className="list-inline font-orange-bolder">
                    <li className="list-inline-item"><i className="fa-solid fa-location-arrow"></i> {restaurant.address}
                    </li>
                </ul>
                <div>
                    <a href="#writeReview"><button type="button" className="btn btn-primary">Write Review</button></a>

                    <button type="button" className="btn btn-primary ms-4" onClick={likeRestaurant}>
                        {
                            !restaurant.liked &&
                            <span>Like</span>
                        }
                        {
                            restaurant.liked &&
                            <span>Liked</span>
                        }
                        <span>({restaurant.stats&&restaurant.stats.numLikes})</span></button>
                </div>

            </div>
        </>
    )
}
export default RestaurantInfo;