import { AppPage } from './app.po';

describe('anacrolet App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getMaterialCardText()).toContain('One framework.');
  });
});
