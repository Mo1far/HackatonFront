import React from 'react';
import './App.css';
import { BrowserRouter } from 'react-router-dom'
import { useRoutes } from "./router";
//import { AuthContext } from "./context/AuthContext";
//import { useAuth } from "./hooks/auth.hook";

function App() {
    // const {access_token, login, logout} = useAuth();
    // const isAuthenticated = !!access_token;
    // const router = useRoutes(isAuthenticated);
    // console.log(router.props.children);
    // const routes = useRoutes(false);
    const router = useRoutes(false);
    return (
        /**
         * Используем компонент BrowserRouter что бы работал Switch
         */
        <BrowserRouter>
            <div>
                { router }
            </div>
        </BrowserRouter>
        // <AuthContext.Provider value={{
        //     access_token, login, logout, isAuthenticated
        // }}>
        //     <BrowserRouter>
        //         { isAuthenticated }
        //         <div>
        //             { router }
        //         </div>
        //     </BrowserRouter>
        // </AuthContext.Provider>
    );
}

export default App;
