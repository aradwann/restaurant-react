import * as ActionTypes from './ActionTypes'

const Comments = (state = { errMess: null, comments: [] }, action: { type: any; payload: ConcatArray<never> }) => {
  switch (action.type) {
    case ActionTypes.ADD_COMMENTS:
      return {
        ...state,
        isLoading: false,
        errMess: null,
        comments: action.payload
      }
    case ActionTypes.COMMENTS_FAILED:
      return {
        ...state,
        isLoading: false,
        errMess: action.payload,
        comments: []
      }
    case ActionTypes.ADD_COMMENT:

      return { ...state, comments: state.comments.concat(action.payload) }
    default:
      return state
  }
}

export default Comments
