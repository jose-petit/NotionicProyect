import { NotesService } from './../../services/notes.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  notes = [];
constructor(public notesService : NotesService) {
    this.notes = notesService.getNotes();
  }
}
