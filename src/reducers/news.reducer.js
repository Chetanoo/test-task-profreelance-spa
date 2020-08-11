import { newsConstants } from '../constants/news.constants'
import uniqid from 'uniqid'

const initialState = {
  allNews: [
    {
      id: uniqid(),
      title: 'Новость 1',
      created: new Date(),
      body: 'Текст1',
      approved: true,
      createdBy: 'user'
    },
    {
      id: uniqid(),
      title: 'Новость 2',
      created: new Date(),
      body: 'Текст2',
      approved: false,
      createdBy: 'user'
    },
    {
      id: uniqid(),
      title: 'Новость 3',
      created: new Date(),
      body: 'Текст3',
      approved: false,
      createdBy: 'admin'
    }
  ],
  newsToShow: [

  ]
}

export default (state = initialState, action) => {
  switch (action.type) {
    case newsConstants.GET_NEWS:
      let newNews = []
      if (action.username === '') {
        newNews = state.allNews.filter(item => item.approved === true)
      } else if (action.username === 'user') {
        newNews = state.allNews.filter(item => item.approved === true || item.createdBy === action.username)
      } else if (action.username === 'admin') {
        newNews = state.allNews
      }
      return {
        ...state,
        newsToShow: newNews
      }
    case newsConstants.CREATE_NEWS:
      return {
        ...state,
        allNews: state.allNews.concat(action.item)
      }
    case newsConstants.DELETE_NEWS:
      return {
        ...state,
        allNews: state.allNews.filter(item => item.id !== action.id)
      }
    case newsConstants.APPROVE_NEWS:
      state.allNews.find((item, i) => {
        if (item.id === action.id) {
          state.allNews[i].approved = true
        }
        return item.id === action.id
      })
      return {
        ...state
      }
    case newsConstants.SEARCH_NEWS:
      const specificNews = state.newsToShow.filter((item) =>
        item.title.trim().toLowerCase().includes(action.query)
      )
      return {
        ...state,
        newsToShow: specificNews
      }
    default:
      return state
  }
}
