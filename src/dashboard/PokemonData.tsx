import React from 'react';
import Paper from '@material-ui/core/Paper';
import { GlobalContext } from '../provider/GlobalContext';
import Select from 'react-select';
import { humanize } from 'uno-js';

const PokemonData = (): JSX.Element => {
    const { pokemonList, getPokemonData } = React.useContext(GlobalContext);
    const [pokemon, setPokemon] = React.useState(null);

    const onChangePokemon = async newPokemon => {
        const data = await getPokemonData(newPokemon.value);
        setPokemon(data);
    };

    return (
        <Paper>
            <Select options={pokemonList} onChange={onChangePokemon} />
            {pokemon && (
                <React.Fragment>
                    <h1>{humanize(pokemon.name)}</h1>
                    <img src={pokemon.sprites.back_default} />
                    <img src={pokemon.sprites.front_default} />
                    {pokemon.sprites.back_shiny && <img src={pokemon.sprites.back_shiny} />}
                    {pokemon.sprites.front_shiny && <img src={pokemon.sprites.front_shiny} />}
                </React.Fragment>
            )}
        </Paper>
    );
};

export default PokemonData;
