import { Component, OnInit } from '@angular/core';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  applicationName = environment.appName;
  numProjects = environment.projects.length;

  constructor() {}

  ngOnInit() {}
}
