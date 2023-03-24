import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LogginComponent } from './loggin-component/loggin.component';
import { TestComponent } from './test/test.component';

const routes: Routes = [
  { path: "", redirectTo: 'loggin', pathMatch: 'full' },
  {path: 'loggin',component: LogginComponent},
  {path: 'test',component: TestComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
