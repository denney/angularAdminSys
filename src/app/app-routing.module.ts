import { NgModule } from '@angular/core';

import {LoginComponent} from './login/login.component';
import {RouterModule} from '@angular/router';
import {SelectivePreloadingStrategy} from './service/selective-preloading-strategy';
import {AuthGuardService} from './service/authGuardService/auth-guard.service';
export const appRoutes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'workspace',
    loadChildren: './workspace/workspace.module#WorkspaceModule', canLoad: [AuthGuardService]
  },
  {
    path: '**', // fallback router must in the last
    component: LoginComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes,
      {preloadingStrategy: SelectivePreloadingStrategy})
  ],
  exports: [
    RouterModule
  ],
  providers: [

    SelectivePreloadingStrategy
  ]
})
export class AppRoutingModule { }
