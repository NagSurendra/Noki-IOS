import { verifyAndClick, verify } from "../../helpers/helper.js";
import HomePage from './home.page.js';
import RecordingPage from "./recording.page.js";
import { faker } from '@faker-js/faker';

class SettingsPage{
    get stettings() 
    { 
        return $('//XCUIElementTypeNavigationBar[@name="Settings"]'); 
    }
    get nokiDashBoard() 
    { 
        return $('~noki dashboard'); 
    }
    get startNewEncounter() 
    { 
        return $(''); 
    }
    get profileSettings() 
    { 
        return $('~profilesettings'); 
    }
    get help() 
    { 
        return $('~support'); 
    }
    get whatsapp() 
    { 
        return $('~whatsapp'); 
    } 
    get text() 
    { 
        return $('~text'); 
    } 
    get whatsappText() 
    { 
        return $('~text'); 
    } 
    get messagetext() 
    { 
        return $('~text'); 
    } 

    get email() 
    { 
        return $('~email'); 
    } 
    get () 
    { 
        return $(''); 
    } 
    get () 
    { 
        return $(''); 
    } 
    get launguage() 
    { 
        return $('~language'); 
    }
    get Idioma()
    {
        return $('~Idioma')
    }
    get generalSettings() 
    { 
        return $('~General Settings'); 
    }
    get generalSettingsShowUp() 
    { 
        return $('~chevron.down'); 
    }
    get generalSettingsClose() 
    { 
        return $('~chevron.up'); 
    }
    get logoutBtn() 
    { 
        return $('~logout'); 
    }
    get name() 
    { 
        return $('~nagasurendra Badri'); 
    }
    get back() 
    { 
        return $('~backArrow'); 
    }
    get profileEditback() 
    { 
        return $('~arrow.backward'); 
    }
    get ConsultWithUS() 
    { 
        return $('~Consult with us!'); 
    }
    get WriteUsNow() 
    { 
        return $('~Write to us now!'); 
    }
    get english() 
    { 
        return $('~Inglés'); 
    }
    get Inglish()
    {
        return $('(//XCUIElementTypeStaticText[@name="LanguageSettingTVC"])[1]'); 
    }
    get spanish() 
    { 
        return $('~Spanish'); 
    }
    get edit() 
    { 
        return $('~edit'); 
    }
    get firstName() 
    { 
        return $('//XCUIElementTypeTextField[@value="Naga"]'); 
    }
    get firstNameTextField() 
    { 
        return $('//XCUIElementTypeScrollView/XCUIElementTypeOther[1]/XCUIElementTypeTextField[1]'); 
    }
    get middleName() 
    { 
        return $('//XCUIElementTypeTextField[@value="Naga"]'); 
    }
    get middleNameTextField() 
    { 
        return $('//XCUIElementTypeScrollView/XCUIElementTypeOther[1]/XCUIElementTypeTextField[2]'); 
    }
    get lastName() 
    { 
        return $('//XCUIElementTypeTextField[@value="Subbarayudu"]'); 
    }
    get lastNameTextField() 
    { 
        return $('//XCUIElementTypeScrollView/XCUIElementTypeOther[1]/XCUIElementTypeTextField[3]'); 
    }
    // get doctoeremail() 
    // { 
    //     return $(''); 
    // }
    get save() 
    { 
        return $('~Save'); 
    }
    get cancel() 
    { 
        return $('~cancel'); 
    }
    get speciality() 
    { 
        return $('~speciality'); 
    }
    get loginMail() 
    { 
        return $('~nag.subbarayudu@thinkhat.ai'); 
    }

    get selectAllOn() 
    { 
        return $('selectallbuttonoff'); 
    }

    get selectAllOff() 
    { 
        return $('~selectallbuttonon'); 
    }
    get cdss() 
    { 
        return $('~cdsson'); 
    }
    get cdssDisabled(){
        return $('~cdssoff')
    }
    get diognosisJustificationDisabled(){
        return $('~diagnosisjustificationoff')
    }
    
    get diognosisJustification() 
    { 
        return $('~diagnosisjustificationon'); 
    }
    get logoutcancelationBtn() 
    { 
        return $('~no'); 
    } 
    get logoutBtn() 
    { 
        return $('~logout'); 
    } 
     get logoutConformationBtn() 
    { 
        return $('~yes'); 
    } 
    get logingoutText() 
    { 
        return $('~Are you sure you want to logout?'); 
    } 
    get sync() 
    { 
        return $('~syncing'); 
    } 
    get Done() 
    { 
        return $('~done'); 
    } 
    get cancel() 
    { 
        return $('~cancel'); 
    } 
    get ok() 
    { 
        return $('~OK'); 
    } 
    get hideKeyBoard() 
    { 
        return $('~Return'); 
    } 




async  profileSettingScreen()
{
    await verifyAndClick(this.edit)
    await verifyAndClick(this.firstName)
    await this.firstName.clearValue()
    const FirstName =await this.firstNameTextField.setValue('Naga')
    await verifyAndClick(this.middleName)
    const MiddleName=await this.middleNameTextField.setValue('Surendra')
    await verify(this.lastName)
    await this.lastName.clearValue()
    const LastName=await this.lastNameTextField.setValue('Subbarayudu')
    await this.hideKeyBoard.click()
    await driver.execute('mobile: swipe', { direction: 'up' });
    await verifyAndClick(this.save)
    await driver.pause(2000)
    await verifyAndClick(this.ok)
    await verifyAndClick(this.profileEditback)
    await verifyAndClick(this.edit)
    await verify(FirstName)
    await verify(MiddleName)
    await verify(LastName)
    await verifyAndClick(this.profileEditback)
}

// async profileSettingScreen() {
//     // Generate fake names
//     const fakeFirstName = faker.person.firstName(); // Generates a random first name
//     const fakeMiddleName = faker.person.middleName(); // Generates a random middle name
//     const fakeLastName = faker.person.lastName(); // Generates a random last name

//     // Perform the profile setting actions
//     await verifyAndClick(this.edit);
//     await verifyAndClick(this.firstName);
//     await this.firstName.clearValue();
//     await this.firstNameTextField.setValue(fakeFirstName); // Set fake first name
//     await verifyAndClick(this.middleName);
//     await this.middleNameTextField.setValue(fakeMiddleName); // Set fake middle name
//     await verify(this.lastName);
//     await this.lastName.clearValue();
//     await this.lastNameTextField.setValue(fakeLastName); // Set fake last name
//     await this.hideKeyBoard.click();
//     await driver.execute('mobile: swipe', { direction: 'up' });
//     await verifyAndClick(this.save);
//     await driver.pause(2000);
//     await verifyAndClick(this.profileEditback);
//     await verifyAndClick(this.edit);

//     // Verify the fake names
//     await verify(fakeFirstName);
//     await verify(fakeMiddleName);
//     await verify(fakeLastName);
//     await verifyAndClick(this.profileEditback)
// }
    async SetthingsPageVerifiCation(){
        await HomePage.settings.click();
        await verifyAndClick(this.profileSettings)
        await this.profileSettingScreen()
        await verifyAndClick(this.back)
        await verifyAndClick(this.help)
        await verifyAndClick(this.whatsapp);

    const whatsappBundleId = "net.whatsapp.WhatsApp"; // WhatsApp's bundle ID for iOS

    // Check if WhatsApp is in the foreground (state 4 indicates the app is active)
    const appState = await driver.execute('mobile: queryAppState', { bundleId: whatsappBundleId });
    if (appState !== 4) {
        throw new Error(`WhatsApp (${whatsappBundleId}) is not active. Current app state: ${appState}`);
    }

    console.log("WhatsApp is active");

    // Pause for 5 seconds
    await driver.pause(5000);
    // Switch back to the original app
    await driver.activateApp("com.thinkhat.devNoki");
    await HomePage.settings.click();
    await verifyAndClick(this.help)
    await verifyAndClick(this.email);
    // Verify Gmail is active
    const gmailBundleId = "com.google.Gmail";
    const gmailAppState = await driver.execute('mobile: queryAppState', { bundleId: gmailBundleId });
    if (gmailAppState !== 4) {
        throw new Error(`Gmail (${gmailBundleId}) is not active. Current app state: ${gmailAppState}`);
    }
    console.log("Gmail is active");
    await driver.pause(5000)
    await driver.activateApp("com.thinkhat.devNoki");
    // Open Settings and Help, then click text element to launch Messages
    await HomePage.settings.click();
    await verifyAndClick(this.help)
    await verifyAndClick(this.text);
    // Verify Messages is active
    const messagesBundleId = "com.apple.MobileSMS";
    const messagesAppState = await driver.execute('mobile: queryAppState', { bundleId: messagesBundleId });
    if (messagesAppState !== 4) {
        throw new Error(`Messages (${messagesBundleId}) is not active. Current app state: ${messagesAppState}`);
    }
    console.log("Messages is active")
    // Pause for 5 seconds and switch back
    await driver.pause(5000);
    await driver.activateApp("com.thinkhat.devNoki")

        await HomePage.settings.click()
        await verifyAndClick(this.launguage)
        await verifyAndClick(this.spanish)
        await verifyAndClick(this.Idioma)
        await verifyAndClick(this.english)
        await verifyAndClick(this.generalSettings)
        await verifyAndClick(this.diognosisJustification)
        await verifyAndClick(this.cdss)
        await verifyAndClick(this.cancel)
        await verifyAndClick(this.generalSettings)
        await verify(this.cdss)
        await verify(this.diognosisJustification)
        await this.cancel.click()        
        await verifyAndClick(this.logoutBtn)
        await verifyAndClick(this.logoutcancelationBtn)  
        await HomePage.home.click()
    }
}

export default new SettingsPage();
