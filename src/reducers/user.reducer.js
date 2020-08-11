import { userConstants } from '../constants/user.constants'

const initialState = {
  user: '',
  showPopUp: false
}

export default (state = initialState, action) => {
  switch (action.type) {
    case userConstants.USER_LOGIN_SUCCESS:
      return {
        ...state,
        user: action.user.name,
        showPopUp: false
      }
    case userConstants.USER_LOGIN_FAILURE:
      return {
        ...state
      }
    case userConstants.TOGGLE_POPUP:
      return {
        ...state,
        showPopUp: action.val
      }
    case userConstants.USER_LOGOUT:
      return {
        ...state,
        user: ''
      }
    default:
      return state
  }
}
