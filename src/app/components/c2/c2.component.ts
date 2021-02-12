import { Component, OnInit, Input} from '@angular/core';
import {VData} from 'src/app/vaccineInterface'


@Component({
  selector: 'app-c2',
  templateUrl: './c2.component.html',
  styleUrls: ['./c2.component.scss'],
})
export class C2Component implements OnInit {

  @Input() dataVacc: any;
  @Input() c2Data: any;
  constructor() { }
 
  ngOnInit() {
    console.log(this.dataVacc)
  }
}
