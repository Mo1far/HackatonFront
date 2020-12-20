import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import StartPage from "./pages/StartPage";

/**
 * Данный роутер определяет зарегестрирован ли пользователь в системе
 * и какую страницу ему отрисовать.
 *
 * @param {Boolean} isAuthendicated флаг который проверяет зарегестрирован ли пользователь(есть ли токен)
 */

export const useRoutes = (isAuthendicated) => {
    if (isAuthendicated) {
        return (
            <Switch>
                <Route path="/home" exact>
                    <HomePage />
                </Route>
                {/*<Redirect to="/login" />*/}
            </Switch>
        );
    }

    return (
        <Switch>
            <Route path="/home" exact>
                <HomePage />
            </Route>
            <Route path="/" exact>
                <StartPage />
            </Route>
            <Route path="/login">
                <LoginPage />
            </Route>
            <Redirect to="/" />
        </Switch>
    );
};
