import LoginPage from '/Users/nagasubarayudu/Desktop/IOS/test/screenObjectModel/login.page.js';
import { verify } from '/Users/nagasubarayudu/Desktop/IOS/helpers/helper.js';
 it('Verify  message when the no password for multitenent{TC08}', async() => {
        await LoginPage.enterEmail('bheema.Badri@thinkhat.ai')
        await LoginPage.enterPassword('')
        await LoginPage.selectMultiTenant();
        await LoginPage.clickLogin();
        await verify(LoginPage.errorMessage)
        await LoginPage.restartApp() 
    });
    it('Verify  message for incorrect Password is multitenent{TC08}', async() => {
        await LoginPage.enterEmail('bheema.Badri@thinkhat.ai')
        await LoginPage.enterPassword('Abcd12343')
        await LoginPage.selectMultiTenant();
        await LoginPage.clickLogin();
        await verify(LoginPage.WrongPassword);
        await LoginPage.restartApp()

    });
    it('Verify  message for not selecting the dropdrown is multitenent{TC08}', async() => {
        await LoginPage.enterEmail('bheema.Badri@thinkhat.ai')
        await LoginPage.enterPassword('Abcd1234')
        await LoginPage.clickLogin();
        await verify(LoginPage.multiTenantError);
        await LoginPage.restartApp()
    });
  
    it('Verify  message when the email is multitenent{TC08}', async() => {
        await LoginPage.enterEmail('bheema.Badri@thinkhat.ai')
        await LoginPage.enterPassword('Abcd1234')
        await LoginPage.selectMultiTenant();
        await LoginPage.clickLogin();
        await LoginPage.restartApp()

    });

    