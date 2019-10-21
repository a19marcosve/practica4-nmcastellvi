import { Component, OnInit } from '@angular/core';
import { environment } from '../../../../environments/environment';
import { Project } from '../../models/Project';

@Component({
  selector: 'app-new-project',
  templateUrl: './new-project.component.html',
  styleUrls: ['./new-project.component.css']
})
export class NewProjectComponent implements OnInit {
  public projects: Project[];
  public project: Project;

  constructor() {}

  ngOnInit() {
    this.projects = Object.assign([], environment.projects);
    this.project = {
      id: this.projects.length + 1,
      name: ''
    };
  }

  public saveProject() {
    this.projects.push({ ...this.project });
  }
}
