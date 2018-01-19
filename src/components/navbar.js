import React from "react";
import { SearchBar } from "../components/search-bar";

export const NavBar  = (props) => {
    let {optionsValue} = props.options;
    let {changeSearhType, searchBeer }= props;
    return (
        <nav>
            <p className="title">AGNT</p>
            <SearchBar options={ optionsValue } changeSearhType={changeSearhType} searchBeer={searchBeer}/>
        </nav>
    )

}