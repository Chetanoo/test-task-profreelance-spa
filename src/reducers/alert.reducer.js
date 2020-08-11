import { alertConstants } from '../constants/alert.constants'

export default function alert (state = { alertQueue: [] }, action) {
  switch (action.type) {
    case alertConstants.SUCCESS:
      return {
        alertQueue: [
          ...state.alertQueue,
          { message: action.message, type: 'success' }
        ]
      }
    case alertConstants.ERROR:
      return {
        alertQueue: [
          ...state.alertQueue,
          { message: action.message, type: 'error' }
        ]
      }
    case alertConstants.CLEAR:
      return {
        alertQueue: []
      }
    default:
      return state
  }
}
