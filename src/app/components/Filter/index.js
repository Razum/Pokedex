import React from 'react'
import PropTypes from 'prop-types'
import {debounce} from 'lodash'

import style from './style.scss'

const FILTER_DELAY = 200

class Filter extends React.PureComponent {
  constructor () {
    super()
    this.onChangeHandle = this.onChangeHandle.bind(this)
    this.delayedFilter = debounce((filterTerm) => {
      this.props.callback(filterTerm)
    }, FILTER_DELAY)
  }
  onChangeHandle (event) {
    this.delayedFilter(event.target.value)
  }
  render () {
    return (
      <div className={style.wrapper}>
        <input type='text' className={style.input} onChange={this.onChangeHandle} />
      </div>
    )
  }
}

Filter.propTypes = {
  callback: PropTypes.func
}

export default Filter
