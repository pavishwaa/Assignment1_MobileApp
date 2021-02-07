import { Component } from '@angular/core';
import {Router, NavigationExtras} from '@angular/router'
@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  constructor() {}
 canadaData = {
    today: '3,301', totalCases: '801,057', active: '45,711',
    recovered: '734,644', deaths: '93', totalDeaths: '20,701',
    test: '122,105', totalTests: '22,167,779', positive: '3.8%',
    testPerMillion: '583,230'
 };



}
