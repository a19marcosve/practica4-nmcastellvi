import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { environment } from '../../../../environments/environment.prod';
import { Project } from '../../models/Project';

@Component({
  selector: 'app-viewer-project',
  templateUrl: './viewer-project.component.html',
  styleUrls: ['./viewer-project.component.css']
})
export class ViewerProjectComponent implements OnInit {
  public projects: Project[];
  public paramId: number;
  public returnedProjects: Project[];
  public project: Project;

  constructor(activateRoute: ActivatedRoute) {
    this.paramId = activateRoute.snapshot.params['id'];
  }

  ngOnInit() {
    this.projects = environment.projects;
    this.project = {
      id: 0,
      name: ''
    };

    console.log(this.projects);

    this.returnedProjects = this.projects.filter(p => p.id == this.paramId);
    this.project = this.returnedProjects[0];

    console.log(this.returnedProjects);
  }
}
