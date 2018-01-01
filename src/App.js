import React, { Component } from 'react';
import Categories from './components/navigation/Categories'
import NavBar from './components/navigation/NavBar'
import Content from './components/content/Content'


const App = () => (
    <div>
        <Categories/>
        <NavBar/>
        <Content />
    </div>
);

export default App;
