import React, { Component } from 'react';
import './Note.css';

class Notas extends Component  {

    constructor() {
      super();
      this.state = {
       notes: [
         {noteId: 1, noteContent: 'Hola'},
         {noteId: 2, noteContent: 'Huevito, Tortillas, Queso'},
         {noteId: 3, noteContent: 'note 3'},

       ]
      };
      this.addNote = this.addNote.bind(this);
    }

  handleRemove(id){
      alert('Remover note: ', id);

  }

  addNote() {
      this.props.addNote(this.textInput.value);
      this.textInput.value="";
   };


      render() {
      return (
        <div className="notesContainer">
        <div className="notesHeader">

         </div>
         <div className="notesBody">
         
        <ul>
  {
    this.state.notes.map(note => { 
  return (
      <div className="notasStyle" >
        <p>{note.noteContent}</p>
        
        <span 
        onClick={() => this.handleRemove(this.noteId) }
        >
                {<img className="trash" src="http://icons.iconarchive.com/icons/martz90/circle/512/trash-icon.png"></img>} 
                {<img className="edit" src="http://www.newdesignfile.com/postpic/2014/11/edit-button-icon_237266.png"></img>} 
                {<img className="save" src="https://cdn1.iconfinder.com/data/icons/main-ui-elements-with-colour-bg/512/ok_cool_save_okay-512.png"></img>}   
        </span>
        <input className="whriteNote"
        ref={input => this.textInput = input}
        placeholder="Whrite here your notes (:"
        type= "text"/>
        <button className="sendButton"
            onClick={this.addNote}>
            Send
        </button>
        </div>
        )
    })
}
       </ul>
         </div>
  
         <div className ="notesFooter">
         <addNote addNote={this.addNote}/>
  
         </div>

        </div>
      );
    }
  }

  export default Notas;