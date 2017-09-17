import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { fetchCategoryPokemons } from '../actions/pokemon'
import {getPokemonsPerPage} from '../libs/selectrors'

import PokemonList from '../components/PokemonList'
import Filter from '../components/Filter'
import Loader from '../components/Loader'
import Pagination from '../components/Pagination'

class Category extends React.PureComponent {
  constructor () {
    super()
    this.state = {
      filterTerm: ''
    }
    this.setFilterTerm = this.setFilterTerm.bind(this)
    this.goToPage = this.goToPage.bind(this)
  }
  componentDidMount () {
    this.props.fetchCategoryPokemons(0, this.props.match.params.category)
  }
  componentWillReceiveProps (newProps) {
    if (this.props.match.params.category !== newProps.match.params.category) {
      this.props.fetchCategoryPokemons(0, newProps.match.params.category)
    }
  }
  goToPage (page) {
    this.props.fetchCategoryPokemons(page, this.props.match.params.category)
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
        {!this.props.isFetching && <Pagination {...this.props.pagination} goToPage={this.goToPage} />}
        <Loader isShown={this.props.isFetching} />
      </div>
    )
  }
}

function mapDispatchToProps (dispatch) {
  return bindActionCreators({ fetchCategoryPokemons }, dispatch)
}

function mapStateToProps (state, props) {
  const category = props.match.params.category
  let {perPage} = state.pagination.category
  let {total, pages = {}, current} = state.pagination.category[category] || {}
  return { pokemons: getPokemonsPerPage(state.pokemons.items, pages[current]), pagination: {perPage, total, current}, isFetching: state.pokemons.isFetching }
}

Category.propTypes = {
  pokemons: PropTypes.array,
  fetchCategoryPokemons: PropTypes.func,
  isFetching: PropTypes.bool,
  match: PropTypes.object,
  pagination: PropTypes.object
}

export default connect(mapStateToProps, mapDispatchToProps)(Category)
