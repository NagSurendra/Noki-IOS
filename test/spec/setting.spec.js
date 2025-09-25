import LoginPage from "/Users/nagasubarayudu/Desktop/IOS/test/screenObjectModel/login.page.js";
import HomePage from "/Users/nagasubarayudu/Desktop/IOS/test/screenObjectModel/home.page.js";
import {
  verify,
  verifyAndClick,
} from "/Users/nagasubarayudu/Desktop/IOS/helpers/helper.js";
import SettingsPage from "/Users/nagasubarayudu/Desktop/IOS/test/screenObjectModel/setting.page.js";
import adapterFactory from "@wdio/mocha-framework";
import allureReporter from "@wdio/allure-reporter";

describe("Setting screen elments and functinality verification -English", () => {
  beforeEach(() => {
    allureReporter.addEpic("NOKI IOS Automation");
    allureReporter.addFeature("Settings Screen all scenarios -En ");
    allureReporter.addOwner("Mobile Team");
  });
  it.skip("Verify Settings screen Profille Edit", async () => {
    await LoginPage.restartApp();
    await verifyAndClick(HomePage.settings);
    await SettingsPage.profileSettingScreen();
  });
  it("Verify Settings screen support_VerifiCation ", async () => {
    await LoginPage.restartApp();
    await verifyAndClick(HomePage.settings);
    await SettingsPage.support_VerifiCation();
  });

  it("Verify Settings screen launguage and general settings", async () => {
    await LoginPage.restartApp();
    await verifyAndClick(HomePage.settings);
    await SettingsPage.launguageAndGeneralSettings();
  });
});
