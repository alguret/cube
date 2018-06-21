import { AppRoutingModule } from './app-routing.module';

describe('AppRoutingModule', () => {
  let appRountigModule: AppRoutingModule;

  beforeEach(() => {
    appRountigModule = new AppRoutingModule();
  });

  it('should create an instance', () => {
    expect(appRountigModule).toBeTruthy();
  });
});
