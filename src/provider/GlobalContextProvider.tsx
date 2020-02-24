import React from 'react';
import { GlobalContext } from './GlobalContext';
import { humanize } from 'uno-js';

const baseUrl = 'https://pokeapi.co/api/v2/';

export const GlobalContextProvider = ({ children }: any): JSX.Element => {
    const [recent, setRecent] = React.useState([]);
    const [pokemonList, setPokemonList] = React.useState();

    const getPokemonData = async (url: string): Promise<object> => {
        const result = await fetch(url).then(response => response.json());
        const arr = [...recent];
        arr.push(result);
        if (recent.length === 10 && !recent.some(x => x.id === result.id)) {
            arr.shift();
        }
        setRecent(arr);
        return result;
    };

    const getAllPokemon = async (): Promise<void> => {
        const payload = await fetch(`${baseUrl}pokemon?limit=1000`).then(response => response.json());
        const result = payload.results.map(x => ({ value: x.url, label: humanize(x.name.replace('-', ' ')) }));
        setPokemonList(result);
    };

    React.useEffect(() => {
        getAllPokemon();
    }, []);

    return (
        <GlobalContext.Provider
            value={{
                pokemonList,
                getPokemonData,
                recent,
            }}
        >
            {children}
        </GlobalContext.Provider>
    );
};
