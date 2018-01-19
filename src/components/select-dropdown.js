import React from 'react';

export const SelectDropdown = ({options, onChange}) => {

    let handleChange = (e) => {
       onChange(e.target.value);
    };

    let optionsDivs = options.map(function(option,i) {
        return (
            <option key={i} value={option.value}>
                {option['label']}
            </option>
        )
    }); 

    return (
        <select id="selectDropDown"
            className='form-control' 
            onChange={handleChange}>
            {optionsDivs}
        </select>
    );
};