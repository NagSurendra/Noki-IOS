import LoginPage from '/Users/nagasubarayudu/Desktop/IOS/test/screenObjectModel/login.page.js';
import HomePage from '/Users/nagasubarayudu/Desktop/IOS/test/screenObjectModel/home.page.js';
import { verify, verifyAndClick } from '/Users/nagasubarayudu/Desktop/IOS/helpers/helper.js';

describe('login screen test cases {TC01 - TC09}',() => {
    

    // it('Verify accessibility of login screen elements {TC01}', async() => {
    //     await verify(LoginPage.emailField);
    //     await verify(LoginPage.passwordField);
    //     await LoginPage.multitenantDropDown()
    //     await verify(LoginPage.loginButton);
    //     await LoginPage.restartApp();
    // });

    it('Verify error message when password is not provided {TC03}', async() => {
        await LoginPage.restartApp()
        await LoginPage.enterEmail('nag.subbarayudu@thinkhat.ai')
        await LoginPage.selectMultiTenant();
        await LoginPage.clickLogin();
        await verify(LoginPage.errorMessage);
    });

    it('Verify error message when an incorrect password is entered {TC04}', async() => {
        await LoginPage.restartApp()
        await LoginPage.enterEmail('nag.subbarayudu@thinkhat.ai')
        await LoginPage.enterPassword('123456')
        await LoginPage.selectMultiTenant();
        await LoginPage.clickLogin();
        await verify(LoginPage.shortPassword);
    });

    it('Verify error message( when email is not provided {TC05}', async() => {
        await LoginPage.restartApp()
        await LoginPage.enterEmail(' ')
        await LoginPage.clickLogin();
        await verify(LoginPage.emailError);
    });

    // it('Verify error messages when both email and password are not provided {TC06}', async() => {
    //     await LoginPage.enterEmail(' ')
    //    await LoginPage.clickLogin();
    //     await verify(LoginPage.emailError);
    //     await LoginPage.restartApp();
    // });

    it('Verify error message when an incorrectly formatted email is entered {TC07}', async() => {
        await LoginPage.restartApp()
        await LoginPage.enterEmail('nag.subbarayudu')
        await LoginPage.clickLogin();
        await verify(LoginPage.invalidEmailError)
    });

    it('Verify error message when the email is not registered {TC08}', async() => {
        await LoginPage.restartApp()
        await LoginPage.enterEmail('vqejvcievciye@gmail.com')
        await verify(LoginPage.emailNotRegisteredError)
    });
  
    it('Verify  message when the password is wrong', async() => {
        await LoginPage.restartApp()
        await LoginPage.enterEmail('nag.subbarayudu@thinkhat.ai')
        await LoginPage.enterPassword('Welcome@124')
        await LoginPage.selectMultiTenant();
        await LoginPage.clickLogin();
        await verify(LoginPage.WrongPassword)
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
    it('Verify  message when the email is multitenent{TC08}', async() => {
        await LoginPage.restartApp()
        await LoginPage.enterEmail('nag.subbarayudu@thinkhat.ai')
        await LoginPage.enterPassword('Welcome@123')
        await LoginPage.selectMultiTenant();
        await LoginPage.clickLogin();
        await verify(LoginPage.homescreenAnimation)
    });
    
})