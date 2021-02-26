import { Component, OnInit } from '@angular/core';

import { Result } from './result.model';

@Component({
  selector: 'app-results',
  templateUrl: './results.page.html',
  styleUrls: ['./results.page.scss'],
})
export class ResultsPage implements OnInit {

  results: Result[] = [
    {
      id: "1",
      title: "BUPA Medical",
      date: "02 FEB 2009",
      hdl: 6.1,
      ldl: 4.2,
      trig: 2.8,
      total: 5.0,
      unit: "mmol/L"
    },
    {
      id: "2",
      title: "Heaton",
      date: "06 JUN 2010",
      hdl: 6.0,
      ldl: 4.8,
      trig: 3.0,
      total: 5.2,
      unit: "mmol/L"
    }
  ]

  constructor() { }

  ngOnInit() {
  }

}
