
import { Component, OnInit } from '@angular/core';
import { NotesService } from 'src/services/notes.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.page.html',
  styleUrls: ['./detail.page.scss'],
})
export class DetailPage implements OnInit {

  noteId: string = null;
  // note: {id:null, title:null, description:null};
  note: object = { };

  constructor(
    public notesService: NotesService,
    private route: ActivatedRoute,
  ) { }

  ngOnInit() {
    this.noteId = this.route.snapshot.paramMap.get('id');
    this.note = this.notesService.getNote(this.noteId);
  }
}
