import { Component, OnInit } from '@angular/core';

import { Testresult } from './testresult.model';
import { TestresultsService } from './testresults.service';

@Component({
  selector: 'app-testresults',
  templateUrl: './testresults.page.html',
  styleUrls: ['./testresults.page.scss'],
})
export class TestresultsPage implements OnInit {
  testresults: Testresult[];

  constructor(private testresultsService: TestresultsService)  { }

  ngOnInit() {
    this.testresults = this.testresultsService.getAllTestresults();
  }

}
