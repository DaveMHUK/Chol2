import { Injectable } from '@angular/core';

import { Testresult } from './testresult.model';

@Injectable({
  providedIn: 'root'
})
export class TestresultsService {

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

  getAllTestresults() {
    return [...this.testresults];
  }

  getTestresult(testresultId: string) {
    return {
      ...this.testresults.find(testresult => {
        return testresult.id === testresultId;
      })
    };
  }
}
