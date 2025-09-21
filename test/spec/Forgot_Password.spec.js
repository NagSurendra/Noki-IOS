import LoginPage from '../../test/screenObjectModel/login.page.js';
import { verify, verifyAndClick } from '../../helpers/helper.js';
import allureReporter from "@wdio/allure-reporter";


describe('Forgot Password ',() => {

  beforeEach(() => {
    allureReporter.addEpic("NOKI IOS Automation");
    allureReporter.addFeature("Forgot Password all scenarios -Es");
    allureReporter.addOwner('Mobile Team');
  });
  it('Verify  message entering not rigistered email in forgot password screen', async() => {
  await LoginPage.restartApp()
  await verifyAndClick(LoginPage.forgotPassword)
  await LoginPage.enterForgotPasswordEmail('nag.subbarayudu@gmail.com')
  await verify(LoginPage.emailNotRegisteredError)
  await verifyAndClick(LoginPage.loginLink)
});
it('Verify  message entering inccorect email in forgot password screen', async() => {
  await LoginPage.restartApp()
  await verifyAndClick(LoginPage.forgotPassword)
  await LoginPage.enterForgotPasswordEmail('nag.subbarayudu@')
  await verify(LoginPage.invalidEmailError)
  await verifyAndClick(LoginPage.loginLink)
});

it('Verify  message not entering  email in forgot password screen', async() => {
  await LoginPage.restartApp()
  await verifyAndClick(LoginPage.forgotPassword)
  await LoginPage.enterForgotPasswordEmail(' ')
  await verify(LoginPage.emailError)
  await verifyAndClick(LoginPage.loginLink)
});
it('Verify success message for entering correct email in forgot password screen', async() => {
  await LoginPage.restartApp()
  await verifyAndClick(LoginPage.forgotPassword)
  await LoginPage.enterForgotPasswordEmail('nag.subbarayudu@thinkhat.ai')
  await verify(LoginPage.successMessageForResetLink)
  await verifyAndClick(LoginPage.continueToLogin)

});

})
