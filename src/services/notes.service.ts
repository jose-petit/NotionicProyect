import { Injectable } from '@angular/core';

@Injectable()
export class NotesService {
  notes = [
    { id: 1, title: 'Nota 1', description: 'Descripcion de Nota 1' },
    { id: 2, title: 'Nota 2', description: 'Descripcion de Nota 2' },
    { id: 3, title: 'Nota 3', description: 'Descripcion de Nota 3' }
  ];

  getNotes() {
    return this.notes;
  }

  getNote(id) {
    return this.notes.filter(note => note.id === parseInt(id, 10))[0] || { id: null, title: null, description: null };
  }

  createNote(note){
    this.notes.push(note);
  }

  editNote(note){
    for(let i = 0; i < this.notes.length; i++){
      if(this.notes[i].id == note.id){
        this.notes[i] = note;
       }
     }
  }

  deleteNote(note){
    let index = this.notes.indexOf(note);
    this.notes.splice(index, 1);
  }

}

