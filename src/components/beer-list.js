import React from "react";
import { LoaderSpinner } from "./loading-spinner";
import { BeerCard } from "./beer-card"; 

export const BeerList  = ({beers, isLoading}) => {

    let loading = () => {
        if (isLoading){
            return <LoaderSpinner/>
        }
    };

    let beerList =  beers.map((beer,i) =>{
        return (
           <BeerCard key={i} beer={beer}/> 
        )    
    });
 
    return (
        <div className="beer-grid">
            {beerList}
            {loading()}
        </div>
    )

}