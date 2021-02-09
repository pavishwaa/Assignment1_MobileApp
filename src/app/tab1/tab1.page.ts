import { Component, Input } from '@angular/core';
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

 ontarioData = {
  cases: '278,207', resolved: '256,903', deaths: '6,505',
  hospitalized: '926', icu: '335', onVentilator: '233' };

}
