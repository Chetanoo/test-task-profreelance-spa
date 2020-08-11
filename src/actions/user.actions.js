import { userConstants } from '../constants/user.constants'
import { admin, user } from '../constants/constants'
import { alertActions } from './alert.actions'

export const login = (u) => {
  return dispatch => {
    if (
      (admin.username === u.name && admin.password === u.password) ||
            (user.username === u.name && user.password === u.password)
    ) {
      dispatch({
        type: userConstants.USER_LOGIN_SUCCESS,
        user: u
      })
      dispatch(alertActions.success(u.name))
    } else {
      dispatch({
        type: userConstants.USER_LOGIN_FAILURE
      })
      dispatch(alertActions.error('Логин или пароль не верны!'))
    }
  }
}

export const logout = () => {
  return dispatch => {
    dispatch({
      type: userConstants.USER_LOGOUT
    })
  }
}

export const togglePopUp = (val) => {
  return dispatch => {
    dispatch({
      type: userConstants.TOGGLE_POPUP,
      val
    })
  }
}
