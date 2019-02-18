import { Injectable } from '@angular/core';

@Injectable()
export class NotesService {
  notes = [
    { id: 1, title: 'Nota Uno', description: 'Descripcion de Nota 1' },
    { id: 2, title: 'Nota Dos', description: 'Descripcion de Nota 2' },
    { id: 3, title: 'Nota 3', description: 'Descripcion de Nota 3' }
  ];
  public getNotes() {
    return this.notes;
  }
}
