import { Component, OnInit } from '@angular/core';
import { AppService } from './app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  message = 'default message';

  constructor(private appService: AppService) {
    this.appService.getConfig()
    .subscribe((data: any) => this.message = data.message);
   }

}
