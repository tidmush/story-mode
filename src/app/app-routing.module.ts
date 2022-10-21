import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProjectViewComponent } from './components/projectview/projectview.component';
import { StartComponent } from './components/start/start.component';
import { TestViewComponent } from './components/test/test.component';

const routes: Routes = [
  { path: 'test', component: TestViewComponent },
  { path: 'projects/:id', component: ProjectViewComponent },
  { path: '**', component: StartComponent }
]


@NgModule({
  imports: [RouterModule.forRoot(routes, { onSameUrlNavigation: 'reload' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
