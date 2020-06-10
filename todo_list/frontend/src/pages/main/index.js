import React from 'react';
import Header from '../Header';
import Task from '../Task';
import './style.css'

export default function Main (){
    return(
            <div className="flexbox-container">
                <Header/>
                <Task/>
            </div>
    );
};