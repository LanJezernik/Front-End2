import React from "react";
import Nav from "./Nav";
import Footer from "./Footer";
import Welcome from "./Welcome";
import Card from "./Card";

type Props = {
    children: JSX.Element,
};
const Wrapper = ({ children }: Props) => {
  return (
      <>
          <div className="cover-container d-flex w-100 h-100 p-3 mx-auto flex-column">
          <Nav />
              <Welcome/><hr/>
          <main>
              {children}

              <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>

          </main>
              <Footer/>
          </div>
      </>
  )
}

export default Wrapper;