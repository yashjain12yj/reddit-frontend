import React from 'react'
import './InfoBar.css'
import SignIn from './SignIn'
import SearchBar from './SearchBar'

const InfoBar = () => (
    <div className="infobar" id="infobar">
        <div className="col-sm-9">
			General Info
        </div>
        <div className="col-sm-3 signin" id="signin">
			<div className="side">
				<SearchBar /> 
				<SignIn />
			</div>
        </div>
    </div>
);

export default InfoBar