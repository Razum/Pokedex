import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { fetchPokemonsDetailedList } from '../actions/pokemonActions'
import { goToPage } from '../actions/paginationActions'
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
    this.props.goToPage(0)
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
        <PokemonList pokemons={this.pokemons} />
        <Pagination {...this.props.pagination} goToPage={this.props.goToPage} />
        <Loader isShown={this.props.isFetching} />
      </div>
    )
  }
}

function mapDispatchToProps (dispatch) {
  return bindActionCreators({ fetchPokemonsDetailedList, goToPage }, dispatch)
}

function mapStateToProps (state) {
  return { pokemons: getPokemonsPerPage(state), pagination: state.pagination, isFetching: state.pokemons.isFetching }
}

Pokedex.propTypes = {
  pokemons: PropTypes.array,
  fetchPokemonsDetailedList: PropTypes.func,
  goToPage: PropTypes.func,
  isFetching: PropTypes.bool,
  match: PropTypes.object,
  pagination: PropTypes.object
}

export default connect(mapStateToProps, mapDispatchToProps)(Pokedex)
