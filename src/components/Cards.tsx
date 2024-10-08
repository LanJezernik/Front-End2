import React, {useEffect, useState} from "react";
import axios from "axios";
import Card from "./Card";

const Cards = () => {
  const[cards,setCards] = useState([]);

  const loadCards = async () => {
    const res = await axios.get('http://localhost:8080/post',{withCredentials: true});
    if (res.status === 200) {
      console.log(res.data);
      setCards(res.data);
    }
  }

  useEffect(()=>{
    loadCards();
  },[]);

  if(cards.length>0) {
    return (
      <>
        {cards.map((card: any, i) => {
          console.log(card);
          return <Card cardData={card} key={i} />;
        })
        }

      </>
    );
  }

  return (
        <h2>Vpisan ni noben trening</h2>
  );



}


export default Cards;