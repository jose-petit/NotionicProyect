import { NotesService } from './../../services/notes.service';
import { Component, ViewChild } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  valor = '';
  notes = [];
  @ViewChild('myNav') nav: NavController;

  constructor(
    public navCtrl: NavController,
    public notesService: NotesService,
    private router: Router
  ) {
    this.notes = notesService.getNotes();
  }

  goToDetail(id) {
    this.router.navigateByUrl(`/detail/${id}`);
  }

  createNote() {
    this.router.navigateByUrl(`/detail/${0}`);
  }
}
