import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {

/* tslint:disable:no-inferrable-types */

allowNewServer: boolean = false;
serverCreationStatus: string = 'There was no new server yet';
serverCreated: boolean = false;
newServerName: string = 'name-placeholder';
servers = ['TestServer', 'TestServer2', 'TestServer3'];

  constructor() {
    setTimeout(() => {
      this.allowNewServer = true;
    }, 2000);
  }

  ngOnInit() {
  }





  onAddNewServer() {
    this.serverCreationStatus = 'New server has been created';
    this.serverCreated = true;
    this.servers.push(this.newServerName);
  }



  onUpdateServerName($event) {
    this.newServerName = $event.target.value;
  }



}
