import {useState, useCallback, useEffect} from 'react';

const storageName = 'userData';

export const useAuth = () => {
    const [access_token, setToken] = useState(null);
    const [ready, setReady] = useState(false);

    const login = useCallback((jwtToken) => {
        setToken(jwtToken);
        console.log(jwtToken);
        localStorage.setItem(storageName, JSON.stringify({
            access_token: jwtToken
        }))

    }, []);


    const logout = useCallback(() => {
        setToken(null);
        localStorage.removeItem(storageName);
    }, []);

    useEffect(() => {
        const data = JSON.parse(localStorage.getItem(storageName));

        if (data && data.access_token) {
            login(data.access_token);
        }
        setReady(true);
    }, [login]);


    return { login, logout, access_token, ready }
};