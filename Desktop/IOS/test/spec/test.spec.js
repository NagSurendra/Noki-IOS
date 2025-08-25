import HomePage from "/Users/nagasubarayudu/Desktop/IOS/test/screenObjectModel/home.page.js";
import PatientsPage from "/Users/nagasubarayudu/Desktop/IOS/test/screenObjectModel/patients.page.js";
import EncounterPage from "/Users/nagasubarayudu/Desktop/IOS/test/screenObjectModel/encounter.page.js";
import SearchPatientPage from "/Users/nagasubarayudu/Desktop/IOS/test/screenObjectModel/searchPatient.page.js";
import RecordingPage from "/Users/nagasubarayudu/Desktop/IOS/test/screenObjectModel/recording.page.js";
// import AddPatitentPage from '/Users/nagasubarayudu/Desktop/IOS/test/screenObjectModel/addPatient.page.js';
import LoginPage from "/Users/nagasubarayudu/Desktop/IOS/test/screenObjectModel/login.page.js";
import {
  verifyAndClick,
  waitForElement,
} from "/Users/nagasubarayudu/Desktop/IOS/helpers/helper.js";
import SettingsPage from "/Users/nagasubarayudu/Desktop/IOS/test/screenObjectModel/setting.page.js";
import AddPatitentPage from "/Users/nagasubarayudu/Desktop/IOS/test/screenObjectModel/addPatient.page.js";

it("Login Conformation", async () => {
  await LoginPage.enterEmail("nag.subbarayudu@thinkhat.ai");
  await LoginPage.enterPassword("Welcome@123");
  await LoginPage.selectMultiTenant();
  await LoginPage.clickLogin();
});
it("home Screen Verifation", async () => {
  await verify(HomePage.homeScreenAnimation);
  await verifyAndClick(HomePage.patients);
  await verify(PatientsPage.patientSearch);
  await verifyAndClick(HomePage.encounter);
  await verify(EncounterPage.Encounter);
  await SettingsPage.SetthingsPageVerifiCation();
});
it("recording the audio for an existing patitent with previous add on data, also verifying CTS {CDSS Generation, Transcript Generation, SoapNote Generation}, Multiple Conversation, Quick Actions, Finalizing Enconter, ", async () => {
  await HomePage.startNewEncounterButton.click();
  await SearchPatientPage.patientSearch("Naga");
  await verifyAndClick(SearchPatientPage.proceedBTn);
  await verifyAndClick(RecordingPage.acknowledgeCheckBox);
  await verifyAndClick(RecordingPage.startConversationBtn);
  await RecordingPage.recordAudioForExicistingPatient();
  await RecordingPage.ctsConformation();
  await RecordingPage.finalizeEncounter();
  await HomePage.home.click();
});
it("crating a new Patient ", async () => {
  await verifyAndClick(HomePage.home);
  await verifyAndClick(HomePage.startNewEncounterButton);
  await verifyAndClick(SearchPatientPage.addPatient);
  await AddPatitentPage.addPatientWrn();
  await AddPatitentPage.createNewPatient();
});
it("Recording the audio", async () => {
  await driver.pause(10000);
  await RecordingPage.recordAudio();
});
it.only("This test case with complete Offlinr Recording all 10 scenarios ", async () => {
  await RecordingPage.recordAudioforOfflineMode();
  await driver.pause(120000);
  await waitForElement(RecordingPage.SoapNoteBtn);
  await verifyAndClick(RecordingPage.Transcript);
  const recordText = await RecordingPage.dataScanning(RecordingPage.cleanedTranscriptScroll);
  await RecordingPage.audioManager.TextComparison(recordText);
});
it("CDSS Transcript SoapNote generation Conformation ", async () => {
  await RecordingPage.ctsConformation();
});
it("finalize encounter, multiple conversations, quickactions", async () => {
  await RecordingPage.finalizeEncounter();
  await HomePage.home.click();
});
