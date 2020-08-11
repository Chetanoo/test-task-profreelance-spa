import React, { useState } from 'react'
import { Link } from 'react-router-dom'

import styles from './styles.module.css'
import { bindActionCreators } from 'redux'
import { login, togglePopUp, logout } from '../../actions/user.actions'
import { connect } from 'react-redux'

const Header = ({ showPopUp, user, togglePopUp, login, logout }) => {
  const [name, setName] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')

  return (
    <div className={styles.container}>
      <header className={styles.container}>
        <Link className={styles.navItem} to='/'><p>Главная</p></Link>
        <Link className={styles.navItem} to='/news'><p>Новости</p></Link>
        <div className={styles.navItem}>
          {!user.user ? <p onClick={() => togglePopUp(true)}>
                        Вход
                        </p> : <p onClick={() => logout()}>
                        Выход
                 </p>}
        </div>
      </header>
      {PopUp()}
    </div>

  )

  function handleUsernameChange (e) {
    setName(e.target.value)
  }

  function handlePasswordChange (e) {
    setPassword(e.target.value)
  }

  function tryLogin (u) {
    if (!u.name || !u.password) {
      setError('Нужно заполнить все поля!')
    } else {
      login(u)
      setError('')
      setName('')
      setPassword('')
    }
  }

  function PopUp () {
    return (
      <div className={showPopUp ? styles.activeModal : styles.modal}>
        <span className={styles.close} onClick={() => togglePopUp(false)}>&times;</span>
        <fieldset className={styles.set}>
          <label htmlFor='username'>Логин: </label>
          <input id='username' type='text' onChange={handleUsernameChange} value={name} />
        </fieldset>
        <fieldset className={styles.set}>
          <label htmlFor='password'>Пароль: </label>
          <input id='password' type='text' onChange={handlePasswordChange} value={password} />
        </fieldset>
        {error && <p>{error}</p>}
        <button onClick={() => tryLogin({ name, password })}>Войти</button>
      </div>
    )
  }
}

const mapStateToProps = ({ user }) => ({
  showPopUp: user.showPopUp,
  user
})

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      login,
      logout,
      togglePopUp
    },
    dispatch
  )

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Header)
