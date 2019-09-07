import React, { Component } from 'react';
import './App.css';
import Login from './login';

class App extends Component {
  render(){
    return (
      <div className="PandaNotes">
      <header className="App-header">
      {<img id="pandaIcon" src="https://i.ibb.co/GPyFzHR/Frame-2.png"></img>}
      <div className="header">
      {<img id="flowersApp" src="https://i.ibb.co/54rJz16/Group-3.png"></img>}
      </div>
      <Login />
      </header>
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
