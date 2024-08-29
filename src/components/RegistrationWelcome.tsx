// src/components/RegistrationWelcome.tsx
import React from "react";

const RegistrationWelcome = () => {
    return (
        <section className="py-5 text-center container">
            <div className="row py-lg-5">
                <div className="col-lg-6 col-md-8 mx-auto">
                    <h1 className="fw-light">Registracija</h1>
                    <p className="lead text-muted">Prosimo, izpolnite spodnji obrazec za registracijo.</p>
                </div>
            </div>
        </section>
    );
}

export default RegistrationWelcome;
