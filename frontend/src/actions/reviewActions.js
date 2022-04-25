import {
  RESTAURANT_CREATE_REVIEW_REQUEST,
  RESTAURANT_CREATE_REVIEW_SUCCESS,
  RESTAURANT_CREATE_REVIEW_FAIL,
} from '../constants/restaurantConstants';

export const createRestaurantReview =
  (restaurantId, review) => async (dispatch, getState) => {
    try {
      dispatch({
        type: RESTAURANT_CREATE_REVIEW_REQUEST,
      });

      const {
        userLogin: { userInfo },
      } = getState();

      const config = {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${userInfo.token}`,
        },
      };

      await axios.post(
        `/api/restaurants/${restaurantId}/reviews`,
        review,
        config
      );

      dispatch({
        type: RESTAURANT_CREATE_REVIEW_SUCCESS,
      });
    } catch (error) {
      const message =
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message;
      if (message === 'Not authorized, token failed') {
        dispatch(logout());
      }
      dispatch({
        type: RESTAURANT_CREATE_REVIEW_FAIL,
        payload: message,
      });
    }
  };
