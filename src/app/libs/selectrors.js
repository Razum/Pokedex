export function getPokemonsPerPage (pokemons = [], names = []) {
  console.log(pokemons, names)
  const arr = []
  names.forEach((name) => {
    pokemons[name] && arr.push(pokemons[name])
  })
  return arr
}
