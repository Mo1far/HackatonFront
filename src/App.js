import React from 'react';
import './App.css';
import { BrowserRouter } from 'react-router-dom'
import { useRoutes } from "./router";
import { AuthContext } from "./context/AuthContext";
import { useAuth } from "./hooks/auth.hook";

function App() {
    const {access_token, login, logout} = useAuth();
    const isAuthenticated = !!access_token;
    const routes = useRoutes(isAuthenticated);

    // const routes = useRoutes(false);
    return (
        /**
         * Используем компонент BrowserRouter что бы работал Switch
         */
        <AuthContext.Provider value={{
            access_token, login, logout, isAuthenticated
        }}>
            <BrowserRouter>
                { isAuthenticated }
                <div>
                    { routes }
                </div>
            </BrowserRouter>
        </AuthContext.Provider>
    );
}

export default App;
