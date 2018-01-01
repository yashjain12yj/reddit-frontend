import React from 'react'
import './MainPosts.css'
import Post from './Post'

const MainPosts = () => (
    <div className="mainposts col-sm-12" id="mainposts">
        {/* Iterate Posts */}
        <Post postid = "1"/>
        <Post postid = "2"/>
        <Post postid = "3"/>
        <Post postid = "4"/>
    </div>
);

export default MainPosts