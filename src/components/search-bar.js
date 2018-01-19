import React from 'react';
import {SelectDropdown} from './select-dropdown';

export const SearchBar = (props) => {

    let seachType = "name=";    

    let optionsValue = [
        {'value':"name=",'label':'name'},
        {'value':"styleId=",'label':'style'},
    ];

    let handleClick = () => {
        let value = document.getElementById('searchBox').value;
        if (value) {
            let query = `${seachType}${value}`
            props.search(query);
        }
    };

    let _handleKeyPress = (e) => {
        if (e.key === 'Enter') {
          handleClick();
        }
    }
    

    let selectDropdownOnChange = (changedValue) => {
        seachType = changedValue;
    };

    return (
        <div style={{display:"inherit","paddingTop":"7px"}}>
            <SelectDropdown options={optionsValue} onChange={selectDropdownOnChange}/>      
            <input id="searchBox" placeholder="Search Your Beer" onKeyPress={_handleKeyPress}/>
            <button onClick={ handleClick }> Go </button>
        </div>  
    );
};