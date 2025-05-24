import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// import { CustomPipeExample2Component } from './custom-pipe-example-2/custom-pipe-example-2.component';

const routes: Routes = [
  {
    path: 'ngif-example',
    loadChildren: () =>
      import('./ngif-example/ngif-example.module').then(
        (m) => m.NgifExampleModule
      ),
  },
  {
    path: 'ngfor-example',
    loadChildren: () =>
      import('./ngfor-example/ngfor-example.module').then(
        (m) => m.NgforExampleModule
      ),
  },
  {
    path: 'pipe-example',
    loadChildren: () =>
      import('./pipe-example/pipe-example.module').then(
        (m) => m.PipeExampleModule
      ),
  },
  {
    path: 'custom-pipe-example',
    loadChildren: () =>
      import('./custom-pipe-example/custom-pipe-example.module').then(
        (m) => m.CustomPipeExampleModule
      ),
  },
  {
    path: 'routing-example',
    loadChildren: () =>
      import('./routing-example/routing-example.module').then(
        (m) => m.RoutingExampleModule
      )
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
