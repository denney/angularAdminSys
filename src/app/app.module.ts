import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './appdefult/app.component';
import {WorkspaceModule} from './workspace/workspace.module';
import {LoginComponent} from './login/login.component';
import {AppRoutingModule} from './app-routing.module';
import {AuthGuardService} from './service/authGuardService/auth-guard.service';
import {AuthService} from './service/authService/auth.service';
import {AccordionModule, ButtonModule, InputTextModule, PanelMenuModule} from 'primeng/primeng';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,

  ],
  imports: [
    BrowserModule,
    WorkspaceModule,
    AppRoutingModule,
    AccordionModule,
    PanelMenuModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpModule,
    InputTextModule,
    ButtonModule

  ],
  providers: [AuthGuardService,
    AuthService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
