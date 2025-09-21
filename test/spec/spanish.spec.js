import SpanishLanguage from '/Users/nagasubarayudu/Desktop/IOS/test/screenObjectModel/spanishLanguage.js';
import {  verify } from '/Users/nagasubarayudu/Desktop/IOS/helpers/helper.js';
import LoginPage from '../screenObjectModel/login.page.js';

describe('Spanish language UI elements verification', () => {
    it.only('TC027 Verify login button is properly styled and aligned', async () => {
        await SpanishLanguage.emailField.setValue('na.subbarayuu@thinkhat.ai')
        await SpanishLanguage.Done.click()
        await LoginPage.restartApp()
    });

    it('TC28 Show an error when password is not provided', async () => {
        await SpanishLanguage.enterEmail('test@example.com');
        await SpanishLanguage.clickLogin();
        await verify(SpanishLanguage.errorMessage);
        await LoginPage.restartApp()
    });

    it('TC29 Show an error when incorrect password is entered', async () => {
        await SpanishLanguage.enterEmail('test@example.com');
        await SpanishLanguage.enterPassword('wrongpassword');
        await SpanishLanguage.clickLogin();
        await driver.pause(5000);
        await verify(SpanishLanguage.WrongPassword);
        await LoginPage.restartApp()
    });

    it('TC30 Show an error when email is not provided', async () => {
        await SpanishLanguage.enterPassword('password');
        await SpanishLanguage.clickLogin();
        await driver.pause(5000);
        await verify(SpanishLanguage.emailError);
        await LoginPage.restartApp()
    });

    it('TC31 Show errors when both email and password are not provided', async () => {
        await SpanishLanguage.clickLogin();
        await driver.pause(5000);
        await verify(SpanishLanguage.emailError);
        await verify(SpanishLanguage.errorMessage);
        await LoginPage.restartApp()
    });

    it('TC32 Show an error for incorrect email format', async () => {
        await SpanishLanguage.enterEmail('invalid-email');
        await SpanishLanguage.enterPassword('password');
        await SpanishLanguage.clickLogin();
        await driver.pause(5000);
        await verify(SpanishLanguage.invalidEmailError);
        await LoginPage.restartApp()
    });

    it('TC33 Show an error when email is not registered', async () => {
        await SpanishLanguage.enterEmail('unregistered@example.com');
        await SpanishLanguage.enterPassword('password');
        await SpanishLanguage.clickLogin();
        await driver.pause(5000);
        await verify(SpanishLanguage.emailNotRegisteredError);
        await LoginPage.restartApp()
    });

    it('TC34 Verify login process completes ', async () => {
        await SpanishLanguage.enterEmail('valid@example.com');
        await SpanishLanguage.enterPassword('validpassword');
        await SpanishLanguage.clickLogin();
        await verify(SpanishLanguage.homescreenAnimation, 15000);
        await LoginPage.restartApp()
    });

})