import React from 'react'
import './CategoriesStyle.css'

const Categories = () => (
    <div className="ca-header navbar navbar-default">
        <div className="width-clip container-fluid">
            <div className="dropdown navbar-header">
                <a className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Dropdown <span className="caret"></span></a>
                <ul className="dropdown-menu">
                    <li><a href="#">Action</a></li>
                    <li><a href="#">Another action</a></li>
                    <li><a href="#">Something else here</a></li>
                </ul>
            </div>
            <div className="ca-list">
                <ul className="flat-list nav navbar-nav">
                    <li><a href="#">Home</a></li>
                    <li><a href="#">Popular</a></li>
                    <li><a href="#">All</a></li>
                    <li><a href="#">Random</a></li>
                </ul>
                <span className="separator">&nbsp;|&nbsp;</span>
                <ul className="flat-list nav navbar-nav">
                    <li><a href="#">Home</a></li>
                    <li><a href="#">Popular</a></li>
                    <li><a href="#">All</a></li>
                    <li><a href="#">Random</a></li>
                </ul>
            </div>
        </div>
    </div>
);

export default Categories