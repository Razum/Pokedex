import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { fetchPokemons } from '../actions/pokemon'
import {getPokemonsPerPage} from '../libs/selectrors'

import PokemonList from '../components/PokemonList'
import Filter from '../components/Filter'
import Loader from '../components/Loader'
import Pagination from '../components/Pagination'

class Pokedex extends React.PureComponent {
  constructor () {
    super()
    this.state = {
      filterTerm: ''
    }
    this.setFilterTerm = this.setFilterTerm.bind(this)
  }
  componentDidMount () {
    this.props.fetchPokemons(0)
  }
  setFilterTerm (filterTerm) {
    this.setState({filterTerm})
  }
  get pokemons () {
    if (this.state.filterTerm) {
      return this.props.pokemons.filter((pokemon) => pokemon.name.toLowerCase().indexOf(this.state.filterTerm.toLowerCase()) !== -1)
    }
    return this.props.pokemons
  }
  render () {
    return (
      <div>
        <Filter callback={this.setFilterTerm} />
        {!this.props.isFetching && <PokemonList pokemons={this.pokemons} />}
        {!this.props.isFetching && <Pagination {...this.props.pagination} goToPage={this.props.fetchPokemons} />}
        <Loader isShown={this.props.isFetching} />
      </div>
    )
  }
}

function mapDispatchToProps (dispatch) {
  return bindActionCreators({ fetchPokemons }, dispatch)
}

function mapStateToProps (state) {
  return { pokemons: getPokemonsPerPage(state.pokemons.items, state.pagination.main.pages[state.pagination.main.current]), pagination: state.pagination.main, isFetching: state.pokemons.isFetching }
}

Pokedex.propTypes = {
  pokemons: PropTypes.array,
  fetchPokemons: PropTypes.func,
  isFetching: PropTypes.bool,
  pagination: PropTypes.object
}

export default connect(mapStateToProps, mapDispatchToProps)(Pokedex)
