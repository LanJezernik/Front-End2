import React, { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import axios from "axios";
import logo from './logo.png'; // Preverite pravilnost poti

const Nav = () => {
  const navigate = useNavigate();
  const location = useLocation(); // To get current URL path
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // Track the active page
  const [activePage, setActivePage] = useState(location.pathname);

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

  // Update active page on location change
  useEffect(() => {
    setActivePage(location.pathname);
  }, [location]);

  return (
      <>
        <header className="mb-auto">
          <div className="d-flex justify-content-between align-items-center">
            {/* Logo and Title */}
            <div className="d-flex align-items-center">
              <img src={logo} alt="Club Logo" style={{ width: '50px', height: '50px', marginRight: '10px' }} />
              <h3 className="mb-0">NK Rudar E-Klub</h3>
            </div>
            {/* Navigation Links */}
            <nav className="nav nav-masthead justify-content-end">
              <a
                  className={`nav-link fw-bold py-1 px-10 ${activePage === '/Home' ? 'text-dark' : 'text-white'}`}
                  aria-current="page"
                  href="/Home"
                  onClick={() => setActivePage('/Home')}
              >
                Treningi
              </a>
              {!isLoggedIn && (
                  <>
                    <a
                        className={`nav-link fw-bold py-1 px-10 ${activePage === '/Register' ? 'text-dark' : 'text-white'}`}
                        href="/Register"
                        onClick={() => setActivePage('/Register')}
                    >
                      Registracija
                    </a>
                    <a
                        className={`nav-link fw-bold py-1 px-10 ${activePage === '/Login' ? 'text-dark' : 'text-white'}`}
                        href="/Login"
                        onClick={() => setActivePage('/Login')}
                    >
                      Prijava
                    </a>
                  </>
              )}
              {isLoggedIn && (
                  <>
                    <a
                        className={`nav-link fw-bold py-1 px-10 ${activePage === '/create' ? 'text-dark' : 'text-white'}`}
                        href="/create"
                        onClick={() => setActivePage('/create')}
                    >
                      Dodaj Trening
                    </a>
                    <a
                        className={`nav-link fw-bold py-1 px-10 ${activePage === '/me' ? 'text-dark' : 'text-white'}`}
                        href="/me"
                        onClick={() => setActivePage('/me')}
                    >
                      Profil
                    </a>
                    <button
                        className="nav-link fw-bold py-1 px-10 text-dark" // Always dark color
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
  );
}

export default Nav;
