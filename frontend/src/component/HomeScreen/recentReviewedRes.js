import reviews from '../datafornow/reviews.json'
// import {Link} from "react-router-dom";
import ReviewElement from "./reviewElement";

const RecentReviewedRes = () => {

  return(
      <>
          <div className="mt-5 m-3 flex">
              <h1 className="text-white">You recent reviews</h1>
          </div>

          <div className="flex p-2">
              <ul className="list-group">
                  {reviews.map && reviews.map(review => {
                      return(<ReviewElement review={review}/>);
                  })}
              </ul>
          </div>
      </>
  )
}
export default RecentReviewedRes;