import {Link} from "react-router-dom";

const ReviewElement = ({
    review = {
        "name": "La Royal",
        "rating": 4.5,
        // "address": "221 Concord Ave cambridge, MA 02138 Huron Village",
        // TODO: review 返回的response json里需要有餐厅的address,img,liked
        "img_url": "./img/top-liked-2.jpg",
        // "is_closed": false,
        "comment": "My family's favorite pizza spot. The ingredients are so fresh and the staff is always so wonderful."

    }
                       }) => {
    // console.log(review);

  return(
      <>
          <Link to="#">
              <li className="text-white justify-content-between align-items-center">
                  <div className="homepage-list-child row">
                      <div className="col-12 col-md-4">
                        <img src={review.img_url} alt="restaurant_img"/>
                      </div>
                      <div className="text p-2 col-md-8">
                          <h2>{review.name}</h2>
                          {/*<p><i className="fa-solid fa-star"/> {review.address}</p>*/}
                          <p className=" flex-column align-items-start "><i className="fa-solid fa-quote-left"/>
                              {review.comment}
                              <i className="fa-solid fa-quote-right"/>
                          </p>
                          <p><i className="fa-solid fa-star"/> {review.rating}</p>
                      </div>
                  </div>

              </li>
          </Link>
      </>
  )
}
export default ReviewElement;