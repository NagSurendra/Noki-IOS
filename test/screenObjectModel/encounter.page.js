import {
  performPointerAction,
  verify,
  verifyAndClick,
} from "/Users/nagasubarayudu/Desktop/IOS/helpers/helper.js";

class EncounterPage {
  get Encounter() {
    return $('//XCUIElementTypeStaticText[@name="Notes"]');
  }
  get searchNote() {
    return $("~Search Clinical Notes");
  }
  get nokiDashboard() {
    return $("~noki dashboard");
  }
  get startNewEncounter() {
    return $('//XCUIElementTypeButton[@name="Start New Encounter"]');
  }
  get clear() {
    return $("~Clear text");
  }
  get cancel() {
    return $('//XCUIElementTypeButton[@name="Cancel"]');
  }
  get legPain() {
    return $("~Leg Pain and Injury");
  }
  get firstDraft() {
    return $('//XCUIElementTypeTable/XCUIElementTypeCell[1]');
  }
  get Draft() {
    return $('//XCUIElementTypeStaticText[@name="Draft Transcript"]');
  }
  get deleteBtn() {
    return $('//XCUIElementTypeButton[@name="Delete"]');
  }
  get deleteCancel() {
    return $('(//XCUIElementTypeButton[@name="Cancel"])[2]');
  }
  get deleteConformation() {
    return $("~Delete");
  }
  get noEncounterFound() {
    return $("~No Clinical Notes Found");
  }
  get keyBoardSearch() {
    return $("~Search");
  }

  async noteSearch(randomName) {
    await this.searchNote.click();
    await this.searchNote.setValue(randomName);
    const noteElement = await $(
      `//XCUIElementTypeStaticText[@name="${randomName}"]`
    );
    await verifyAndClick(noteElement);
    console.log(`Note '${randomName}' found and displayed.`);
  }
  // async deleteEncounter(){
  //     await driver.pause(3000)
  //     await driver.action('pointer')
  //     .move({ duration: 0, x: 297, y: 281 })
  //     .down({ button: 0 })
  //     .move({ duration: 1000, x:150, y: 282 })
  //     .up({ button: 0 })
  //     .perform();

  //     await this.deleteBtn.click()
  //     await this.deleteCancel.click()
  //     await this.deleteBtn.click()
  //     await this.deleteConformation.click()
  // }
  async clickDraftTranscript() {
    await driver.pause(5000)
    await driver.action('pointer')
    .move({ duration: 0, x: 180, y: 260 })
    .down({ button: 0 })
    .pause(50)
    .up({ button: 0 })
    .perform();
  
  }
}
export default new EncounterPage();
