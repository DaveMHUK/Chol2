import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
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
    private testresultsService: TestresultsService,
    private router: Router,
    private alertCtrl: AlertController
  ) { }

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe(paramMap => {
      if (!paramMap.has('testresultId')) {
        // redirect
        this.router.navigate(['/testresults']);
        return;
      }
      const testresultId = paramMap.get('testresultId');
      this.loadedTestresult = this.testresultsService.getTestresult(testresultId);
    }
    );
  }

  onDeleteTestresult() {
    this.alertCtrl.create({
      header: 'Are you sure?',
      message: 'Do you really want to delete the test result?',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel'
        },
        {
          text: 'Delete',
          handler: () => {
            this.testresultsService.deleteTestresult(this.loadedTestresult.id);
            this.router.navigate(['/testresults']);
          }
        }
      ]
    }).then(alertEl => {
      alertEl.present();
    });
    this.testresultsService.deleteTestresult(this.loadedTestresult.id);
    this.router.navigate(['/testresults']);
  }

}
