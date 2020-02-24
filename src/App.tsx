import React from 'react';
import Dashboard from './dashboard';
import { GlobalContextProvider } from './provider/GlobalContextProvider';

const App = (): JSX.Element => (
    <GlobalContextProvider>
        <Dashboard />
    </GlobalContextProvider>
);

export default App;
