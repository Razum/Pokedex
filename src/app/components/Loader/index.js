import React from 'react'
import PropTypes from 'prop-types'
import style from './style.scss'

const Loader = ({isShown}) => {
  if (isShown) {
    return (
      <div className={style.wrapper}>
        <div className={style.text}>Loading...</div>
        <div className={style.ball}>
          <div className={style.innerball} />
        </div>
      </div>
    )
  }
  return null
}

Loader.defaultProps = {
  isShown: true
}

Loader.propTypes = {
  isShown: PropTypes.bool
}

export default Loader
