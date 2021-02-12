import { Component, OnInit } from '@angular/core';
import { VData } from './vaccineInterface';
import vaccData from '../assets/vaccineData.json'


@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {

   vaccine: VData[] = vaccData.vaccineData;
   ngOnInit(){
     console.log(this.vaccine);
   }
}

