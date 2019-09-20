import React from 'react';
import '../index.css';
import Notas from './Note/Note.jsx';

const NotasSection = (props) => {
    return (
        <div>
        <p>¡WELCOME , {props.user.displayName}!</p>
        <button className="google" onClick ={props.signOut}>Sign Out</button>
        <Notas/>
        </div>
    );
}

export default NotasSection;