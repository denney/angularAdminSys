import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './appdefult/app.component';
import {WorkspaceModule} from './workspace/workspace.module';
import {LoginComponent} from './login/login.component';
import {AppRoutingModule} from './app-routing.module';
import {AuthGuardService} from './service/authGuardService/auth-guard.service';
import {AuthService} from './service/authService/auth.service';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,

  ],
  imports: [
    BrowserModule,
    WorkspaceModule,
    AppRoutingModule,

  ],
  providers: [AuthGuardService,
    AuthService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
