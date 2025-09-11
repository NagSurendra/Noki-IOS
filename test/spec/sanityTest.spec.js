import HomePage from "/Users/nagasubarayudu/Desktop/IOS/test/screenObjectModel/home.page.js";
import PatientsPage from "/Users/nagasubarayudu/Desktop/IOS/test/screenObjectModel/patients.page.js";
import EncounterPage from "/Users/nagasubarayudu/Desktop/IOS/test/screenObjectModel/encounter.page.js";
import SearchPatientPage from "/Users/nagasubarayudu/Desktop/IOS/test/screenObjectModel/searchPatient.page.js";
import RecordingPage from "/Users/nagasubarayudu/Desktop/IOS/test/screenObjectModel/recording.page.js";
// import AddPatitentPage from '/Users/nagasubarayudu/Desktop/IOS/test/screenObjectModel/addPatient.page.js';
import LoginPage from "/Users/nagasubarayudu/Desktop/IOS/test/screenObjectModel/login.page.js";
import {
  verify,
  verifyAndClick,
  waitForElement,
} from "/Users/nagasubarayudu/Desktop/IOS/helpers/helper.js";
import SettingsPage from "/Users/nagasubarayudu/Desktop/IOS/test/screenObjectModel/setting.page.js";
import AddPatitentPage from "/Users/nagasubarayudu/Desktop/IOS/test/screenObjectModel/addPatient.page.js";
import QuickActions from "/Users/nagasubarayudu/Desktop/IOS/test/screenObjectModel/quickActions.page.js";
import SpanishLanguage from "/Users/nagasubarayudu/Desktop/IOS/test/screenObjectModel/spanishLanguage.js";

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
  await verifyAndClick(HomePage.settings)
  await verifyAndClick(SettingsPage.home)

  // await SettingsPage.SetthingsPageVerifiCation();
});

it("Streamlined navigation and flow to initiate conversations with existing patients", async () => {
  await HomePage.startNewEncounterButton.click();
  await SearchPatientPage.patientSearch("Naga");
  await verifyAndClick(SearchPatientPage.proceedBTn);
});

it("Streamlined navigation and flow to record the conversation for Exiciting patient along with rejecting the previous encounter reference", async () => {
  await verifyAndClick(RecordingPage.acknowledgeCheckBox);
  await verifyAndClick(RecordingPage.startConversationBtn);
  await RecordingPage.recordAudioForExicistingPatient();
});

it("Streamlined navigation and flow to CDSS - Transcript - SOAP Note verification", async () => {
  await RecordingPage.ctsConformation();
});

it("Streamlined flow for running multiple conversation flow andf also creating a draft trancription and verifying of draft trancript completion before finalizing the encounter ", async () => 
  
{
  await RecordingPage.multipleConversationForExistingPatient();
});

it("Streamlined flow for the Quick Actions flow for generating/regenerating templates and sending emails for every update.", async () => {
  await QuickActions.quickAction();
});

it("verifying the Finalizing of the encounter with out any draft is ther in that particular transcript", async () => {
  await RecordingPage.finalizeEncounter();
  await LoginPage.restartApp();
});

it("crating a new Patient", async () => {
  //crating a new Patient
  await waitForElement(HomePage.startNewEncounterButton);
  await HomePage.startNewEncounterButton.click();
  await verifyAndClick(SearchPatientPage.addPatient);
  await AddPatitentPage.addPatientWrn();
  await AddPatitentPage.createNewPatient();
});

it("Streamlined navigation and flow to record the conversation for new patient ", async () => {
  await RecordingPage.recordAudio();
});

it("Streamlined navigation and flow to CDSS - Transcript - SOAP Note verification For newly created Patient", async () => {
  await RecordingPage.ctsConformation();
});

it("Streamlined flow for running multiple conversation flow andf also creating a draft trancription and verifying of draft trancript completion before finalizing the encounter", async () => {
  await RecordingPage.multipleConversation();
});

it("Streamlined flow for the Quick Actions for a newly created patient, flow for generating/regenerating templates and sending emails for every update, ", async () => {
  await QuickActions.quickAction();
});

it("verifying the Finalizing of the encounter of a newly created patient, without any draft is there in that particular transcript,  ", async () => {
  await RecordingPage.finalizeEncounter();
  await LoginPage.restartApp();
});

it("Streamlined flow for the verification of app switching to spanish launguage and creating a new patient ", async () => {
  await LoginPage.restartApp();
  await verifyAndClick(HomePage.settings);
  await verifyAndClick(SettingsPage.launguage);
  await verifyAndClick(SettingsPage.spanish);
  await verifyAndClick(SettingsPage.home);
  await SpanishLanguage.startNewEncounter.click();
  await SpanishLanguage.addPatient.click();
  await SpanishLanguage.createNewPatient();
});

it("Streamlined flow for verifing the conversation recording with a proper spanish audio", async () => {
  await SpanishLanguage.recordAudio();
});

it("Streamlined navigation and flow to CDSS - Transcript - SOAP Note verification whille applaunguage is in spanish", async () => {
  await SpanishLanguage.ctsConformation();
});

it("Streamlined flow for running multiple conversation flow andf also creating a draft trancription and verifying of draft trancript completion before finalizing the encounter while app launguage is in spanish", async () => {
  await SpanishLanguage.multipleConversation();
});

it("Streamlined flow for the Quick Actions for a new patient, flow for generating/regenerating templates and sending emails for every update app launguage is spanish", async () => {
  await SpanishLanguage.quickAction();
});

it("verifying the Finalizing of the encounter of a newly created patient, without any draft is there in that particular transcript, app launguage is in spanish", async () => {
  await SpanishLanguage.finalizeEncounter();
  await LoginPage.restartApp();
});

it("Streamlined flow for the verification of intiating the new encunter for already Exicting patient", async () => {
  await SpanishLanguage.startNewEncounter.click();
  await SpanishLanguage.patientSearch("Naga");
  await SpanishLanguage.startConversation();
});

it("Streamlined flow for the verification of recording conversation for already Existing Patient with proper spanish launguage rejecting the previous encounter reference", async () => {
  await SpanishLanguage.recordAudioAndContinueForPrevEncounter();
});

it("Streamlined navigation and flow to CDSS - Transcript - SOAP Note verification whille applaunguage is in spanish, for alreay Exicting patient", async () => {
  await SpanishLanguage.ctsConformation();
});

it("Streamlined flow for running multiple conversation flow andf also creating a draft trancription and verifying of draft trancript completion before finalizing the encounter while app launguage is in spanish, for already Exicting Patient", async () => {
  await SpanishLanguage.multipleConversationForExistingEnconter();
});

it("Streamlined flow for the Quick Actions for an Exicting patient, flow for generating/regenerating templates and sending emails for every update app launguage is spanish", async () => {
  await SpanishLanguage.quickAction();
});

it.only("verifying the Finalizing of the encounter of an Existing patient, without any draft is there in that particular transcript, app launguage is in spanish", async () => {
  await SpanishLanguage.finalizeEncounter();
  await LoginPage.restartApp();
});


// it.only("This test case with complete Offlinr Recording all 10 scenarios ", async () => {
//   await RecordingPage.startConversationBtn.click();
// await RecordingPage.recordAudioforOfflineMode();
//   await driver.pause(120000);
//   await waitForElement(RecordingPage.SoapNoteBtn);
//   await verifyAndClick(RecordingPage.Transcript);
//   const recordText = await RecordingPage.dataScanning(RecordingPage.cleanedTranscriptScroll);
//   await RecordingPage.audioManager.TextComparison(recordText);
// });
