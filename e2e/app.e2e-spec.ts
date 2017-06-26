import { OCMSRemake1Page } from './app.po';

describe('ocmsremake1 App', () => {
  let page: OCMSRemake1Page;

  beforeEach(() => {
    page = new OCMSRemake1Page();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
