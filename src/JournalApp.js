import React from 'react';
import { store } from './store/store';
import { Provider } from 'react-redux';

import { AppRouter } from './routers/AppRouter';

export const JournalApp = () => {
    return (
        <Provider store={store}>
            <AppRouter />
        </Provider>
    )
};