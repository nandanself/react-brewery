import React from 'react';
import {SelectDropdown} from './select-dropdown';

export const NavFilter = (props) => {

    let optionsValue = [
        {'value':'','label':'alcohol by volume'},
        {'value':"5",'label':'ABV < 5'},
        {'value':"6",'label':'ABV < 6'},
        {'value':"7",'label':'ABV < 7'},
        {'value':"8",'label':'ABV < 8'},
        {'value':"9",'label':'ABV < 9'}
    ];
  
    let selectDropdownOnChange = (changedValue) => {
        props.filter(changedValue);
    };

    return (
        <div className="nav-filter">
            <SelectDropdown options={optionsValue} onChange={selectDropdownOnChange}/>      
        </div>  
    );
};