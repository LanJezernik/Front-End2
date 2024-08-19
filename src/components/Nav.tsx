import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Nav = () => {
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // Check if user is logged in
  useEffect(() => {
    const checkAuthStatus = async () => {
      try {
        const response = await axios.get('http://localhost:8080/users/profile', { withCredentials: true });
        if (response.status === 200) {
          setIsLoggedIn(true);
        } else {
          setIsLoggedIn(false);
        }
      } catch (error) {
        setIsLoggedIn(false);
      }
    };

    checkAuthStatus();
  }, []);

  return (
    <>
      <header className="mb-auto">
        <div>
          <h3 className="float-md-start mb-0">E-Klub</h3>
          <nav className="nav nav-masthead justify-content-center float-md-end">
            <a className="nav-link fw-bold py-1 px-10 active" aria-current="page" href="/Home">Home</a>
            {!isLoggedIn && (
              <>
                <a className="nav-link fw-bold py-1 px-10" href="/Login">Prijava</a>
                <a className="nav-link fw-bold py-1 px-10" href="/Register">Registracija</a>
              </>
            )}
            {isLoggedIn && (
              <>
                <a className="nav-link fw-bold py-1 px-10" href="/create">Dodaj Trening</a>
                <a className="nav-link fw-bold py-1 px-10" href="/me">Profil</a>
                <button
                  type="submit"
                  onClick={() => {
                    navigate('/logout');
                    window.location.reload();
                  }}
                >
                  Odjava
                </button>
              </>
            )}
          </nav>
        </div>
      </header>
    </>
  )
}

export default Nav;
