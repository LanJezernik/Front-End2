import React, { SyntheticEvent, useState } from "react";
import axios from "axios";

const Login = () => {
    const [email, setEmail] = useState('');
    const [geslo, setPassword] = useState('');
    const [error, setError] = useState('');

    const submit = async (e: SyntheticEvent) => {
        e.preventDefault();

        const data = {
            email,
            geslo
        };

        console.log(data);

        try {
            const res = await axios.post('http://localhost:8080/auth/login/', data, { withCredentials: true });

            console.log(res);

            if (res.status === 201) {
                // Redirect to /home and refresh the page
                window.location.replace("/home");
            } else {
                setError('Napaka v podatkih');
            }
        } catch (err) {
            setError('Prišlo je do napake pri prijavi.');
        }
    };

    return (
        <div className="loginOkno">
            <h2>{error}</h2>
            <form onSubmit={submit} className="form-signin w-100 m-auto">
                <div className="form-floating">
                    <input type="email" className="form-control" id="floatingInput"
                           placeholder="Email"
                           onChange={(e) => setEmail(e.target.value)} />
                    <label htmlFor="floatingInput">Email</label>
                </div>
                <div className="form-floating">
                    <input type="password" className="form-control" id="floatingPassword"
                           placeholder="Geslo"
                           onChange={(e) => setPassword(e.target.value)} />
                    <label htmlFor="floatingPassword">Geslo</label>
                </div>
                <button className="w-100 btn btn-lg btn-primary" type="submit">Login</button>
            </form>
        </div>
    );
};

export default Login;
