import { verify, verifyAndClick, waitForElement } from "/Users/nagasubarayudu/Desktop/IOS/helpers/helper.js";
import RecordingPage from "./recording.page.js";

class QuickActions {
   //Quick Action Related 
    get quickActionButton() 
    { 
        return $('//XCUIElementTypeButton[@name="Quick Actions"]'); 
    }
    get quicktionsSearchField() 
    { 
        return $('//XCUIElementTypeTextField[@value="Search Quick Actions"]'); 
    }
    get regenerateSoapNote() 
    { 
        return $('~Regenerate SOAP Note'); 
    }


    get translateSoapNote() 
    { 
        return $('~Translate soap note to'); 
    }
    // get french() 
    // { 
    //     return $('~french'); 
    // }
    get spanish() 
    { 
        return $('~Spanish'); 
    }
    get english() 
    { 
        return $('~English'); 
    }





    get generateIcdAndCptCodes() 
    { 
        return $('~Generate ICD & CPT codes'); 
    }
    get generateCarePlan() 
    { 
        return $('~Generate Care Plan with Explanation'); 
    }
    get generateFeedBack() 
    { 
        return $('~Generate Feedback on Doctor Performance'); 
    }
    get generateReferalLetter() 
    { 
        return $('~Generate Referral Letter'); 
    }
    get icdAndCptCodes() 
    { 
        return $('~ICD & CPT codes'); 
    }
  

    get regenerateIcdAndCpt() 
    { 
        return $('~Regenerate ICD & CPT codes'); 
    }
    get regenerateCarePlan() 
    { 
        return $('~Regenerate Care Plan with Explanation'); 
    }
    get carePlan() 
    { 
        return $('~Care Plan with Explanation'); 
    }
    get regenerateFeedBack() 
    { 
        return $('~Regenerate Feedback on Doctor Performance')
    }
    get feedBack() 
    { 
        return $('~Feedback on Doctor Performance'); 
    }
    get regenerateReferalLetter() 
    { 
        return $('~Regenerate Referral Letter'); 
    }
    get referalLetter() 
    { 
        return $('~Referral Letter'); 
    }
   
    get Proceed() 
    { 
        return $('//XCUIElementTypeButton[@name="Proceed"]'); 
    }
    get cancel() 
    { 
        return $('//XCUIElementTypeButton[@name="Cancel"]'); 
    }

    get yes() 
    { 
        return $('//XCUIElementTypeButton[@name="Yes"]'); 
    }
    get no() 
    { 
        return $('//XCUIElementTypeButton[@name="No"]'); 
    }
    get ok() 
    { 
        return $('~OK'); 
    }
    // get PatientInformationInFrench() 
    // { 
    //     return $(''); 
    // }
    get PatientInformationInSpnish() 
    { 
        return $('//XCUIElementTypeStaticText[@name="main label" and @label="Información del Paciente"]'); 
    }
    get PatientInformation() 
    { 
        return $('//XCUIElementTypeStaticText[@name="main label" and @label="Patient Information"]'); 
    }
    get save() 
    { 
        return $('//XCUIElementTypeButton[@name="Save"]'); 
    }
    get cancel() 
    { 
        return $('//XCUIElementTypeStaticText[@name="Cancel"]'); 
    }
    get yes() 
    { 
        return $('//XCUIElementTypeStaticText[@name="Yes"]'); 
    }
    get no() 
    { 
        return $('//XCUIElementTypeStaticText[@name="No"]'); 
    }
    async quickAction(){
        await waitForElement(RecordingPage.SoapNoteBtn)
        await this.quickActionButton.click()
        await verify(this.quicktionsSearchField)
        await verifyAndClick(this.regenerateSoapNote)
        await verifyAndClick(this.yes)
        // await waitForElement(this.ok)
        // await verifyAndClick(this.ok)
        await waitForElement(RecordingPage.SoapNoteBtn)
        await RecordingPage.copyMailPrint()
        await RecordingPage.update.click()
        await RecordingPage.AddPatientInformation.click()
        await verify(RecordingPage.title)
        await verify(RecordingPage.Discription)
        await verifyAndClick(RecordingPage.add)
        // await verifyAndClick(RecordingPage.ok)
        await verifyAndClick(RecordingPage.clearPatientInfo)
        await verifyAndClick(RecordingPage.save)
        await verifyAndClick(RecordingPage.update)
        await verifyAndClick(RecordingPage.cancel)
        // await driver.execute('mobile: swipe', { direction: 'up' });
        // await driver.execute('mobile: swipe', { direction: 'down' });
        // await driver.execute('mobile: swipe', { direction: 'down' });

        // await this.quickActions.click()
        // await verifyAndClick(this.translateSoapNote)
        // await verify(this.french)
        // await verify(this.cancel)
        // await verifyAndClick(this.Proceed)
        // await waitForElement(this.PatientInformationInSpnish)
        // await RecordingPage.copyMailPrint()
        // await driver.execute('mobile: swipe', { direction: 'up' });


        await this.quickActionButton.click()
        await this.translateSoapNote.click()
        await this.spanish.click()
        await verifyAndClick(this.yes)
        // await waitForElement(this.ok)
        // await verifyAndClick(this.ok)
        await waitForElement(this.PatientInformationInSpnish)
        await RecordingPage.copyMailPrint()
        await RecordingPage.update.click()
        await RecordingPage.AddPatientInformationInSpanish.click()
        //await verify(RecordingPage.titleInSpanish)
        //await verify(RecordingPage.discriptionInSpanish)
        await verifyAndClick(RecordingPage.add)
        // await verifyAndClick(RecordingPage.ok)
        await verifyAndClick(RecordingPage.clearPatientInfo)
        await verifyAndClick(RecordingPage.save)
        await verifyAndClick(RecordingPage.update)
        // await verifyAndClick(RecordingPage.cancel)
        // await driver.execute('mobile: swipe', { direction: 'up' });
        //         await driver.execute('mobile: swipe', { direction: 'down' });
        //         await driver.execute('mobile: swipe', { direction: 'down' });
        await this.quickActionButton.click()
        await this.translateSoapNote.click()
        await this.english.click()
        await verifyAndClick(this.yes)
        // await waitForElement(this.ok)
        // await verifyAndClick(this.ok)
        await waitForElement(this.PatientInformation)
        // await driver.execute('mobile: swipe', { direction: 'up' });                  //icd and cpt codes
        //         await driver.execute('mobile: swipe', { direction: 'down' });
        // await driver.pause(4000)
        // await driver.execute('mobile: swipe', { direction: 'up' });
        //         await driver.execute('mobile: swipe', { direction: 'down' });
        // await verifyAndClick(this.quickActionButton)
        // await verifyAndClick(this.generateIcdAndCptCodes)
        // // await waitForElement(this.ok)
        // // await verifyAndClick(this.ok)
        // await waitForElement(this.icdAndCptCodes)
        // await RecordingPage.copyMailPrint()
        // await RecordingPage.update.click()
        // await this.save.click()
        await this.quickActionButton.click()
        await this.generateCarePlan.click()
        // await waitForElement(this.ok)
        // await verifyAndClick(this.ok)
        await waitForElement(this.carePlan)
        await RecordingPage.copyMailPrint()
        // await driver.execute('mobile: swipe', { direction: 'up' });
        // await driver.execute('mobile: swipe', { direction: 'down' });
        await this.quickActionButton.click()
        await this.generateFeedBack.click()
        // await waitForElement(this.ok)
        // await verifyAndClick(this.ok)
        await waitForElement(this.feedBack)
        await RecordingPage.copyMailPrint()
        await driver.execute('mobile: swipe', { direction: 'up' });
                await driver.execute('mobile: swipe', { direction: 'down' });
        await this.quickActionButton.click()
        await this.generateReferalLetter.click()
        // await waitForElement(this.ok)
        // await verifyAndClick(this.ok)
        await waitForElement(this.referalLetter)
        await RecordingPage.copyMailPrint()
        // await driver.execute('mobile: swipe', { direction: 'up' });               //regenerate icd and cpt
        //         await driver.execute('mobile: swipe', { direction: 'down' });
        // await verifyAndClick(this.quickActionButton)
        // await verifyAndClick(this.regenerateIcdAndCpt)
        // await verifyAndClick(this.yes)
        // // await waitForElement(this.ok)
        // // await verifyAndClick(this.ok)
        // await waitForElement(this.icdAndCptCodes)
        // await RecordingPage.copyMailPrint()
        // await driver.execute('mobile: swipe', { direction: 'up' });
        //         await driver.execute('mobile: swipe', { direction: 'down' });
        await verifyAndClick(this.quickActionButton)
        await verifyAndClick(this.regenerateCarePlan)
        await verifyAndClick(this.yes)
        // await waitForElement(this.ok)
        // await verifyAndClick(this.ok)
        await waitForElement(this.carePlan)
        await RecordingPage.copyMailPrint()
        await driver.execute('mobile: swipe', { direction: 'up' });
                await driver.execute('mobile: swipe', { direction: 'down' });
        await verifyAndClick(this.quickActionButton)
        await verifyAndClick(this.regenerateFeedBack)
        await verifyAndClick(this.yes)
        // await waitForElement(this.ok)
        // await verifyAndClick(this.ok)
        await waitForElement(this.feedBack)
        await RecordingPage.copyMailPrint()
        await driver.execute('mobile: swipe', { direction: 'up' });
        await driver.execute('mobile: swipe', { direction: 'down' });
        await this.quickActionButton.click()
        await verifyAndClick(this.regenerateReferalLetter)
        await verifyAndClick(this.yes)
        // await waitForElement(this.ok)
        // await verifyAndClick(this.ok)
        await waitForElement(this.referalLetter)
        await verifyAndClick(RecordingPage.copyBtn)
        await verifyAndClick(RecordingPage.mailBtn);
        // await verifyAndClick(RecordingPage.emailSentOk)
        await verifyAndClick(RecordingPage.printBtn)
        await verifyAndClick(RecordingPage.printPageCancel);
        await verifyAndClick(RecordingPage.printPageBackBtn);
        await driver.execute('mobile: swipe', { direction: 'up' });
        await driver.execute('mobile: swipe', { direction: 'down' });
        await this.quickActionButton.click()
        await verifyAndClick(this.regenerateSoapNote)
        await verifyAndClick(this.yes)
        // await waitForElement(this.ok)
        // await verifyAndClick(this.ok)
        
}

    
}
    export default new QuickActions();
