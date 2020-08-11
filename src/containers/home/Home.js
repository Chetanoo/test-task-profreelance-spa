import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import styles from './styles.module.css'

const Home = ({ user }) => {
  return (
    <div className={styles.container}>
      <p>Привет, {user.user ? user.user : 'Гость'}!</p>
    </div>
  )
}

const mapStateToProps = ({ user }) => ({
  user
})

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
    },
    dispatch
  )

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home)
