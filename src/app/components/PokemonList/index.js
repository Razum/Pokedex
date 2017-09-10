import React from 'react'
import PropTypes from 'prop-types'
import PokemonCard from '../PokemonCard'

const PokemonList = (props) => {
  const getList = (pokemons) => {
    if (pokemons.length) {
      return pokemons.map(pokemon => (
        <div className='col w-100 w-md-50' key={pokemon.id}>
          <PokemonCard {...pokemon} />
        </div>
      ))
    }
    return <div className='center p4 large bold'>No Pokemons found. Change filter or reload the page</div>
  }
  return (
    <div className='flex flex-wrap py3'>
      {getList(props.pokemons)}
    </div>
  )
}

PokemonList.propTypes = {
  pokemons: PropTypes.array
}

export default PokemonList
