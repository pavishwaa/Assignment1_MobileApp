import { Component, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  // vaccine: any = [];

  constructor(private httpClient: HttpClient) {}

  // ngOnInit(){
  //   this.httpClient.get("src/assets/data/vaccineData.json")
  //   .subscribe(data => {
  //     console.log(data);
  //     this.vaccine = data;
  //   })
  // }

}

