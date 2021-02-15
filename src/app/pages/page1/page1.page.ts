import { Component, OnInit, Input } from '@angular/core';
import { DatashareService } from 'src/app/datashare.service';
import { VaccineDataLogicService } from 'src/app/services/vaccine-data-logic.service';
import { Tab2Page } from 'src/app/tab2/tab2.page';

import { VData } from 'src/app/vaccineInterface';
import vaccData from 'src/assets/vaccineData.json';

@Component({
  selector: 'app-page1',
  templateUrl: './page1.page.html',
  styleUrls: ['./page1.page.scss'],
})
export class Page1Page {
  message: any;
  index = Tab2Page.indexValue;
  ontarioData = {
    cases: '278,207', resolved: '256,903', deaths: '6,505',
    hospitalized: '926', icu: '335', onVentilator: '233' };
  
  @Input() c2Data: any;
  @Input() dataVacc: any;
   
  vaccine: VData[] = vaccData.vaccineData;
    
  myVaccineData = vaccData.vaccineData.indexOf(this.index);
    
  
  
  constructor(private sharedService: DatashareService) { }
  ngOnInit() 
  {
      this.sharedService.sharedMessage.subscribe(message => this.message= message); 
      console.log( Tab2Page.indexValue);
  }
  newMessage() 
  {this.sharedService.setMessage(this.message);  }
  
}
