import React from 'react'
import Rating from '@mui/material/Rating';


const RatingStar = ({value}) => {
    return (
        <div className="rating">

            <Rating name="read-only" value={value} readOnly />
            {/*<span>*/}
            {/*    <i*/}
            {/*       className={value >= 1*/}
            {/*           ? 'fa-solid fa-star'*/}
            {/*           : value >= 0.5*/}
            {/*               ? 'fa-regular fa-start-half-stroke'*/}
            {/*               : 'fa-regular fa-star'}></i>*/}
            {/*</span>*/}
            {/*<span>*/}
            {/*    <i*/}
            {/*       className={value >= 2*/}
            {/*           ? 'fa-solid fa-star'*/}
            {/*           : value >= 1.5*/}
            {/*               ? 'fa-regular fa-start-half-stroke'*/}
            {/*               : 'fa-regular fa-star'}></i>*/}
            {/*</span>*/}
            {/*<span>*/}
            {/*    <i*/}
            {/*       className={value >= 3*/}
            {/*           ? 'fa-solid fa-star'*/}
            {/*           : value >= 2.5*/}
            {/*               ? 'fa-regular fa-start-half-stroke'*/}
            {/*               : 'fa-regular fa-star'}></i>*/}
            {/*</span>*/}
            {/*<span>*/}
            {/*    <i*/}
            {/*       className={value >= 4*/}
            {/*           ? 'fa-solid fa-star'*/}
            {/*           : value >= 3.5*/}
            {/*               ? 'fa-regular fa-start-half-stroke'*/}
            {/*               : 'fa-regular fa-star'}></i>*/}
            {/*</span>*/}
            {/*<span>*/}
            {/*    <i*/}
            {/*       className={value >= 5*/}
            {/*           ? 'fa-solid fa-star'*/}
            {/*           : value >= 4.5*/}
            {/*               ? 'fa-regular fa-start-half-stroke'*/}
            {/*               : 'fa-regular fa-star'}></i>*/}
            {/*</span>*/}
        </div>
    )
}

// Rating.defaultProps = {
//     color: '#78c2ad'
// }

export default RatingStar;