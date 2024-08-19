import React from "react";
import {useNavigate} from "react-router-dom";
import axios from "axios";

const Card = ({cardData}:{cardData:any}) => {

    const navigate= useNavigate();

    async function clickDelete(){
        const res = await axios.delete('http://localhost:8080/post/'+cardData.id, {withCredentials: true});
        window.location.reload();
    }

    const vsebina = cardData.content
    const title = cardData.title

return (
    <>
        <div className="col">
            <div className="card shadow-sm">
                <svg className="bd-placeholder-img card-img-top" width="100%" height="225"
                     xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: SLIKA"
                     preserveAspectRatio="xMidYMid slice" focusable="false"><title>SLIKA</title>
                    <rect width="100%" height="100%" fill="#55595c"/>
                    <text x="50%" y="50%" fill="#eceeef" dy=".3em">SLIKA</text>
                </svg>

                <div className="card-body">
                    <h5>{cardData.title}</h5>
                    <p className="card-text">{cardData.content}</p>
                    <div className="d-flex justify-content-between align-items-center">
                        <div className="btn-group">
                            <button type="button" onClick={clickDelete} className="btn btn-sm btn-outline-secondary">Delete</button>
                            <button type = "button"
                            className="btn btn-sm btn-outline-secondary"
                            onClick={() => navigate(`../update-post/${cardData.id}`, { 
                                state: {
                                    title: cardData.title, 
                                    content : cardData.content } })}>
                                Edit
                            </button>
                        </div>
                        <small className="text-muted">9 mins</small>
                    </div>
                </div>
            </div>
        </div>
    </>
)
}

export default Card;