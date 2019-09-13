import React, { Component } from 'react';
import withFirebaseAuth from 'react-with-firebase-auth';
import * as firebase from 'firebase/app';
import 'firebase/auth';
import firebaseConfig from './firebase';
import googleGif from './img/tenor.gif';
import facebookGif from './img/facebook.gif';



const firebaseApp = firebase.initializeApp(firebaseConfig);

class Login extends Component {
    render () {
        const { user, signOut, signInWithGoogle, signInWithFacebook } = this.props;
        return (
            <div className="loginContainer">
                {
                    user 
                    ? <p>¡Bienvenid@ , {user.displayName}</p>
                    : <p>{<img id="neko" src="https://media.giphy.com/media/VFBcv93uvEbh99m4Xg/giphy.gif"></img>}</p>
                    
                }
                {
                    user 
                    ? <button className="google" onClick ={signOut}>Sign Out</button> 
                    : <button className="google" onClick={signInWithGoogle}><img class="googleGif" src={googleGif}/>oogle</button>
                }
                {/* {
                    user 
                    ? <button onClick ={signOut}>Sign Out</button> 
                    : <button className="facebook" onClick={signInWithFacebook}><img class="facebook" src={facebookGif}/> Entra con Facebook</button>
                } */}

            </div>
        );
    }
}

const firebaseAppAuth = firebaseApp.auth();
const providers = {
    googleProvider: new firebase.auth.GoogleAuthProvider(),
    facebookProvider: new firebase.auth.FacebookAuthProvider(),
};

export default withFirebaseAuth({
    providers,
    firebaseAppAuth,
})(Login);
