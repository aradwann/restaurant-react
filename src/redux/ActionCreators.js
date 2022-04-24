import * as ActionTypes from "./ActionTypes";

export const addComment = (dishId, rating, auhtor, comment) => ({
  type: ActionTypes.ADD_COMMENT,
  payload: {
    dishId: dishId,
    rating: rating,
    auhtor: auhtor,
    comment: comment,
  },
});
