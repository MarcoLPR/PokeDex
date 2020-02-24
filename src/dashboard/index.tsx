import React from 'react';
import RecentList from './RecentList';
import PokemonData from './PokemonData';

const Dashboard = (): JSX.Element => {
    return (
        <React.Fragment>
            <PokemonData />
            <RecentList />
        </React.Fragment>
    );
};

export default Dashboard;
