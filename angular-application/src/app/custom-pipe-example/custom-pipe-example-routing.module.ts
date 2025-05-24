import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomPipeExampleComponent } from './custom-pipe-example.component';

const routes: Routes = [{ path: '', component: CustomPipeExampleComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CustomPipeExampleRoutingModule { }
