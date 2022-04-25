
import ReviewItems from "./reviewItems";
import WriteReview from "./writeReview";
import React from "react";
import {useSelector} from "react-redux";

const RestaurantReview = () => {
    const reviews = useSelector(
        state => state.reviews);

    return(

             <div className="container">
                <div className="row">
                    <div className="product-page-content">
                        <ul className="nav nav-tabs">
                            <li className="nav-item active">
                                <a className="nav-link active" data-bs-toggle="tab" href="#Reviews" >Reviews (123)</a>
                            </li>
                        </ul>
                            <div id="myTabContent" className="tab-content">
                                <div className="tab-pane fade active show" id="Reviews">
                                    {
                                        reviews.map && reviews.map(review =>
                                            <ReviewItems key={review._id}
                                                         review={review}/>)
                                    }
                                </div>
                            </div>
                            <WriteReview />
                    </div>
                </div>
             </div>

    );
}

export default RestaurantReview;