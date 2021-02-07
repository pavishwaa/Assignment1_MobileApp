import { Component, OnInit, Input, Output,EventEmitter} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DatashareService} from '../../datashare.service';


@Component({
  selector: 'app-c2',
  templateUrl: './c2.component.html',
  styleUrls: ['./c2.component.scss'],
})
export class C2Component implements OnInit {

  constructor(private route: ActivatedRoute, private sharedService: DatashareService) { }
 
   @Input() c2Data: any;
  

  ngOnInit() {
  this.c2Data = this.route.snapshot.params.parm;
  console.dir(this.route.snapshot);
    
  // this.sharedService.sharedMessage.subscribe(message => this.message= message); 

}
}
