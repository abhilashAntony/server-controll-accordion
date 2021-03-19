import { Component, Input, OnInit } from '@angular/core';
import { ConfigService } from '../../../config.service';

@Component({
  selector: 'app-dashboard-subcontent',
  templateUrl: './dashboard-subcontent.component.html',
  styleUrls: ['./dashboard-subcontent.component.css']
})
export class DashboardSubcontentComponent implements OnInit {
  @Input() mainStack;
  constructor(private configService: ConfigService) { }

  ngOnInit(): void {
  }

  // Controls the functionality of the start button
  updateStartButton(server): void {
    if (server.startButton === 'enabled') {
      server.startButton = 'disabled';
      server.stopButton = 'enabled';
      const returnData = (this.configService.postConfig({action: 'start', id: server.id})
      .subscribe((response: any) => {
        console.log(response);
      }));
    }
  }

  // Controls the functionality of the stop button
  updateStopButton(server): void {
    if (server.stopButton === 'enabled') {
      server.stopButton = 'disabled';
      server.startButton = 'enabled';
      const returnData = (this.configService.postConfig({action: 'stop', id: server.id})
      .subscribe((response: any) => {
        console.log(response);
      }));
    }
  }
}
