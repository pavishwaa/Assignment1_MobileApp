import { Component, OnInit } from '@angular/core';
import { DatashareService} from '../datashare.service';



@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
  message: any;

 
  ontarioData = {
    cases: '278,207', resolved: '256,903', deaths: '6,505',
    hospitalized: '926', icu: '335', onVentilator: '233'
 };
  constructor( private sharedService: DatashareService) 
  { }
  ngOnInit() 
  {this.sharedService.sharedMessage.subscribe(message => this.message= message);  }
  newMessage() 
  {this.sharedService.setMessage(this.message);  }

}
