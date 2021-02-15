import { Component, OnInit } from '@angular/core';
import { DatashareService} from '../datashare.service';
import { Router} from '@angular/router';
import { VData } from 'src/app/vaccineInterface';
import vaccData from 'src/assets/vaccineData.json';


@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
  message: any;
  ontarioData = {
    cases: '278,207', resolved: '256,903', deaths: '6,505',
    hospitalized: '926', icu: '335', onVentilator: '233' };
 
    
   vaccine: VData[] = vaccData.vaccineData;
  static indexValue: any;
  
 
  constructor(private router: Router, private sharedService: DatashareService ) 
  {       }


  goPage1(index){
    this.router.navigate(['page1']).
    then(nav=> {console.log(nav);}, 
    err => {  console.log(err); });
    Tab2Page.indexValue = index;
    console.log(index);
   }


 ngOnInit() 
 {
    this.sharedService.sharedMessage.subscribe(message => this.message= message); 
    console.log(this.vaccine);
  }
 newMessage() 
 {this.sharedService.setMessage(this.message);  }

 
}

  

