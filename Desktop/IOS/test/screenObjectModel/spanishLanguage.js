import { waitForElement,verifyAndClick,verify } from "/Users/nagasubarayudu/Desktop/IOS/helpers/helper.js";
class SpanishLanguage{
    get newUserREsgistrationText() { return $('~¿Nuevo usuario? Por favor, visita el sitio web de Noki para crear una nueva cuenta.'); }
    get emailField() { return $('//XCUIElementTypeTextField[@value="Correo electrónico*"]'); }
    get passwordField() { return $('//XCUIElementTypeSecureTextField[@value="Contraseña*"]'); }
    get loginButton() { return $('//XCUIElementTypeButton[@name="Iniciar sesión"]'); }
    get errorMessage() { return $('~Se requiere Contraseña'); }
    get WrongPassword() { return $('~La contraseña no es válida o el usuario no tiene contraseña.'); }
    get emailError() { return $('~Se requiere correo electrónico'); }
    get invalidEmailError() { return $('~Correo electrónico no válido'); }
    get emailNotRegisteredError() { return $('~No hay ninguna cuenta asociada con la dirección de correo electrónico'); }
    get homescreenAnimation() { return $('~homescreenanimation'); }

    // Helper methods for actions
    async enterEmail(email) {
        await expect(this.emailField).toBeDisplayed();
        const size = await this.emailField.getSize();
        expect(size.height).toBeGreaterThanOrEqual(34);
        await this.emailField.setValue(email);
    }

    async enterPassword(password) {
        await expect(this.passwordField).toBeDisplayed();
        const size = await this.passwordField.getSize();
        expect(size.height).toBeGreaterThanOrEqual(34);
        await this.passwordField.setValue(password);
    }

    async clickLogin() {
        await expect(this.loginButton).toBeDisplayed();
        const size = await this.loginButton.getSize();
        expect(size.width).toBeGreaterThanOrEqual(44);
        expect(size.height).toBeGreaterThanOrEqual(44);
        const isEnabled = await this.loginButton.isEnabled();
        expect(isEnabled).toBe(true);
        await this.loginButton.click();
    }
    async clearTextFields(){
        await this.emailField.clearValue();
        await this.passwordField.clearValue();
    }
    get homeScreenAnimation() {
        return $('//XCUIElementTypeImage[@name="homescreenanimation"]');
    }
    get welcomeThumbnail() {
        return $('//XCUIElementTypeImage[@name="WelcomeThumnail"]');
    }

    get nokiDashboardButton() {
        return $('//XCUIElementTypeButton[@name="noki dashboard"]');
    }
    get patients() {
        return $('~patients');
    }
    get encounter() {
        return $('~encounter');
    }
    get settings() {
        return $('~settings');
    }

    get startNewEncounter() {
        return $('//XCUIElementTypeStaticText[@name="Comenzar Nuevo Encuentro"]');
    }
    get nokiDashBoardStartNewEncounter() {
        return $('(//XCUIElementTypeButton[@name="Comenzar Nuevo Encuentro"])[2]');
    }
    get PatientsScreenTitle() {
        return $('//XCUIElementTypeStaticText[@name="Pacientes"]');
    }
    get PatientSearchTextField() {
        return $('~Buscar Pacientes');
    }
    get PatientScreenDashBoardAddPatientBtn() {
        return $('//XCUIElementTypeButton[@name="Agregar paciente"]');
    }
    get encounerScreenTitle() {
        return $('//XCUIElementTypeStaticText[@name="Notas"]');
    }
    get EncounterScreenSearchField() {
        return $('~Buscar Notas Clínicas');
    }
    get notesText() {
        return $('//XCUIElementTypeOther[@name="Notas Clínicas"]');
    }
    get DeleteBtn() {
        return $('//XCUIElementTypeStaticText[@name="Eliminar"]');
    }
    get settingPageprofile() {
        return $('//XCUIElementTypeStaticText[@name="Configuración de Perfil"]');
    }
    get doctorSpecification() {
        return $('~Odontología general');
    }
    get doctorPhoneNumber() {
        return $('~Número de teléfono no especificado');
    }
    get doctorEmail() {
        return $('~nag.subbarayudu@thinkhat.ai');
    }
    get doctorName() {
        return $('~nagasurendra Badri');
    } get BackArrow() {
        return $('~backArrow');
    }
    get support() {
        return $('~Soporte');
    }
    get talkToUs() {
        return $('~Háblanos');
    }
    get email() {
        return $('');
    }
    get emailConfigurationTxt() {
        return $('Configura los ajustes de tu correo electrónico para asegurarte de que puedes enviar correos electrónicos');
    }
    get emailConfigurationOk() {
        return $('~ok');
    }
    
    get launguage() {
        return $('~Idioma');
    }
    get english() {
        return $('(//XCUIElementTypeStaticText[@name="Inglés"])[2]');
    }
    get spanish() {
        return $('(//XCUIElementTypeStaticText[@name="Español"])[2]');
    }
    get generalSetting() {
        return $('~Configuración general');
    }
    get cdss() {
        return $('(//XCUIElementTypeSwitch[@name="Configuración general, CDSS, Justificación del Diagnóstico"])[1]');
    }
    get diagnosisJustification() {
        return $('(//XCUIElementTypeSwitch[@name="Configuración general, CDSS, Justificación del Diagnóstico"])[2]');
    }
    get logoutBtn() {
        return $('~Cerrar Sesión');
    }
    get logoutConformationTxt() {
        return $(~'¿Está seguro de que desea cerrar sesión?');
    }
    get logoutConformationBtn() {
        return $('//XCUIElementTypeButton[@name="Cerrar Sesión"]');
    }
    get logoutCancel() {
        return $('~Cancelar');
    }




    //patitents Page
    get patients() 
    { 
        return $('//XCUIElementTypeStaticText[@name="Patients"]'); 
    }
    get nokiDashboard() 
    { 
        return $('~noki dashboard'); 
    }
    get addPatient() 
    { 
        return $('//XCUIElementTypeButton[@name="Agregar paciente"]'); 
    }
    get clearText() 
    { 
        return $('~Clear text'); 
    }
    get cancel() 
    { 
        return $('//XCUIElementTypeStaticText[@name="Cancelar"]'); 
    }
    get noPatitentFound() 
    { 
        return $('//XCUIElementTypeTable[@name="No se encontraron paciente"]'); 
    }
    get goBack() 
    { 
        return $('~Left'); 
    }
    get startNewEncounter() 
    { 
        return $('//XCUIElementTypeButton[@name="Comenzar Nuevo Encuentro"]'); 
    } 




    //Enconter Screen 
    get Encounter() 
    { 
        return $('//XCUIElementTypeStaticText[@name="Notas"]'); 
    }
    get searchNote() 
    { 
        return $('~Buscar Notas Clínicas'); 
    }
    get legPain() 
    { 
        return $('~Leg Pain and Injury'); 
    }
    get draft() 
    { 
        return $('//XCUIElementTypeTable/XCUIElementTypeCell[1]'); 
    }
    get deleteBtn() 
    { 
        return $('//XCUIElementTypeButton[@name="Eliminar"]'); 
    }

    get deleteCancel() 
    { 
        return $('(//XCUIElementTypeButton[@name="Cancelar"])[2]'); 
    }

    get deleteConformation() 
    { 
        return $('~Eliminar'); 
    }
    get noEncounterFound() 
    { 
        return $('~No se encontraron notas clínicas'); 
    }



    // Search patitent
    get patient() {
        return $('~Seleccionar Paciente');
    }
    get searchPatientsField() {
        return $('//XCUIElementTypeTextField[@value="Buscar Pacientes"]');
    }
    get addPatient() {
        return $('//XCUIElementTypeButton[@name="Agregar paciente"]');
    }
    async patitentName(patitent) {
        return $(`//XCUIElementTypeStaticText[@name="${patitent}"]`);
    }
    get proceedBTn(){
        return $('//XCUIElementTypeButton[@name="Continuar"]');
    }
    get cancel() {
        return $('//XCUIElementTypeButton[@name="Cancelar"]');
    }
    get nokiDashboard() {
        return $('~noki dashboard');
    }
   

    //addPAtitent
    get addPatientTxt() {
        return $('(//XCUIElementTypeStaticText[@name="Agregar paciente"])[2]');
    }
    get patientName() {
        return $(`//XCUIElementTypeTextField[@value="* Nombre y apellido"]`);
    }
    get DOB() {
        return $('//XCUIElementTypeTextField[@value="* Fecha de nacimiento"]');
    }
    get  genderPickerTxtField() {
        return $('//XCUIElementTypeTextField[@value="* Género"]');
    }
    get dobPicker() {
        return $('(//XCUIElementTypeImage[@name="chevron.down"])[2]');
    }
    get yearPickerShow() {
        return $('~DatePicker.Show');
    }
    get previousMonth() {
        return $('~DatePicker.PreviousMonth');
    }
    get nextMonth() {
        return $('~DatePicker.NextMonth');
    }
    get  yearPickerHide() {
        return $('~DatePicker.Hide');
    }
   
    
    get monthPicker() {
        const currentMonth = new Date().toLocaleString('es-ES', { month: 'long' });
        const formattedMonth = currentMonth.charAt(0).toUpperCase() + currentMonth.slice(1);
        return $(`//XCUIElementTypePickerWheel[@value="${formattedMonth}"]`);
    }
    get  yearPicker() {
        return $('//XCUIElementTypePickerWheel[@value="2025"]');
    }
   
    get  ok() {
        return $('~OK');
    }
    get  genderPicker() {
        return $('~go down');
    }
    get male() {
        return $('~Masculino');
    }
    get female() {
        return $('~Femenino');
    }
    get other() {
        return $('~Otro');
    }
    get unknown() {
        return $('~Desconocido');
    }
    get addAndProceed() {
        return $('//XCUIElementTypeButton[@name="Agregar y Proceder"]');
    }
    get cancel() {
        return $('//XCUIElementTypeButton[@name="Cancelar"]');
    }
    get nameError() {
        return $('~Nombre y apellido son requeridos');
    } 
    get dateError() {
        return $('~La fecha de nacimiento es requerida');
    } 
    get genderError() {
        return $('~El género es requerido');
    }



   // Recording Screen 
   get back() 
   { 
       return $('~backArrow'); 
   }
   get Back() 
   { 
       return $('~Left'); 
   }
   get ContinueBtn()
   {
       return $('//XCUIElementTypeButton[@name="CONTINUAR"]')
   }
   get saveAsDraftBtn()
   {
       return $('//XCUIElementTypeButton[@name="GUARDAR COMO BORRADOR"]')
   }
   get discardBtn()
   {
       return $('//XCUIElementTypeButton[@name="DESCARTAR"]')
   }
   get templateSoapNote() 
   { 
       return $('//XCUIElementTypeTextField[@value="Nota SOAP"]]'); 
   }
   get LaunguageSelectior() 
   { 
       return $('//XCUIElementTypeTextField[@value="Español"]'); 
   }
   get LaunguageSelectText() 
   { 
       return $('//XCUIElementTypeStaticText[@name="Selecciona un idioma"]'); 
   }
   get doneBtn() 
   { 
       return $('~Hecho'); 
   }
   get EngLanOpt() 
   { 
       return $('~Inglés'); 
   }
   get SpanLanOpt() 
   { 
       return $('~Español'); 
   }
   get startConversationBtn() 
   { 
       return $('//XCUIElementTypeStaticText[@name="Iniciar Conversación"]'); 
   }
   get TxtConfm() 
   { 
       return $("~Por favor, asegúrese de tener el consentimiento verbal del paciente antes de usar el escriba ambiental de IA de Noki para la documentación clínica. Ver Consentimiento."); 
   }
   get pauseBtn() 
   { 
       return $('~Pause'); 
   }
   get patientCreatedOk() 
   { 
       return $('~OK'); 
   }
   get resumeRecording() 
   { 
       return $('//XCUIElementTypeButton[@name="Reanudar Grabación"]'); 
   }
   get resumeRecordingConformationYes() 
   { 
       return $('//XCUIElementTypeButton[@name="SÍ"]'); 
   }
   get resumeRecordingConformationText() 
   { 
     const date = new Date().toLocaleDateString('en-US', { month: '2-digit', day: '2-digit', year: 'numeric' });
     return $(`~Al reanudar, la conversación en curso será grabada y la transcripción borrador se actualizará bajo el encuentro con fecha ${date}. ¿Está seguro de que desea continuar?`); 
   }

    get resumeRecordingConformationNO() 
   { 
       return $('//XCUIElementTypeButton[@name="NO"]'); 
   }

   get stopBtn() 
   { 
       return $('~stopRecord'); 
   }
   get PlayBtn() 
   { 
       return $('~playBtnIcon'); 
   }
   get PrevEncounterRef() 
   { 
       return $("~¿Le gustaría usar la nota SOAP del encuentro anterior como contexto?"); 
   }
   get PrevEncounterRefNo() 
   { 
       return $('//XCUIElementTypeButton[@name="NO"]'); 
   }
   get PrevEncounterRefYes() 
   { 
       return $('//XCUIElementTypeButton[@name="SÍ"]'); 
   }
   get notEnoughTranscript() 
   { 
       return $('~No hay suficiente transcripción para generar notas clínicas.'); 
   }
   get notEnoughTranscript() 
   { 
       return $('//XCUIElementTypeButton[@name="OK"]');
   }
   get generatingSNTxt() 
   { 
       return $('~Generating SOAP note...'); 
   }
   get SoapNoteBtn() 
   { 
       return $('//XCUIElementTypeStaticText[@name="Nota SOAP"]'); 
   }
   get patientInformation() 
   { 
       return $('//XCUIElementTypeStaticText[@name="Patient Information"]'); 
   }
   get subjective() 
   { 
       return $('//XCUIElementTypeStaticText[@name="Subjective"]'); 
   }
   get objective() 
   { 
       return $('//XCUIElementTypeStaticText[@name="Objective"]'); 
   }
   get assessment() 
   { 
       return $('//XCUIElementTypeStaticText[@name="Assessment"]'); 
   }
   get plan() 
   { 
       return $('//XCUIElementTypeStaticText[@name="Plan"]'); 
   }
   get additinalInformation() 
   { 
       return $('//XCUIElementTypeStaticText[@name="Additional Information"]'); 
   }
   get name() 
   { 
       return $('//XCUIElementTypeTextField[@value="Name :"]'); 
   }
   get age() 
   { 
       return $('//XCUIElementTypeTextField[@value="Age :"]'); 
   }
   get gender() 
   { 
       return $('//XCUIElementTypeTextField[@value="Gender :"]'); 
   }
   get encounterDate() 
   { 
       return $('//XCUIElementTypeTextField[@value="Encounter Date :"]'); 
   }

   get chiefComplain() 
   { 
       return $('~Chief Complaint CC'); 
   }
   get historyofprsentIllness() 
   { 
       return $('~History of Present Illness HPI'); 
   }
   get pastMedicalHistory() 
   { 
       return $('~Past Medical History'); 
   }
   get socialHistory() 
   { 
       return $('~Social History'); 
   }
   get familyHistory() 
   { 
       return $('~Review of Systems ROS'); 
   }  
   get reviewofSystems() 
   { 
       return $('~Review of Systems ROS'); 
   }
   get vitalSigns() 
   { 
       return $('~Vital Signs'); 
   }
   get generallAppearance() 
   { 
       return $('~General Appearance'); 
   }
   get physicalApperence() 
   { 
       return $('~Physical Examination'); 
   }
   get Diognosis() 
   { 
       return $('(//XCUIElementTypeStaticText[@name="Diagnosis :"])[3]'); 
   }
   get clinicalImpression() 
   { 
       return $('~Treatment Plan'); 
   }
   get treatmentPlan() 
   { 
       return $('~Treatment Plan'); 
   }
   get patitentEducation() 
   { 
       return $('~Patient Education'); 
   }
   get followUp() 
   { 
       return $('~Follow-Up'); 
   }
   get medications() 
   { 
       return $('~Medications'); 
   }

   get allergies() 
   { 
       return $('~Allergies'); 
   }
   get immunization() 
   { 
       return $('~Immunizations'); 
   }
   get referal() 
   { 
       return $('//XCUIElementTypeTextView[@name="Referral"]'); 
   }
  
   get Transcript() 
   { 
       return $('//XCUIElementTypeStaticText[@name="Transcripción"]'); 
   }
   get Cdss() 
   { 
       return $('(//XCUIElementTypeStaticText[@name="CDSS"])[2]'); 
   }
   get SuggestedDiagnosisAndInterventions() 
   { 
       return $('~Diagnóstico e intervención sugeridos'); 
   }
   get SuggestedQuestions() 
   { 
       return $('~Preguntas Sugeridas'); 
   }
   get SuggestedMedications() 
   { 
       return $('~Medicamentos Sugeridos'); 
   }
   get SuggestedFollowups() 
   { 
       return $('~Sugerencias de Seguimiento'); 
   }


   get originalTrnscript() 
   { 
       return $('//XCUIElementTypeStaticText[@name="Mostrar Transcripción Original"]'); 
   }
 

   get claeanedTranscript() 
   { 
       return $('//XCUIElementTypeStaticText[@name="Mostrar Transcripción Limpiada"]'); 
   }
 
   get copyBtn() 
   { 
       return $('(//XCUIElementTypeButton[@name=" "])[1]'); 
   }
   get mailBtn() 
   { 
       return $('(//XCUIElementTypeButton[@name=" "])[2]'); 
   }
   get emailSentOk() 
   { 
       return $('~OK'); 
   }
   get printBtn() 
   { 
       return $('(//XCUIElementTypeButton[@name=" "])[3]'); 
   }
   get printPagePrintBtn() 
   { 
       return $('~Imprimirt'); 
   }
   get printConformation() 
   { 
       return $('(//XCUIElementTypeButton[@name="Imprimir"])[2]'); 
   }
   get printDownload() 
   { 
       return $('~Descargar'); 
   }

   get printCancel() 
   { 
       return $('~Cancelar'); 
   }
   get printPageCancel() 
   { 
       return $('~Cancelar'); 
   }
   get printPageBackBtn() 
   { 
       return $('~Left'); 
   }
   get SoapNoteScreenTxtField() 
   { 
       return $('//XCUIElementTypeTextView[@value="Haz clic en el micrófono y comienza a hablar.."]'); 
   }
   // get SoapNoteTxtField() 
   // { 
   //     return $(''); 
   // }
   get Mic() 
   { 
       return $('~micIcon'); 
   }
   get send() 
   { 
       return $('~sendVoiceBtn'); 
   }
   get finaliseEncounter() 
   { 
       return $('//XCUIElementTypeButton[@name="Finalizar Encuentro"]'); 
   }
   get finaliseEncounterTxt() 
   { 
       return $('~¿Está seguro de finalizar el encuentro y deshabilitar todas las acciones disponibles?'); 
   }
   get finaliseEncounterOk() 
   { 
       return $('//XCUIElementTypeButton[@name="Ok"]'); 
   }
   get finaliseEncounterCancel() 
   { 
       return $('//XCUIElementTypeButton[@name="Cancelar"]'); 
   }
   get finaliseEncounteSuccessrTxt() 
   { 
       return $('//XCUIElementTypeStaticText[@name="Éxito"]'); 
   }
   get finaliseEncounterSuccess() 
   { 
       return $('~Encuentro finalizado con éxito.'); 
   }
   get finaliseEncounterConformed() 
   { 
       return $('~OK'); 
   }
   get PatientInfo() 
   { 
       return $('//XCUIElementTypeOther[@name="Información del paciente"]'); 
   }
   get Subject() 
   { 
       return $('//XCUIElementTypeStaticText[@name="Subjetivo"]'); 
   }
   get Object() 
   { 
       return $('//XCUIElementTypeStaticText[@name="Objetivo"]'); 
   }
   get Assess() 
   { 
       return $('//XCUIElementTypeStaticText[@name="Evaluación"]'); 
   }
   get Plan() 
   { 
       return $('//XCUIElementTypeStaticText[@name="Plan"]'); 
   }
   get AdditionalInfo() 
   { 
       return $('//XCUIElementTypeStaticText[@name="Información adicional"]'); 
   }
   get connectionLost() 
   { 
       return $('~¡Conexión perdida!'); 
   }
   get connectionLostClose() 
   { 
       return $('//XCUIElementTypeStaticText[@name="Cerrar"]'); 
   }
   get backToPatientScreen() 
   { 
       return $('~Left'); 
   }
   get Done() 
   { 
       return $('~Done'); 
   }
   //AddPatitent Screen Functions
   async creatNewPatient(name,year,month)
    {
        await verifyAndClick(this.patientName)
        await this.patientName.setValue(name)
        await this.dobPicker.click()
        await this.previousMonth.click()
        await this.nextMonth.click()
        await this.yearPickerShow.click()
        await this.yearPicker.setValue(year)
        await this.monthPicker.setValue(month)
        await this.yearPickerHide.click()
        await this.ok.click()
        await this.genderPicker.click()
        await waitForElementToBeVisible(this.female)
        await waitForElementToBeVisible(this.other)
        await waitForElementToBeVisible(this.unknown)
        await this.male.click()
        await waitForElementToBeVisible(this.cancel)
        await verifyAndClick(this.addAndProceed)
        await this.patientCreatedOk.click()
        await this.startConversationBtn()
    }
    async addPatitentWrn(){
        await verifyAndClick(this.addAndProceed)
        await waitForElementToBeVisible(this.nameError)
        await waitForElementToBeVisible(this.dateError)
        await waitForElementToBeVisible(this.genderError)
    }

    //Encounter Screen Function
    async noteSearch(randomName) {
        await this.searchNote.click()
        await this.searchNote.setValue(randomName);
    }
    async noteSearchVerification(randomName) {
        await this.noteSearch(randomName)
        return $(`//XCUIElementTypeStaticText[@name="${randomName}"]`);
    }
    async deleteSwipe() {
        await driver.action('pointer')
        .move({ duration: 0, x: 375, y: 232 })
        .down({ button: 0 })
        .move({ duration: 1000, x: 104, y: 233 })
        .up({ button: 0 })
        .perform();
    }
    async deleteEncounter(){
        await this.deleteSwipe()
        await this.deleteBtn.click()
        await this.deleteCancel.click()
        await this.deleteSwipe()
        await this.deleteBtn.click()
        await this.deleteConformation.click()
    }
    //Patient Screen 
    async Search(patientName) {
        await this.patientSearch.click();
        await this.patientSearch.setValue(patientName);
    }
    async patientSearchAndContinue(patientName) {
        await this.Search(patientName);
        await verifyAndClick(`//XCUIElementTypeStaticText[@name="${patientName}`);
    }
    //Search Patient
    async patientSearch(patitent) {
        await this.searchPatientsField.click()
        await this.searchPatientsField.addValue(patitent);
    }
    async startNewConveresation(patitent){
        await this.nokiDashboard.click()
        await this.startNewEncounter.click()
        await this.patientSearch(patitent);
        const patientElement = await this.patitentName(patitent);
        await patientElement.click();
        await this.proceedBTn.click()
    }
    //Recording Screen 
    async recordAudio(){
        await driver.navigateTo('https://www.youtube.com/watch?v=5t6Yr4eZ9wYs');
        // await performPointerAction(driver, 114, 161, 114, 161, 100);
        await driver.pause(180000);
        await driver.activateApp("com.thinkhat.devNoki");
        await this.pauseBtn.click()
        await this.stopBtn.click()
        // await performPointerAction(driver, 155, 798, 155, 798, 50);
        // await performPointerAction(driver, 287, 798, 287, 798, 50);
    }
    async ctsConformation(){
        await waitForElement(this.SoapNoteBtn)
        await verifyAndClick(this.Transcript)
        await verifyAndClick(this.Cdss)
        await verify(this.SuggestedDiagnosisAndInterventions,)
        await driver.takeScreenshot();
        await driver.execute("mobile: swipe", { direction: "left" });
        // await performPointerAction(driver, 411, 499, 124, 497);
        await verify(this.SuggestedQuestions)
        await driver.takeScreenshot();
        await driver.execute("mobile: swipe", { direction: "left" });

        // await performPointerAction(driver, 411, 499, 124, 497);
        await driver.pause(3000)

        await verify(this.SuggestedMedications)
        await driver.takeScreenshot();
        await driver.execute("mobile: swipe", { direction: "left" });

        // await performPointerAction(driver, 411, 499, 124, 497);
        await driver.pause(3000)

        await verify(this.SuggestedFollowups)
        await driver.takeScreenshot();
        await driver.pause(3000)
    
        await driver.takeScreenshot()
        await this.Transcript.click()
        await this.originalTrnscript.click()
        
        await driver.execute('mobile: swipe', { direction: 'up' });
        await this.claeanedTranscript.click()
        await driver.execute('mobile: swipe', { direction: 'up' });
      
        await this.SoapNoteBtn.click()
        // //addcode

        await verifyAndClick(this.SoapNoteScreenTxtField)
        // await this.SoapNoteScreenTxtField.setValue('add the aceclofinac mr to the medication')
        await verify(this.send)
        await verifyAndClick(this.copyBtn)
        await verifyAndClick(this.mailBtn)
        await verifyAndClick(this.emailSentOk)
        await verifyAndClick(this.printBtn)
        await verify(this.printDownload)
        await verifyAndClick(this.printPageCancel)
        await verifyAndClick(this.printPageBackBtn)
        await this.finaliseEncounter.click()
        await verify(this.finaliseEncounterTxt)
        await this.finaliseEncounterCancel.click()
        await this.finaliseEncounter.click()
        await this.finaliseEncounterOk.click()
        await verify(this.finaliseEncounteSuccessrTxt)
        await this.finaliseEncounterConformed.click()
        await this.backToPatientScreen.click()
        await verify(this.patient)
    }
    async recordAudioAndSaveAsDraft(){
        await driver.navigateTo('https://www.youtube.com/watch?v=5t6Yr4eZ9wYs');
        await driver.pause(180000);
        await driver.activateApp("com.thinkhat.devNoki");
        await driver.pause(3000)
        await this.Back.click()
        await verifyAndClick(this.saveAsDraftBtn)
    }
    async recordAudioAndContinueForPrevEncounter(){
        await this.recordAudio()
        await waitForElementToBeVisible(this.PrevEncounterRef)
        await this.PrevEncounterRefYes.click()
        await this.ctsConformation()
    }
    async recordAudioForDraft(){
        await this.recordAudio()
        await waitForElementToBeVisible(this.PrevEncounterRef)
        await verifyAndClick(this.PrevEncounterRefYes)
        await this.ctsConformation()
    }
}
export default new SpanishLanguage();