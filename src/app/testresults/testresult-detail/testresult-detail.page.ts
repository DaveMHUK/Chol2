import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TestresultsService } from '../testresults.service';
import { Testresult } from '../testresult.model';

@Component({
  selector: 'app-testresult-detail',
  templateUrl: './testresult-detail.page.html',
  styleUrls: ['./testresult-detail.page.scss'],
})
export class TestresultDetailPage implements OnInit {
  loadedTestresult: Testresult;

  constructor(
    private activatedRoute: ActivatedRoute,
    private testresultsService: TestresultsService
  ) { }

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe(paramMap => {
      if (!paramMap.has('testresultId')) {
        // redirect
        return;
      }
      const testresultId = paramMap.get('testresultId');
      this.loadedTestresult = this.testresultsService.getTestresult(testresultId);
    }
    );
  }

}
