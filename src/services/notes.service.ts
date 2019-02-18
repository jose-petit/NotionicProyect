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
    const filteredNotes = this.notes.filter(note => note.id === parseInt(id, 10));
    if (filteredNotes.length > 0) {
      return filteredNotes[0];
    }
    return null;
  }
}
