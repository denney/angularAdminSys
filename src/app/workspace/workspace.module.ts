import {NgModule} from '@angular/core';

import {WorkspaceDefultComponent} from './workspace-defult/workspace-defult.component';
import {WorkspaceRoutingModule} from './workspace-routing.module';
import { LeftNavComponent } from './left-nav/left-nav.component';
import { TopMenuComponent } from './top-menu/top-menu.component';
import { FooterInfoComponent } from './footer-info/footer-info.component';

@NgModule({
  imports: [WorkspaceRoutingModule
  ],
  declarations: [WorkspaceDefultComponent, LeftNavComponent, TopMenuComponent, FooterInfoComponent]
})
export class WorkspaceModule {
}
