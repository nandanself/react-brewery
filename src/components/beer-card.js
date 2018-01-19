import React from "react";

export const BeerCard  = (props) => {
    // console.log(props);
    let {
        id,
        styleId,
        img,
        categoryId,
        name,
    } = props.beer;
 
    return (
        <article className="beer-card">
            <div className="beer-img">
                <img src = {img}/>
            </div>
            <div className="beer-details">
                <p className="name">{name}</p>
            </div>
        </article>
    )

}