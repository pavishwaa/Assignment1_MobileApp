import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-c2',
  templateUrl: './c2.component.html',
  styleUrls: ['./c2.component.scss'],
})
export class C2Component implements OnInit {

  constructor() { }

  @Input() c2Data: any;
  
  ngOnInit() {}

}
