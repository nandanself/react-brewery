import React from "react";

export const ProfilePic  = props => { 
    let { src } = props;
    return (
        <div className="profile-picture">
            <img src={src}/>
        </div>
    )

}