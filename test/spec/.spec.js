// import LoginPage from '/Users/nagasubarayudu/Desktop/IOS/test/screenObjectModel/login.page.js';
 import { verify, verifyAndClick } from '/Users/nagasubarayudu/Desktop/IOS/helpers/helper.js';
//  it('Verify  message when the no password for multitenent{TC08}', async() => {
//         await LoginPage.enterEmail('bheema.Badri@thinkhat.ai')
//         await LoginPage.enterPassword('')
//         await LoginPage.selectMultiTenant();
//         await LoginPage.clickLogin();
//         await verify(LoginPage.errorMessage)
//         await LoginPage.restartApp() 
//     });
//     it('Verify  message for incorrect Password is multitenent{TC08}', async() => {
//         await LoginPage.enterEmail('bheema.Badri@thinkhat.ai')
//         await LoginPage.enterPassword('Abcd12343')
//         await LoginPage.selectMultiTenant();
//         await LoginPage.clickLogin();
//         await verify(LoginPage.WrongPassword);
//         await LoginPage.restartApp()

//     });
//     it('Verify  message for not selecting the dropdrown is multitenent{TC08}', async() => {
//         await LoginPage.enterEmail('bheema.Badri@thinkhat.ai')
//         await LoginPage.enterPassword('Abcd1234')
//         await LoginPage.clickLogin();
//         await verify(LoginPage.multiTenantError);
//         await LoginPage.restartApp()
//     });
  
//     it('Verify  message when the email is multitenent{TC08}', async() => {
//         await LoginPage.enterEmail('bheema.Badri@thinkhat.ai')
//         await LoginPage.enterPassword('Abcd1234')
//         await LoginPage.selectMultiTenant();
//         await LoginPage.clickLogin();
//         await LoginPage.restartApp()
//     });


   describe('Draft Transcript Test', () => {

    // locators
    const firstDraft = () => $('(//XCUIElementTypeStaticText[@name="Draft Transcript"])[1]');
    const draft = () => $('//XCUIElementTypeStaticText[@name="Draft Transcript"]');

    it('v', async () => {
        // try {
            if (await firstDraft().isDisplayed()) {
                await verifyAndClick(firstDraft());
            } else if (await draft().isDisplayed()) {
                await verifyAndClick(draft());
            }
            else{
            console.log('Draft Transcript clicked');
        }
        // } catch (error) {
        //     console.error('Error clicking Draft Transcript:', error);
        // }
    });

});
