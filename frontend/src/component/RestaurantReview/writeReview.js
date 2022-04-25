// import ReviewRating from "./reviewRating";
import React, {useState} from "react";
import {useDispatch} from "react-redux";
import Rating from '@mui/material/Rating';
import Typography from '@mui/material/Typography';

const WriteReview = () =>{

    let[reviewItem, setReviewItem] = useState('');
    let[ratingValue, setValue] = useState(2);

    const dispatch = useDispatch();
    const reviewHandler = () =>{
        dispatch({
            type:'create-review',
            review:reviewItem,
            rating:ratingValue,
        });
    }


    return(
        <>
            <form action="#" className="reviews-form" role="form">
                <h2 id="writeReview" name="writeReview">Write a review</h2>
                <div className="form-group">
                    <label htmlFor="review">Review <span className="require"></span></label>
                    <textarea className="form-control"
                              rows="8"
                              id="review"
                              value={reviewItem}
                              placeholder="Write your review"
                              onChange={(event)=>
                                  setReviewItem(event.target.value)}>
                                </textarea>
                </div>
                <Typography component="legend">Rating</Typography>
                <Rating
                    name="simple-controlled"
                    value={ratingValue}
                    onChange={(event, newValue) => {
                        setValue(newValue);
                    }}
                />

                <div className="padding-top-20">
                    <button type="submit" className="btn btn-primary"
                            onClick={reviewHandler}>
                        Send
                    </button>
                </div>
            </form>
        </>
    )
}

export default WriteReview;