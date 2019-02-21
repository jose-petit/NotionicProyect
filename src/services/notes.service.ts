import { AngularFireDatabase } from '@angular/fire/database';
import { Injectable } from '@angular/core';

@Injectable()
export class NotesService {
  private notes = [
    { id: 1, title: 'Nota 1', description: 'Descripcion de Nota 1', gradeId: null },
    { id: 2, title: 'Nota 2', description: 'Descripcion de Nota 2', gradeId: null },
    { id: 3, title: 'Nota 3', description: 'Descripcion de Nota 3', gradeId: null }
  ];

  constructor(
    public afDB: AngularFireDatabase
  ) {}

  getNotes() {
    return [...this.notes];
    // return this.afDB.list('notas/');
  }

  getNote(id) {
    return this.notes.filter((note: any) => note.id === parseInt(id, 10))[0] || { id: null, title: null, description: null };
    // return this.afDB.database.ref('notas/'+id);
  }

  createNote(note) {
    // this.afDB.database.ref('notas/'+note.id).set(notes);
    this.notes.push(note);
    console.log('Nota Creada con Exito!');
    console.log(note);
  }

  deleteNote(note) {
    const index = this.notes.indexOf(note);
    this.notes.splice(index, 1);
  }

  saveNote(note) {
    note.id = this.notes.length + 1;
    this.notes.push(note);
  }

  updateNote(noteSelected) {
    const searchNote = this.notes.find((note: any, index) => note.id === noteSelected.id);
    console.log(`Search note: ${JSON.stringify(searchNote)}`);
    const id = this.notes.indexOf(searchNote);
    console.log(`ID: ${id}`);
    // this.notes[id].title = noteSelected.title;
    // this.notes[id].description = noteSelected.description;
    console.log('Nota Actualizada con Exito!');
    console.log(this.notes[id]);
    // this.afDB.database.ref('notas/'+id).set(noteSelected);
  }
}

