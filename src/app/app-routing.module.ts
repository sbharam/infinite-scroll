import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RedditListContainerComponent } from './reddit-list-container/reddit-list-container.component';

const routes: Routes = [
  { path: '', redirectTo: '/reddit-list', pathMatch: 'full' },
  {
    path: 'reddit-list',
    component: RedditListContainerComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
