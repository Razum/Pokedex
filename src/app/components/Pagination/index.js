import React from 'react'
import PropTypes from 'prop-types'
import style from './style.scss'

const LIMIT = 5

class Pagination extends React.Component {
  goTo (page) {
    this.props.goToPage(page)
  }
  get numberOfPages () {
    return Math.floor(this.props.total / this.props.perPage)
  }
  get pagination () {
    const current = this.props.current
    const total = this.numberOfPages
    const pages = []
    if (current < LIMIT - 1) {
      for (let i = 0; i < LIMIT; i++) {
        if (i === current) {
          pages.push(<span key={i} className={style.current}>{i + 1}</span>)
        } else {
          pages.push(<span key={i} onClick={() => this.goTo(i)}>{i + 1}</span>)
        }
      }
      pages.push('...')
      pages.push(<span key={total} onClick={() => this.goTo(total)}>{total + 1}</span>)
    }

    if (current >= LIMIT - 1 && current <= total - LIMIT + 1) {
      pages.push(<span href='#' key={0} onClick={() => this.goTo(0)}>{1}</span>)
      pages.push('...')
      for (let i = current - 2; i < current + 3; i++) {
        if (i === current) {
          pages.push(<span key={i} className={style.current}>{i + 1}</span>)
        } else {
          pages.push(<span key={i} onClick={() => this.goTo(i)}>{i + 1}</span>)
        }
      }
      pages.push('...')
      pages.push(<span key={total} onClick={() => this.goTo(total)}>{total + 1}</span>)
    }

    if (current > total - LIMIT + 1) {
      pages.push(<span key={0} onClick={() => this.goTo(0)}>{1}</span>)
      pages.push('...')
      for (let i = total - LIMIT; i < total + 1; i++) {
        if (i === current) {
          pages.push(<span key={i} className={style.current}>{i + 1}</span>)
        } else {
          pages.push(<span key={i} onClick={() => this.goTo(i)}>{i + 1}</span>)
        }
      }
    }
    return pages
  }
  render () {
    if (!this.props.total) {
      return null
    }
    return (
      <div className={style.pagination}>
        {this.pagination}
      </div>
    )
  }
}

Pagination.propTypes = {
  current: PropTypes.number,
  total: PropTypes.number,
  perPage: PropTypes.number,
  goToPage: PropTypes.func
}

export default Pagination
