import { Component, OnInit } from '@angular/core';
import { NotesService } from 'src/services/notes.service';
import { ActivatedRoute } from '@angular/router';
import { DatePicker } from '@ionic-native/date-picker/ngx';
import { Platform, NavController } from '@ionic/angular';
import { AlertController } from '@ionic/angular';

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
    public alertCtrl: AlertController,
    public navCtrl: NavController,
  ) {
    
 

   }

  ngOnInit() {
    this.noteId = this.route.snapshot.paramMap.get('id');
    if(this.noteId != null){
      this.note = this.notesService.getNote(this.noteId);
    }
    this.isAndroid = this.platform.is('cordova');
  }

  addNote(){
    if(this.noteId != "0"){
      this.notesService.editNote(this.note)
      alert('Nota editada con exito!')
    }else{
    this.noteId = new Date().toString();
    this.notesService.createNote(this.note);
    alert('Nota Creada con Exito!')
    }
    this.navCtrl.pop();
  }

  deleteNote(){
    if(this.noteId!="0"){
      this.notesService.deleteNote(this.note);
      alert('Nota Eliminada con Exito!')
    }
    this.navCtrl.pop();
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
