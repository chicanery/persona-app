import { PersonaAppPage } from './app.po';

describe('persona-app App', function() {
  let page: PersonaAppPage;

  beforeEach(() => {
    page = new PersonaAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
