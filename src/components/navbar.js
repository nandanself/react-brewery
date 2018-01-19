import React from "react";
import { SearchBar } from "../components/search-bar";
import { ProfilePic } from "../components/profile-picture";

export const NavBar  = (props) => {
    let {optionsValue} = props.options;
    let {changeSearhType, searchBeer }= props;
    return (
        <nav>
            <p className="title">AGNT</p>
            <SearchBar options={ optionsValue } changeSearhType={changeSearhType} searchBeer={searchBeer}/>
            <ProfilePic src="https://scontent.fblr4-1.fna.fbcdn.net/v/t1.0-1/p48x48/14470447_1188934431173127_8371628988109500186_n.jpg?oh=cb5119d3ff32453fd60f9bfc5758a596&oe=5AE4DF9D"/>
        </nav>
    )

}