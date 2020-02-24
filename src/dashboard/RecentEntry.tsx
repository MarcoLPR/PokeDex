import React from 'react';
import { humanize } from 'uno-js';

interface RecentEntryProps {
    pokemon: object;
    id: number;
}

const RecentEntry = ({ pokemon, id }: RecentEntryProps): JSX.Element => {
    return (
        <div>
            <h1>{`${id} - ${humanize(pokemon.name)}`}</h1>
        </div>
    );
};

export default RecentEntry;
