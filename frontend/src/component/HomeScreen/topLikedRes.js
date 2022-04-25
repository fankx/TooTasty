import restaurants from '../datafornow/restaurants.json'
import TopLikedElement from "./topLikedElement";
// import {Link} from "react-router-dom";

const TopLikedRes = () => {
    return(
        <>
            <div className="mt-5 m-3 flex">
                <h1 className="text-white">This is TOP liked restaurant!</h1>
            </div>
            <div className=" p-2 row">
                {restaurants.map && restaurants.map(restaurant => {
                    return(<TopLikedElement restaurant={restaurant}/>)
                })}

            </div>
        </>
    )
}
export default TopLikedRes;