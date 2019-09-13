import React, { Component } from 'react';
import './App.css';
import Login from './login';

class App extends Component {
  render(){
    return (
      <div className="PandaNotes">
      <header className="App-header">
        {<img className="pandaLogo" src="https://i.ibb.co/swrDGVp/ezgif-com-crop-2.gif"></img>}
        <h1>PandaNotes</h1>
        {/* {<img className="bambooLogo" src="https://thumbs.gfycat.com/BronzeClearcutAlaskanhusky-size_restricted.gif"></img>} */}
        {<img className="hojaLogo" src="https://loading.io/assets/img/animation/icon/showcase/green-energy.svg"></img>}
      </header>
      <div className="header">
        {/* {<img id="flowersApp" src="https://i.ibb.co/54rJz16/Group-3.png"></img>} */}
        <Login />
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

// class App extends Component {

//   constructor() {
//     super();
//     this.state = {
//      notes: [
//        {noteId: 1, noteContent: 'note 1'},
//        {noteId: 2, noteContent: 'note 2'},
//      ]
//     };
//   }

//   render() {
//     return (
//       <div className = "notesContainer">
//       <div className = "notesHeader">
//       <h1>Panda Notes</h1>
//        </div>
//        <div className ="notesBody">
//        {
//          this.state.notes.map(note => { 
//       return (
//       <ul></ul>
//        )
//        })
//       }
//        </div>

//        <div className ="notesFooter">

//        </div>

//       </div>
//     );
//   }
// }

export default App;
