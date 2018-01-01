import React from 'react'
import './Content.css'
import Infobar from './InfoBar'
import MainPosts from './MainPosts'

const Content = () => (
    <div className="content container-fluid" id="main-content">
        <div className="row">
			<Infobar />
        </div>
        <div className="row">
			<MainPosts />
        </div>
    </div>
);

export default Content