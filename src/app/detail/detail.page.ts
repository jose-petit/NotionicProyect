import { Component, OnInit } from '@angular/core';
import { NotesService } from 'src/services/notes.service';
import { ActivatedRoute } from '@angular/router';
import { DatePicker } from '@ionic-native/date-picker/ngx';
import { Platform } from '@ionic/angular';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.page.html',
  styleUrls: ['./detail.page.scss'],
})
export class DetailPage implements OnInit {

  noteId: string = null;
  note: object = { };
  isAndroid = false;

  constructor(
    public notesService: NotesService,
    private route: ActivatedRoute,
    private datePicker: DatePicker,
    private platform: Platform,
  ) { }

  ngOnInit() {
    this.noteId = this.route.snapshot.paramMap.get('id');
    this.note = this.notesService.getNote(this.noteId);
    this.isAndroid = this.platform.is('cordova');
  }

  openDatePicker() {
    this.datePicker.show({
      date: new Date(),
      mode: 'date',
      androidTheme: this.datePicker.ANDROID_THEMES.THEME_HOLO_DARK
    }).then(
      date => console.log('Got date: ', date),
      err => console.log('Error occurred while getting date: ', err)
    );
  }
}
