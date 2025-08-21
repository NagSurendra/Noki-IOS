import LoginPage from '/Users/nagasubarayudu/Desktop/IOS/test/screenObjectModel/login.page.js';
import HomePage from '/Users/nagasubarayudu/Desktop/IOS/test/screenObjectModel/home.page.js';
import { verify, verifyAndClick } from '/Users/nagasubarayudu/Desktop/IOS/helpers/helper.js';
import SettingPage from '/Users/nagasubarayudu/Desktop/IOS/test/screenObjectModel/setting.page.js';
import adapterFactory from '@wdio/mocha-framework';

describe('Setting screen elments and functinality check {TC19}',() => {

    it('Verify Settings screen elements and functinalities', async() => {
        await SettingPage.SetthingsPageVerifiCation()
    });
})