import React from "react"
//import restaurants from '../datafornow/restaurants.json'
import ReviewElement from "./reviewElement"
import { Row, Col } from "react-bootstrap"

const RecentReviewedRes = (restaurants) => {
  return (
    <>
      <div className="mt-5 m-3 flex">
        <h1 className="text-white">Restaurants you recent reviewed</h1>
      </div>

      <Row className="justify-content-md-center">
        {restaurants &&
          restaurants.map((restaurant) => (
            <Col key={restaurant._id} sm={12} md={6} lg={4} xl={3}>
              <ReviewElement restaurant={restaurant} />
            </Col>
          ))}
      </Row>
    </>
  )
}
export default RecentReviewedRes
