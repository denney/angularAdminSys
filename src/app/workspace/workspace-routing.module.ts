import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {AuthGuardService} from '../service/authGuardService/auth-guard.service';
import {WorkspaceDefultComponent} from './workspace-defult/workspace-defult.component';



const workspaceRoutes: Routes = [
  {
    path: '',
    component: WorkspaceDefultComponent,
    canActivate: [AuthGuardService],
    children: [
      {
        path: '',
        canActivateChild: [AuthGuardService],
        children: [
          // { path: 'crises', component: ManageCrisesComponent },
          // { path: 'heroes', component: ManageHeroesComponent },
          // {path: 'userManage', component: UserManageComponent }
        ]
      }
    ]
  }
];
@NgModule({
  imports: [
    RouterModule.forChild(workspaceRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class WorkspaceRoutingModule { }
