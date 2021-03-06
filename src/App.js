import React from "react";
import {Switch, Route, Redirect} from 'react-router-dom';
import {privateRoutes, publicRoutes} from "./router";
import {CHAT_ROUTE, LOGIN_ROUTE} from "./utils/constants";

const App = () => {
    const user = true;
    return user ?
        (
            <Switch>
                {privateRoutes.map(({path, Component}) =>
                    <Route path={path} component={Component} exact={true} />
                )}
                <Redirect to={CHAT_ROUTE} />
            </Switch>
        ) :
        (
            <Switch>
                {publicRoutes.map(({path, Component}) =>
                    <Route path={path} component={Component} exact={true} />
                )}
                <Redirect to={LOGIN_ROUTE} />
            </Switch>
        )
}

export default App;