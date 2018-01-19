import React from 'react';
import {SelectDropdown} from './select-dropdown';

export const SearchBar = (props) => {

    let _handleKeyPress = (e) => {
        if (e.key === 'Enter') {
          handleClick();
        }   
    }

    let handleClick = () =>{
        let value = document.getElementById('searchBox').value;
        if (value){
            props.searchBeer(value);
        }     
    }
    
    let selectDropdownOnChange = (changedValue) => {
        props.changeSearhType(changedValue);
    };

    return (
        <div style={{display:"inherit","paddingTop":"7px"}}>
            <SelectDropdown options={props.options} onChange={selectDropdownOnChange}/>      
            <input id="searchBox" placeholder="Search Your Beer" onKeyPress={_handleKeyPress}/>
            <button onClick={ handleClick }> Go </button>
        </div>  
    );
};