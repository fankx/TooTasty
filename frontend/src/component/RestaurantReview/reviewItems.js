import LetterAvatars from "../Avatar/letterAvatars";
import RatingStar  from "../Rating/ratingStar";
import {useDispatch} from "react-redux";


// import {deleteReview} from "../../actions/ReviewActions";

const ReviewItems = ({review}) =>{
    const dispatch = useDispatch();


    return(
        <>
            <div className="review-item clearfix">
                <div className="grid-image-left">
                    <LetterAvatars name={review.firstname+' '+review.lastname}/>
                </div>

                <div className="name-heading">
                    <strong>{review.firstname+' '+review.lastname}</strong>
                    <br/>
                    <em>{review.time}</em>
                    <i
                        // onClick={() =>
                        // deleteReview(dispatch, review)}
                        className="fas fa-remove fa-pull-right"></i>
                </div>
            </div>
            <div className="review-item-content">
                <RatingStar  value={review.rating} />
                <p>{review.review}</p>
            </div>
        </>
    );
}

export default ReviewItems;