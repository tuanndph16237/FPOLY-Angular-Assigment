
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { BlogComponent } from './blog/blog.component';
import { WorksComponent } from './works/works.component';
import { WorksDetailComponent } from './works-detail/works-detail.component';
const routes: Routes = [
  {
    path: 'home', component: HomeComponent
  },
  {
path: 'blog', component: BlogComponent
  },
  {
    path: 'works', component: WorksComponent
  },
  {
    path: 'worksDetail', component:WorksDetailComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
