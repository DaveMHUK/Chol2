import { Component, OnInit } from '@angular/core';

import { Testresult } from './testresult.model';

@Component({
  selector: 'app-testresults',
  templateUrl: './testresults.page.html',
  styleUrls: ['./testresults.page.scss'],
})
export class TestresultsPage implements OnInit {

  testresults: Testresult[] = [
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
