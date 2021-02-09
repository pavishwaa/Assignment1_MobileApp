import { Component, OnInit, Input } from '@angular/core';
import { DatashareService } from 'src/app/datashare.service';

@Component({
  selector: 'app-page1',
  templateUrl: './page1.page.html',
  styleUrls: ['./page1.page.scss'],
})
export class Page1Page implements OnInit {
  message: any;

  @Input() c2Data: any;

  constructor(private sharedService: DatashareService) { }
  ngOnInit() 
  {this.sharedService.sharedMessage.subscribe(message => this.message= message);  }
  newMessage() 
  {this.sharedService.setMessage(this.message);  }


  ontarioData = {
    cases: '278,207', resolved: '256,903', deaths: '6,505',
    hospitalized: '926', icu: '335', onVentilator: '233' };
}
