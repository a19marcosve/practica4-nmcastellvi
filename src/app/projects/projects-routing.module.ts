import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NewProjectComponent } from './projects/new-project/new-project.component';
import { ProjectsComponent } from './projects/projects.component';
import { ViewerProjectComponent } from './projects/viewer-project/viewer-project.component';

const routes: Routes = [
  {
    path: '',
    component: ProjectsComponent,
    children: [
      {
        path: '',
        component: NewProjectComponent
      },
      {
        path: 'viewer-project/:id',
        component: ViewerProjectComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProjectsRoutingModule {}
