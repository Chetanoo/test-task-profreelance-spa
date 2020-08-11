import React, { useEffect, useState } from 'react'

import styles from './styles.module.css'
import { bindActionCreators } from 'redux'
import { getNews, createNews, deleteNews, approveNews, findNews } from '../../actions/news.actions'
import { connect } from 'react-redux'
import uniqid from 'uniqid'

const News = ({ news, user, getNews, createNews, deleteNews, approveNews, findNews }) => {
  const [title, setTitle] = useState('')
  const [body, setBody] = useState('')

  useEffect(() => {
    getNews(user.user)
  }, [user.user, news.allNews])

  return (
    <div className={styles.container}>
      {searchNews()}
      {renderNews(news.newsToShow)}
      {newsForm()}
    </div>
  )

  function renderNews (news) {
    return (
      <div>
        {news.map((item, i) => <div key={i} className={styles.card}>
          <strong>{item.title}</strong>
          <small>{item.created.toLocaleString()}</small>
          <p>{item.body}</p>
          <div>by <strong>{item.createdBy}</strong></div>
          {user.user === 'admin' && !item.approved && <div>
            <button onClick={() => approveNewsItem(item.id)}>Подтвердить</button>
                                                      </div>}
          {user.user === 'admin' &&
            <button onClick={() => deleteNewsItem(item.id)}>Удалить</button>}
                               </div>)}
      </div>
    )
  }

  function searchNews () {
    return (
      <div className={styles.container}>
        <label htmlFor='query'>Поиск</label>
        <input id='query' type='text' onChange={handleSearchChange} />
      </div>
    )
  }

  function newsForm () {
    if (!user.user) {
      return null
    }
    return (
      <div className={styles.container}>
        <label htmlFor='title'>Заголовок</label>
        <input id='title' type='text' onChange={handleTitleChange} value={title} />
        <label htmlFor='body'>Текст новости</label>
        <input id='body' type='tex' onChange={handleBodyChange} value={body} />
        <button
          onClick={() => createNewsItem(title, body)}
          disabled={!title && !body}
        >Создать новость
        </button>
      </div>
    )
  }

  function handleTitleChange (e) {
    setTitle(e.target.value)
  }

  function handleBodyChange (e) {
    setBody(e.target.value)
  }

  function handleSearchChange (e) {
    e.target.value ? findNews(e.target.value.trim().toLowerCase()) : getNews(user.user)
  }

  function createNewsItem (title, body) {
    const newItem = {
      id: uniqid(),
      title,
      body,
      created: new Date(),
      createdBy: user.user,
      approved: false
    }
    setTitle('')
    setBody('')
    createNews(newItem)
  }

  function deleteNewsItem (id) {
    deleteNews(id)
  }

  function approveNewsItem (id) {
    approveNews(id)
  }
}

const mapStateToProps = ({ news, user }) => ({
  news,
  user
})

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      getNews,
      createNews,
      deleteNews,
      approveNews,
      findNews
    },
    dispatch
  )

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(News)
