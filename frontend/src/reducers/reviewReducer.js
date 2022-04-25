// import {
//     DELETE_REVIEW,
//     CREAT_REVIEW,
// }
//     from "../actions/reviewActions";
import reviews from "../data/review.json";

 const reviewReducer = (state = reviews, action) => {
    switch (action.type) {
        // case DELETE_REVIEW:
        //     return state.filter(
        //         review => review._id !== action.review._id);
        case 'create-review':
            const newReview={
                review: action.review,
                rating: action.rating,
                _id:(new Date()).getTime()+'',
                firstname: "Someone",
                lastname: "Else",
                time:"04/22/2022",
            }
            return [
                newReview,
                ...state,
            ];
        default:
            return state;
    }
}

export default reviewReducer;
