import { AngularAdminSysPage } from './app.po';

describe('angular-admin-sys App', () => {
  let page: AngularAdminSysPage;

  beforeEach(() => {
    page = new AngularAdminSysPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
