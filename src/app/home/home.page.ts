import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  notes =  [
    {id:1, title:'Nota 1', description:'Descripcion de Nota 1'},
    {id:2, title:'Nota 2', description:'Descripcion de Nota 2'},
    {id:3, title:'Nota 3', description:'Descripcion de Nota 3'},
  ]
}
