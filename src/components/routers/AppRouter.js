import React from 'react';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';
import { JournalScreen } from '../journal/JournalScreen';
import { AuthRouter } from './AuthRouter';

export const AppRouter = () => {
    return (
        <BrowserRouter>
            <div className="auth__main">
                <div className="auth__box-container">
                    <Switch>
                        <Route path="/auth" component={AuthRouter} />
                        <Route exact path="/" component={JournalScreen} />

                        <Redirect to="/auth/login" />
                    </Switch>
                </div>
            </div>
        </BrowserRouter>
    )
};
