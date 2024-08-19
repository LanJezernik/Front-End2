import React, {SyntheticEvent, useState} from "react";
import {Navigate, useParams} from "react-router-dom";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import axios from "axios";



const Login = () => {

    const[email,setEmail] = useState('');
    const[geslo,setPassword] = useState('');
    const[error,setError] = useState('');

    const[redirect, setRedirect] = useState(false);

    const submit = async (e:SyntheticEvent) => {
      e.preventDefault();



      const data = {
          email,
          geslo
      }

      console.log(data);

      const res = await axios.post('http://localhost:8080/auth/login/', data,{withCredentials: true});

      console.log(res);

      if (res.status === 201) {
          setRedirect(true);
      }

      if (res.status !== 201) {
          setError('Napaka v podatkih');
      }
    }

    if (redirect) {
        return <Navigate to='/' />;
    }


    return (
        <>      <div className="mjau">
                <h2>{error}</h2>
                <form onSubmit={submit} className="form-signin w-100 m-auto" >
                    <div className="form-floating">
                        <input type="email" className="form-control" id="floatingInput"
                               placeholder="Email"
                               onChange={(e) => setEmail(e.target.value)}/>
                        <label htmlFor="floatingInput">Email</label>
                    </div>
                    <div className="form-floating">
                        <input type="password" className="form-control" id="floatingPassword"
                               placeholder="Geslo"
                               onChange={(e) => setPassword(e.target.value)}/>
                        <label htmlFor="floatingPassword">Geslo</label>
                    </div>
                    <button className="w-100 btn btn-lg btn-primary" type="submit">Login</button>
                </form>
        </div>
        </>

    )
}

export default Login;