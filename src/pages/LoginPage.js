import React, {useEffect, useState, useContext} from "react";
import { useHttp } from "../hooks/http.hook";
import {useMessage} from "../hooks/message.hook";
import {AuthContext} from '../context/AuthContext'

const LoginPage = () => {
    const auth = useContext(AuthContext);
    const message = useMessage();
    const { loading, request, error, cleanError } = useHttp();
    const [form, setForm] = useState({
        email: "",
        password: "",
        user_name: "",
        first_name: "",
        last_name: "",
    });

    useEffect( () => {
        message(error);
        cleanError();
    }, [error, message, cleanError]);

    const changeHandler = (event) => {
        setForm({ ...form, [event.target.name]: event.target.value });
    };

    const registerHandler = async () => {
        try {
            const data = await request("http://172.20.10.3:5000/auth/signup", "POST", { ...form });
            console.log(data);
        } catch (e) {
        }
    };

    const loginHandler = async () => {
        try {
            const data = await request("http://172.20.10.3:5000/auth/login", "POST", { ...form });
            auth.login(data.access_token);
        } catch (e) {
        }
    };

    return (
        <div>
            <div>
                <h1>
                    <b>Login</b>
                </h1>
                <div>
                    <div>
                        <span>Authorization</span>
                        <div>
                            <div>
                                <input
                                    placeholder="Enter your email."
                                    id="email"
                                    type="text"
                                    name="email"
                                    onChange={changeHandler}
                                />
                                <label htmlFor="email">Email</label>
                            </div>

                            <div>
                                <input
                                    placeholder="Enter your password"
                                    id="password"
                                    type="password"
                                    name="password"
                                    onChange={changeHandler}
                                />
                                <label htmlFor="password">Password</label>
                            </div>
                            <div>
                                <input
                                    placeholder="Enter your user name"
                                    id="user_name"
                                    type="user_name"
                                    name="user_name"
                                    onChange={changeHandler}
                                />
                                <label htmlFor="user_name">user_name</label>
                            </div>
                            <div>
                                <input
                                    placeholder="Enter your first name"
                                    id="first_name"
                                    type="first_name"
                                    name="first_name"
                                    onChange={changeHandler}
                                />
                                <label htmlFor="password">first_name</label>
                            </div>
                            <div>
                                <input
                                    placeholder="Enter your last name"
                                    id="last_name"
                                    type="last_name"
                                    name="last_name"
                                    onChange={changeHandler}
                                />
                                <label htmlFor="password">last_name</label>
                            </div>

                        </div>
                    </div>
                    <div>
                        <button
                            onClick={loginHandler}
                            disabled={loading}
                        >
                            Login
                        </button>
                        <button

                            onClick={registerHandler}
                            disabled={loading}
                        >
                            Registration
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LoginPage;

