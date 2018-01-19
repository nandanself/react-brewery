import React from "react";
import { LoaderSpinner } from "./loading-spinner";
import { BeerCard } from "./beer-card"; 
import { NavFilter } from "../components/nav-filter";

export const BeerList  = ({beers, isLoading,filter}) => {

    let loading = () => {
        if (isLoading){
            return <LoaderSpinner/>
        }
    };

    let navfilter = () => {
        if(beers.length > 0 ){
            return <NavFilter filter={filter}/>
        }
    }

    let beerList =  beers.map((beer,i) =>{
        return (
           <BeerCard key={i} beer={beer}/> 
        )    
    });
 
    return (
        <div className="beer-grid-wrapper">
            {navfilter()}
            <div className="beer-grid">
                {beerList}
                {loading()}
            </div>
        </div>
    )

}