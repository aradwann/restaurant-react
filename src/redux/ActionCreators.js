import * as ActionTypes from './ActionTypes'
import { baseUrl } from '../shared/baseUrl'

/// ///////////// Dishes /////////////////

export const fetchDishes = () => (dispatch) => {
  dispatch(dishesLoading(true))

  return fetch(baseUrl + 'dishes')
    .then(
      (response) => {
        if (response.ok) {
          return response
        } else {
          const err = new Error(
            'Error ' + response.status + ': ' + response.statusText
          )
          err.response = response
          throw err
        }
      },
      (err) => {
        const errMess = new Error(err.message)
        throw errMess
      }
    )
    .then((response) => response.json())
    .then((dishes) => dispatch(addDishes(dishes)))
    .catch((err) => {
      dispatch(dishesFailed(err.message))
    })
}

export const dishesLoading = () => ({
  type: ActionTypes.DISHES_LOADING
})

export const dishesFailed = (errMess) => ({
  type: ActionTypes.DISHES_FAILED,
  payload: errMess
})

export const addDishes = (dishes) => ({
  type: ActionTypes.ADD_DISHES,
  payload: dishes
})

/// ////////// comments /////////////////

export const addComment = (comment) => ({
  type: ActionTypes.ADD_COMMENT,
  payload: comment
})

export const postComment = (dishId, rating, author, comment) => (dispatch) => {
  const newComment = {
    dishId,
    rating,
    author,
    comment
  }
  newComment.date = new Date().toISOString()

  return fetch(baseUrl + 'comments', {
    method: 'POST',
    body: JSON.stringify(newComment),
    headers: {
      'Content-Type': 'application/json'
    },
    credentials: 'same-origin'
  })
    .then(
      (response) => {
        if (response.ok) {
          return response
        } else {
          const err = new Error(
            'Error ' + response.status + ': ' + response.statusText
          )
          err.response = response
          throw err
        }
      },
      (err) => {
        const errMess = new Error(err.message)
        throw errMess
      }
    )
    .then((response) => response.json())
    .then((comment) => dispatch(addComment(comment)))
    .catch((err) => {
      console.log('POST comments', err.message)
      alert('Your comment could not be posted \n Error: ' + err.message)
    })
}

export const fetchComments = () => (dispatch) => {
  return fetch(baseUrl + 'comments')
    .then(
      (response) => {
        if (response.ok) {
          return response
        } else {
          const err = new Error(
            'Error ' + response.status + ': ' + response.statusText
          )
          err.response = response
          throw err
        }
      },
      (err) => {
        const errMess = new Error(err.message)
        throw errMess
      }
    )
    .then((response) => response.json())
    .then((comments) => dispatch(addComments(comments)))
    .catch((err) => {
      dispatch(commentsFailed(err.message))
    })
}

export const commentsFailed = (errMess) => ({
  type: ActionTypes.COMMENTS_FAILED,
  payload: errMess
})

export const addComments = (comments) => ({
  type: ActionTypes.ADD_COMMENTS,
  payload: comments
})

/// //////// promos //////////////////

export const fetchPromos = () => (dispatch) => {
  dispatch(promosLoading(true))

  return fetch(baseUrl + 'promotions')
    .then(
      (response) => {
        if (response.ok) {
          return response
        } else {
          const err = new Error(
            'Error ' + response.status + ': ' + response.statusText
          )
          err.response = response
          throw err
        }
      },
      (err) => {
        const errMess = new Error(err.message)
        throw errMess
      }
    )
    .then((response) => response.json())
    .then((promos) => dispatch(addPromos(promos)))
    .catch((err) => {
      dispatch(promosFailed(err.message))
    })
}

export const promosLoading = () => ({
  type: ActionTypes.PROMOS_LOADING
})

export const promosFailed = (errMess) => ({
  type: ActionTypes.PROMOS_FAILED,
  payload: errMess
})

export const addPromos = (promos) => ({
  type: ActionTypes.ADD_PROMOS,
  payload: promos
})

/// ///// leaders ///////////////

export const fetchLeaders = () => (dispatch) => {
  dispatch(leadersLoading(true))

  return fetch(baseUrl + 'leaders')
    .then(
      (response) => {
        if (response.ok) {
          return response
        } else {
          const err = new Error(
            'Error ' + response.status + ': ' + response.statusText
          )
          err.response = response
          throw err
        }
      },
      (err) => {
        const errMess = new Error(err.message)
        throw errMess
      }
    )
    .then((response) => response.json())
    .then((leaders) => dispatch(addLeaders(leaders)))
    .catch((err) => {
      dispatch(leadersFailed(err.message))
    })
}

export const leadersLoading = () => ({
  type: ActionTypes.LEADERS_LOADING
})

export const leadersFailed = (errMess) => ({
  type: ActionTypes.LEADERS_FAILED,
  payload: errMess
})

export const addLeaders = (leaders) => ({
  type: ActionTypes.ADD_LEADERS,
  payload: leaders
})

/// //////////// feedback ///////////////////

export const addFeedback = (feedback) => ({
  type: ActionTypes.ADD_FEEDBACK,
  payload: feedback
})

export const postFeedback =
  (firstname, lastname, email, telnum, agree, contactType, feedback) =>
    (dispatch) => {
      const newFeedback = {
        firstname,
        lastname,
        email,
        telnum,
        agree,
        contactType,
        feedback
      }
      newFeedback.date = new Date().toISOString()

      return fetch(baseUrl + 'feedback', {
        method: 'POST',
        body: JSON.stringify(newFeedback),
        headers: {
          'Content-Type': 'application/json'
        },
        credentials: 'same-origin'
      })
        .then(
          (response) => {
            if (response.ok) {
              return response
            } else {
              const err = new Error(
                'Error ' + response.status + ': ' + response.statusText
              )
              err.response = response
              throw err
            }
          },
          (err) => {
            const errMess = new Error(err.message)
            throw errMess
          }
        )
        .then((response) => response.json())
        .then((feedback) => dispatch(addFeedback(feedback)))
        .catch((err) => {
          console.log('POST feedbacks', err.message)
          alert('Your feedback could not be posted \n Error: ' + err.message)
        })
    }
