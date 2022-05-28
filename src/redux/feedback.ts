import * as ActionTypes from './ActionTypes'

const Feedbacks = (state = { errMess: null, feedbacks: [] }, action: { type: any; payload: any }) => {
  switch (action.type) {
    case ActionTypes.ADD_FEEDBACK:

      return { ...state, feedbacks: state.feedbacks.concat(action.payload) }
    default:
      return state
  }
}

export default Feedbacks
