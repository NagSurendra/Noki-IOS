
import HomePage from '/Users/nagasubarayudu/Desktop/IOS/test/screenObjectModel/home.page.js';
// import PatientsPage from '/Users/nagasubarayudu/Desktop/IOS/test/screenObjectModel/patients.page.js';
// import EncounterPage from '/Users/nagasubarayudu/Desktop/IOS/test/screenObjectModel/encounter.page.js';
// import SearchPatientPage from '/Users/nagasubarayudu/Desktop/IOS/test/screenObjectModel/searchPatient.page.js';
//xximport RecordingPage from '/Users/nagasubarayudu/Desktop/IOS/test/screenObjectModel/recording.page.js';
// import AddPatitentPage from '/Users/nagasubarayudu/Desktop/IOS/test/screenObjectModel/addPatient.page.js';
import LoginPage from '/Users/nagasubarayudu/Desktop/IOS/test/screenObjectModel/login.page.js';
import { verifyAndClick, waitForElement,  } from '/Users/nagasubarayudu/Desktop/IOS/helpers/helper.js';
// import SettingsPage from '/Users/nagasubarayudu/Desktop/IOS/test/screenObjectModel/setting.page.js'
it.only("crating a nePattion and check the whole flow of CTS, Multiple Conversation, QuickActions, Finalizing Encounter, ", async () => {
  await LoginPage.enterEmail('nag.subbarayudu@thinkhat.ai')
  await LoginPage.enterPassword('Welcome@123')
  await LoginPage.clickLogin();
  await verify(HomePage.homeScreenAnimation)
  await LoginPage.restartApp();
  // await RecordingPage.startConversationBtn.click();
  // await RecordingPage.recordAudioforOfflineMode();
  // await driver.pause(120000);
  // await waitForElement(RecordingPage.SoapNoteBtn);
  // await verifyAndClick(RecordingPage.Transcript);   
  // const recordText = await RecordingPage.dataScanning(RecordingPage.cleanedTranscriptScroll);
  // await RecordingPage.audioManager.TextComparison(recordText);
});