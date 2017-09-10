export function getPokemonsPerPage ({pagination, pokemons}) {
  const names = pagination.pages[pagination.current] || []
  const arr = []
  names.forEach((name) => {
    pokemons.items[name] && arr.push(pokemons.items[name])
  })
  return arr
}
