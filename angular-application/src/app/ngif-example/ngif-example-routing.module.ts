import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NgifExampleComponent } from './ngif-example.component';

const routes: Routes = [{ path: '', component: NgifExampleComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NgifExampleRoutingModule { }
