export const fetchPokemonData = async pokemon => {
  const { url } = pokemon;

  try {
    return fetch(url)
      .then(response => response.json())
      .then(pokeData => pokeData);
  } catch (error) {
    console.error(error);
  }
};

export const fetchPokemon = async url => {
  try {
    return fetch(`https://pokeapi.co${url}`)
      .then(response => response.json())
      .then(allpokemon => {
        const promises = allpokemon.results.map(pokemon => fetchPokemonData(pokemon));

        return Promise.all(promises);
      });
  } catch (error) {
    console.error(error);
  }
};

export const fetcher = (...args) => fetch(...args).then(res => res.json());
