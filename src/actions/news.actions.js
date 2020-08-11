import { newsConstants } from '../constants/news.constants'

export const getNews = (username) => {
  return dispatch => {
    dispatch({
      type: newsConstants.GET_NEWS,
      username
    })
  }
}

export const createNews = (item) => {
  return dispatch => {
    dispatch({
      type: newsConstants.CREATE_NEWS,
      item
    })
  }
}

export const deleteNews = (id) => {
  return dispatch => {
    dispatch({
      type: newsConstants.DELETE_NEWS,
      id
    })
  }
}

export const approveNews = (id) => {
  return dispatch => {
    dispatch({
      type: newsConstants.APPROVE_NEWS,
      id
    })
  }
}

export const findNews = (query) => {
  return dispatch => {
    dispatch({
      type: newsConstants.SEARCH_NEWS,
      query
    })
  }
}
