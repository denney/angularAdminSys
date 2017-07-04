import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkspaceDefultComponent } from './workspace-defult.component';

describe('WorkspaceDefultComponent', () => {
  let component: WorkspaceDefultComponent;
  let fixture: ComponentFixture<WorkspaceDefultComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WorkspaceDefultComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WorkspaceDefultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
