import { AngularFireDatabase } from '@angular/fire/database';
import { Injectable } from '@angular/core';

@Injectable()
export class NotesService {
  constructor(public afDB: AngularFireDatabase){

  }
  notes = [
    { id: 1, title: 'Nota 1', description: 'Descripcion de Nota 1' },
    { id: 2, title: 'Nota 2', description: 'Descripcion de Nota 2' },
    { id: 3, title: 'Nota 3', description: 'Descripcion de Nota 3' }
  ];

  getNotes() {
    return this.notes;
    // return this.afDB.list('notas/');
  }

  getNote(id) {
    return this.notes.filter(note => note.id === parseInt(id, 10))[0] || { id: null, title: null, description: null };
    // return this.afDB.database.ref('notas/'+id);
  }

  createNote(note){
    // this.afDB.database.ref('notas/'+note.id).set(notes);
    this.notes.push(note);
  }

  // editNote(note){    ESTE NO ME SIRVE NO FUNCIONA 
  //   for(let i = 0; i < this.notes.length; i++){
  //     if(this.notes[i].id == note.id){
  //       this.notes[i] = note;
  //      }
  //    }
  // }

  deleteNote(note){
    let index = this.notes.indexOf(note);
    this.notes.splice(index, 1);
  }

   saveNote(note) {
    note.id = this.notes.length + 1;
    this.notes.push(note);
  }

  updateNote(noteSelected){
    let searchNote = this.notes.find((note, index) => { return note.id === noteSelected.id; });
    let id = this.notes.indexOf(searchNote);
    this.notes[id].title = noteSelected.title;
    this.notes[id].description = noteSelected.description;

    // this.afDB.database.ref('notas/'+id).set(noteSelected);
  }
}

