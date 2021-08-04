import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserCenterComponent } from './user-center.component';

const routes: Routes = [{
  path: '',
  component: UserCenterComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserCenterRoutingModule { }
