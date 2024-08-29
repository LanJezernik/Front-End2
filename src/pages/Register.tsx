import React, {SyntheticEvent, useState} from "react";

import axios from 'axios';
import {Navigate} from "react-router-dom";





const Register = () => {
    const[ime, setFirstName] = useState('');
    const[priimek, setLastName] = useState('');
    const[email, setEmail] = useState('');
    const[geslo, setPassword] = useState('');

    const[errorText, setErrorText] = useState('');

    const[redirect, setRedirect] = useState(false);

    const submit = async (e: SyntheticEvent) => {
        e.preventDefault();
        const data = {
            ime,
            priimek,
            email,
            geslo,
        }
        console.log(data);
        const res = await axios.post('http://localhost:8080/auth/register', data);
        console.log(res);

        if (res.status === 201) {
            //uspeÅ¡no kreiran user, preusmerim ga na login
            setRedirect(true);
        }

        //FIXME backend s try - catch v primeru errorja
        if (res.status !== 201) {
            setErrorText('Napaka v podatkih');
            console.log(errorText);
        }

    }

    if (redirect) {
        return <Navigate to='/login' />
    }

    return (
        <>
            <div className="loginOkno">
            <h2>{errorText}</h2>
            <form onSubmit={submit} className="form-signin w-100 m-auto" id="forma">
                <div className="form-floating">
                    <input type="text" className="form-control" id="floatingFirstName"
                           placeholder="Ime"
                           onChange={(e) => setFirstName(e.target.value)}/>
                    <label htmlFor="floatingFirstName">Ime</label>
                </div>
                <div className="form-floating">
                    <input type="text" className="form-control" id="floatingLastName"
                           placeholder="Priimek"
                           onChange={(e) => setLastName(e.target.value)}/>
                    <label htmlFor="floatingLastName">Priimek</label>
                </div>
                <div className="form-floating">
                    <input type="email" className="form-control" id="floatingInput"
                           placeholder="name@example.com"
                           onChange={(e) => setEmail(e.target.value)}/>
                    <label htmlFor="floatingInput">Email</label>
                </div>
                <div className="form-floating">
                    <input type="password" className="form-control" id="floatingPassword"
                           placeholder="Geslo"
                           onChange={(e) => setPassword(e.target.value)}/>
                    <label htmlFor="floatingPassword">Geslo</label>
                </div>
                <button className="w-100 btn btn-lg btn-primary" type="submit">Register</button>
            </form>
                </div>
        </>
    )
}

export default Register;