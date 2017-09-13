import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import {Link} from 'react-router-dom'

import style from './style.scss'

const joinLinks = (accu, elem) => accu === null ? [elem] : [...accu, ', ', elem]
const PokemonCard = ({ name, height, weight, sprites, types, className }) => (
  <div className={classNames(style.card, className)}>
    <div className='w-25'>
      <div className={style.image} style={{ backgroundImage: `url(${sprites.front_default || sprites.front_shiny || sprites.front_female})` }} />
    </div>
    <div className='col w-75'>
      <div className={style.name}>{name}</div>
      <div className={style.types}>
        {
          types.map(t => <Link to={`/category/${t.type.name}`} key={t.type.name}>{t.type.name}</Link>).reduce(joinLinks, null)
        }
      </div>
      <div>Weight: {weight}</div>
      <div>Height: {height}</div>
    </div>
  </div>
)

PokemonCard.defaultProps = {
  className: ''
}

PokemonCard.propTypes = {
  name: PropTypes.string,
  weight: PropTypes.number,
  height: PropTypes.number,
  sprites: PropTypes.object,
  types: PropTypes.array,
  className: PropTypes.string
}

export default PokemonCard
