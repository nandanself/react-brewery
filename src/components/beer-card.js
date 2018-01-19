import React from "react";

export const BeerCard  = (props) => {
    // console.log(props);
    let {
        img,
        name,
        abv,
    } = props.beer;
 
    return (
        <article className="beer-card">
            <div className="beer-img">
                <img src = {img} alt=""/>
            </div>
            <div className="beer-details">
                <p className="name">{name}</p>
                <p className="name">ABV : {abv}</p>
            </div>
        </article>
    )

}