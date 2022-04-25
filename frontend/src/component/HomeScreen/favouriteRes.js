import {Link} from "react-router-dom";
import ReviewElement from "./reviewElement";
import FavouriteResElement from "./favouriteResElement";
import restaurants from "../datafornow/restaurants.json";
import TopLikedElement from "./topLikedElement";

const FavouriteRes = () => {
  return(
      <>
          <div className="mt-5 m-3 ">
              <h1 className="text-white">You Liked restaurant</h1>
          </div>

          <div className=" p-2">
              <ul className="list-group">
                  {restaurants.map && restaurants.map(restaurant => {
                      return(<FavouriteResElement restaurant={restaurant}/>)
                  })}
              </ul>
          </div>
      </>
  )
}
export default FavouriteRes;