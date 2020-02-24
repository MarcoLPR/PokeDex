import React from 'react';
import Paper from '@material-ui/core/Paper';
import { GlobalContext } from '../provider/GlobalContext';
import RecentEntry from './RecentEntry';

const RecentList = (): JSX.Element => {
    const { recent } = React.useContext(GlobalContext);

    return (
        <Paper>
            <h1>Recent Pokemon</h1>
            {recent.map((x, i) => (
                <RecentEntry key={i} pokemon={x} id={i + 1} />
            ))}
        </Paper>
    );
};

export default RecentList;
