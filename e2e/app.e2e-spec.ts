import { AppCameraPage } from './app.po';

describe('app-camera App', () => {
  let page: AppCameraPage;

  beforeEach(() => {
    page = new AppCameraPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
