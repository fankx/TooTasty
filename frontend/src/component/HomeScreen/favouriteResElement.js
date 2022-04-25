import {Link} from "react-router-dom";

const FavouriteResElement = ({
    restaurant = {
        "name": "La Royal",
        "address": "221 Concord Ave cambridge, MA 02138 Huron Village",
        "image_url": "./img/top-liked-1.jpg",
        "rating": 5.0,
        "liked": 231
    }
                       }) => {
    // console.log(restaurant);

  return(
      <>
          <Link to="#">
              <li className="text-white d-flex justify-content-between align-items-center">
                  <div className="homepage-list-child row">
                      <div className="col-12 col-md-6 ">
                          <img src={restaurant.image_url} alt=""/>
                      </div>
                      <div className="col-12 col-md-6 ">
                          <h2>{restaurant.name}</h2>
                          <p>address: {restaurant.address}</p>
                      </div>
                  </div>
                  <span><p ><i className="fa-solid fa-heart"/> {restaurant.liked} likes</p></span>
              </li>
          </Link>
      </>
  )
}
export default FavouriteResElement;