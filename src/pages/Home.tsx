import React from "react";
import Welcome from "../components/Welcome";
import Cards from "../components/Cards";
import Me from "./Me";
import Footer from "../components/Footer";



const Home = () => {

    return (
        <>
            <main className="px-3">
                <div  className="lead">
            <Cards/>
                </div>
            </main>

        </>
    );
}

export default Home;