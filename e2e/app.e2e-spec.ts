import { ApcliPage } from './app.po';

describe('apcli App', function() {
  let page: ApcliPage;

  beforeEach(() => {
    page = new ApcliPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
