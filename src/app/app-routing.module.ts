import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { KataPostComponent } from './components/kata-post/kata-post.component';
import { MainComponent } from './pages/main/main.component';

const routes: Routes = [
  { path: "main", component: MainComponent },
  { path: "kata", component: KataPostComponent },
  { path: "**", redirectTo: 'main', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
