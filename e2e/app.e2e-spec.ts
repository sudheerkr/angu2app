import { Ang2fromScrachPage } from './app.po';

describe('ang2from-scrach App', function() {
  let page: Ang2fromScrachPage;

  beforeEach(() => {
    page = new Ang2fromScrachPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
