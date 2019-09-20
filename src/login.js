import React, { Component } from 'react';
import withFirebaseAuth from 'react-with-firebase-auth';
import * as firebase from 'firebase/app';
import 'firebase/auth';
import firebaseConfig from './firebase';
import googleGif from './img/tenor.gif';
import NotasSection from './src/NotesSection';
// import facebookGif from './img/facebook.gif';



const firebaseApp = firebase.initializeApp(firebaseConfig);

class Login extends Component {
    render () {
        const { user, signOut, signInWithGoogle} = this.props;
        return (
            <div className="PandaNotes">
                <header className="App-header">
                    {<img className="pandaLogo" src="https://i.ibb.co/swrDGVp/ezgif-com-crop-2.gif"></img>}
                    <h1>PandaNotes</h1>
                    {<img className="hojaLogo" src="https://loading.io/assets/img/animation/icon/showcase/green-energy.svg"></img>}
                 </header>
                    <h2>Write here your ideas...</h2>

            
            <div className="loginContainer">
                {
                    user 
                    ? <NotasSection user={user} signOut={signOut}/>
                    : <LoginElements signInWithGoogle={signInWithGoogle}/>
                    
                }
                {/* {
                    user 
                    ? <button onClick ={signOut}>Sign Out</button> 
                    : <button className="facebook" onClick={signInWithFacebook}><img class="facebook" src={facebookGif}/> Entra con Facebook</button>
                } */}

            </div>
            <footer className="footerBackground">
                {<img className="bambooLogo1" src="https://i.ibb.co/jV83rxh/ezgif-com-crop-4.gif"></img>}
                {<img className="bambooLogo2" src="https://i.ibb.co/jV83rxh/ezgif-com-crop-4.gif"></img>}
                {<img className="bambooLogo3" src="https://i.ibb.co/jV83rxh/ezgif-com-crop-4.gif"></img>}
                {<img className="bambooLogo4" src="https://i.ibb.co/jV83rxh/ezgif-com-crop-4.gif"></img>}
                {<img className="bambooLogo5" src="https://i.ibb.co/jV83rxh/ezgif-com-crop-4.gif"></img>}
            </footer>
        </div>
        );
    }
}

const LoginElements = (props) => {
    return (
        <div>
        <p>{<img id="neko" src="https://media.giphy.com/media/VFBcv93uvEbh99m4Xg/giphy.gif"></img>}</p>
        <button className="google" onClick={props.signInWithGoogle}><img class="googleGif" src={googleGif}/>Google</button>
        </div>
    );
}

const firebaseAppAuth = firebaseApp.auth();
const providers = {
    googleProvider: new firebase.auth.GoogleAuthProvider(),
    // facebookProvider: new firebase.auth.FacebookAuthProvider(),
};

export default withFirebaseAuth({
    providers,
    firebaseAppAuth,
})(Login);
