import loginPage from "./login.page";
import {
  waitForElement,
  verifyAndClick,
  verify,
  aeroplaneModeOn,
  aeroplaneModeOff,
} from "/Users/nagasubarayudu/Desktop/IOS/helpers/helper.js";
import AudioManager from "/Users/nagasubarayudu/Desktop/IOS/test/screenObjectModel/audioManeger.js";
import { faker } from "@faker-js/faker";
import LoginPage from "/Users/nagasubarayudu/Desktop/IOS/test/screenObjectModel/login.page.js";
import RecordingPage from "/Users/nagasubarayudu/Desktop/IOS/test/screenObjectModel/recording.page.js";
import HomePage from "/Users/nagasubarayudu/Desktop/IOS/test/screenObjectModel/home.page.js";
import EncounterPage from "/Users/nagasubarayudu/Desktop/IOS/test/screenObjectModel/encounter.page.js";
import AudioManeger from "/Users/nagasubarayudu/Desktop/IOS/test/screenObjectModel/audioManeger.js";
class SpanishLanguage {
  get newUserREsgistrationText() {
    return $(
      "~¿Nuevo usuario? Por favor, visita el sitio web de Noki para crear una nueva cuenta."
    );
  }
  get emailField() {
    return $('//XCUIElementTypeTextField[@value="Correo electrónico*"]');
  }
  get passwordField() {
    return $('//XCUIElementTypeSecureTextField[@value="Contraseña*"]');
  }
  get loginButton() {
    return $('//XCUIElementTypeButton[@name="Iniciar sesión"]');
  }
  get errorMessage() {
    return $("~Se requiere Contraseña");
  }
  get WrongPassword() {
    return $("~La contraseña no es válida o el usuario no tiene contraseña.");
  }
  get emailError() {
    return $("~Se requiere correo electrónico");
  }
  get invalidEmailError() {
    return $("~Correo electrónico no válido");
  }
  get emailNotRegisteredError() {
    return $(
      "~No hay ninguna cuenta asociada con la dirección de correo electrónico"
    );
  }
  get homescreenAnimation() {
    return $("~homescreenanimation");
  }

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
  async clearTextFields() {
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
    return $("~patients");
  }
  get encounter() {
    return $("~encounter");
  }
  get settings() {
    return $("~settings");
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
    return $("~Buscar Pacientes");
  }
  get PatientScreenDashBoardAddPatientBtn() {
    return $('//XCUIElementTypeButton[@name="Agregar paciente"]');
  }
  get encounerScreenTitle() {
    return $('//XCUIElementTypeStaticText[@name="Notas"]');
  }
  get EncounterScreenSearchField() {
    return $("~Buscar Notas Clínicas");
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
    return $("~Odontología general");
  }
  get doctorPhoneNumber() {
    return $("~Número de teléfono no especificado");
  }
  get doctorEmail() {
    return $("~nag.subbarayudu@thinkhat.ai");
  }
  get doctorName() {
    return $("~nagasurendra Badri");
  }
  get BackArrow() {
    return $("~backArrow");
  }
  get support() {
    return $("~Soporte");
  }
  get talkToUs() {
    return $("~Háblanos");
  }
  get email() {
    return $("");
  }
  get emailConfigurationTxt() {
    return $(
      "Configura los ajustes de tu correo electrónico para asegurarte de que puedes enviar correos electrónicos"
    );
  }
  get emailConfigurationOk() {
    return $("~ok");
  }

  get launguage() {
    return $("~Idioma");
  }
  get english() {
    return $('(//XCUIElementTypeStaticText[@name="Inglés"])[2]');
  }

  get generalSetting() {
    return $("~Configuración general");
  }
  get cdss() {
    return $(
      '(//XCUIElementTypeSwitch[@name="Configuración general, CDSS, Justificación del Diagnóstico"])[1]'
    );
  }
  get diagnosisJustification() {
    return $(
      '(//XCUIElementTypeSwitch[@name="Configuración general, CDSS, Justificación del Diagnóstico"])[2]'
    );
  }
  get logoutBtn() {
    return $("~Cerrar Sesión");
  }
  get logoutConformationTxt() {
    return $(~"¿Está seguro de que desea cerrar sesión?");
  }
  get logoutConformationBtn() {
    return $('//XCUIElementTypeButton[@name="Cerrar Sesión"]');
  }
  get logoutCancel() {
    return $("~Cancelar");
  }

  //patitents Page
  get patients() {
    return $('//XCUIElementTypeStaticText[@name="Patients"]');
  }
  get nokiDashboard() {
    return $("~noki dashboard");
  }
  get addPatient() {
    return $('//XCUIElementTypeButton[@name="Agregar paciente"]');
  }
  get clearText() {
    return $("~Clear text");
  }
  get cancel() {
    return $('//XCUIElementTypeStaticText[@name="Cancelar"]');
  }
  get noPatitentFound() {
    return $('//XCUIElementTypeTable[@name="No se encontraron paciente"]');
  }
  get goBack() {
    return $("~Left");
  }
  get startNewEncounter() {
    return $('//XCUIElementTypeButton[@name="Comenzar Nuevo Encuentro"]');
  }

  //Enconter Screen
  get Encounter() {
    return $('//XCUIElementTypeStaticText[@name="Notas"]');
  }
  get searchNote() {
    return $("~Buscar Notas Clínicas");
  }
  get legPain() {
    return $("~Leg Pain and Injury");
  }
  get draft() {
    return $("//XCUIElementTypeTable/XCUIElementTypeCell[1]");
  }
  get deleteBtn() {
    return $('//XCUIElementTypeButton[@name="Eliminar"]');
  }

  get deleteCancel() {
    return $('(//XCUIElementTypeButton[@name="Cancelar"])[2]');
  }

  get deleteConformation() {
    return $("~Eliminar");
  }
  get noEncounterFound() {
    return $("~No se encontraron notas clínicas");
  }

  // Search patitent
  get patient() {
    return $("~Seleccionar Paciente");
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
  get proceedBTn() {
    return $('//XCUIElementTypeButton[@name="Continuar"]');
  }
  get cancel() {
    return $('//XCUIElementTypeButton[@name="Cancelar"]');
  }
  get nokiDashboard() {
    return $("~noki dashboard");
  }
  async patientName(patient) {
    return $(`~${patient}`);
  }

  //addPAtitent
  get addPatientTxt() {
    return $('(//XCUIElementTypeStaticText[@name="Agregar paciente"])[2]');
  }
  get newpatientName() {
    return $(`//XCUIElementTypeTextField[@value="* Nombre y apellido"]`);
  }
 
  get DOB() {
    return $('//XCUIElementTypeTextField[@value="* Fecha de nacimiento"]');
  }
  get genderPickerTxtField() {
    return $('//XCUIElementTypeTextField[@value="* Género"]');
  }
  get dobPicker() {
    return $('(//XCUIElementTypeImage[@name="chevron.down"])[2]');
  }
  get yearPickerShow() {
    return $("~DatePicker.Show");
  }
  get previousMonth() {
    return $("~DatePicker.PreviousMonth");
  }
  get nextMonth() {
    return $("~DatePicker.NextMonth");
  }
  get yearPickerHide() {
    return $("~DatePicker.Hide");
  }

  get monthPicker() {
    const currentMonth = new Date().toLocaleString("es-ES", { month: "long" });
    const formattedMonth =
      currentMonth.charAt(0).toUpperCase() + currentMonth.slice(1);
    return $(`//XCUIElementTypePickerWheel[@value="${formattedMonth}"]`);
  }
  get yearPicker() {
    return $('//XCUIElementTypePickerWheel[@value="2025"]');
  }

  get ok() {
    return $("~OK");
  }
  get genderPicker() {
    return $("~go down");
  }
  get male() {
    return $("~Masculino");
  }
  get female() {
    return $("~Femenino");
  }
  get other() {
    return $("~Otro");
  }
  get unknown() {
    return $("~Desconocido");
  }
  get addAndProceed() {
    return $('//XCUIElementTypeButton[@name="Agregar y Proceder"]');
  }
  get cancel() {
    return $('//XCUIElementTypeButton[@name="Cancelar"]');
  }
  get nameError() {
    return $("~Nombre y apellido son requeridos");
  }
  get dateError() {
    return $("~La fecha de nacimiento es requerida");
  }
  get genderError() {
    return $("~El género es requerido");
  }

  // Recording Screen
  get back() {
    return $("~backArrow");
  }
  get Back() {
    return $("~Left");
  }
  get ContinueBtn() {
    return $('//XCUIElementTypeButton[@name="CONTINUAR"]');
  }
  get saveAsDraftBtn() {
    return $('//XCUIElementTypeButton[@name="GUARDAR COMO BORRADOR"]');
  }
  get discardBtn() {
    return $('//XCUIElementTypeButton[@name="DESCARTAR"]');
  }
  get templateSoapNote() {
    return $('//XCUIElementTypeTextField[@value="Nota SOAP"]]');
  }
  get LaunguageSelectior() {
    return $('//XCUIElementTypeTextField[@value="Español"]');
  }
  get LaunguageSelectText() {
    return $('//XCUIElementTypeStaticText[@name="Selecciona un idioma"]');
  }
  get doneBtn() {
    return $("~Done");
  }
  get EngLanOpt() {
    return $("~Inglés");
  }
  get SpanLanOpt() {
    return $("~Español");
  }
  get startConversationBtn() {
    return $('//XCUIElementTypeStaticText[@name="Iniciar Conversación"]');
  }
  get TxtConfm() {
    return $(
      "~Por favor, asegúrese de tener el consentimiento verbal del paciente antes de usar el escriba ambiental de IA de Noki para la documentación clínica. Ver Consentimiento."
    );
  }
  get pauseBtn() {
    return $("~Pause");
  }
  get patientCreatedOk() {
    return $("~OK");
  }
  get resumeRecording() {
    return $('//XCUIElementTypeButton[@name="Reanudar Grabación"]');
  }
  get resumeRecordingConformationYes() {
    return $('//XCUIElementTypeButton[@name="SÍ"]');
  }
  get resumeRecordingConformationText() {
    const date = new Date().toLocaleDateString("en-US", {
      month: "2-digit",
      day: "2-digit",
      year: "numeric",
    });
    return $(
      `~Al reanudar, la conversación en curso será grabada y la transcripción borrador se actualizará bajo el encuentro con fecha ${date}. ¿Está seguro de que desea continuar?`
    );
  }

  get resumeRecordingConformationNO() {
    return $('//XCUIElementTypeButton[@name="NO"]');
  }

  get stopBtn() {
    return $("~stopRecord");
  }
  get PlayBtn() {
    return $("~playBtnIcon");
  }
  get PrevEncounterRef() {
    return $(
      "~¿Le gustaría usar la nota SOAP del encuentro anterior como contexto?"
    );
  }
  get PrevEncounterRefNo() {
    return $('//XCUIElementTypeButton[@name="NO"]');
  }
  get PrevEncounterRefYes() {
    return $('//XCUIElementTypeButton[@name="SÍ"]');
  }
  get notEnoughTranscript() {
    return $("~No hay suficiente transcripción para generar notas clínicas.");
  }
  get notEnoughTranscript() {
    return $('//XCUIElementTypeButton[@name="OK"]');
  }
  get generatingSNTxt() {
    return $("~Generating SOAP note...");
  }
  get SoapNoteBtn() {
    return $('//XCUIElementTypeStaticText[@name="Nota SOAP"]');
  }
  get patientInformation() {
    return $('//XCUIElementTypeStaticText[@name="Patient Information"]');
  }
  get subjective() {
    return $('//XCUIElementTypeStaticText[@name="Subjective"]');
  }
  get objective() {
    return $('//XCUIElementTypeStaticText[@name="Objective"]');
  }
  get assessment() {
    return $('//XCUIElementTypeStaticText[@name="Assessment"]');
  }
  get plan() {
    return $('//XCUIElementTypeStaticText[@name="Plan"]');
  }
  get additinalInformation() {
    return $('//XCUIElementTypeStaticText[@name="Additional Information"]');
  }
  get name() {
    return $('//XCUIElementTypeTextField[@value="Name :"]');
  }
  get age() {
    return $('//XCUIElementTypeTextField[@value="Age :"]');
  }
  get gender() {
    return $('//XCUIElementTypeTextField[@value="Gender :"]');
  }
  get encounterDate() {
    return $('//XCUIElementTypeTextField[@value="Encounter Date :"]');
  }

  get chiefComplain() {
    return $("~Chief Complaint CC");
  }
  get historyofprsentIllness() {
    return $("~History of Present Illness HPI");
  }
  get pastMedicalHistory() {
    return $("~Past Medical History");
  }
  get socialHistory() {
    return $("~Social History");
  }
  get familyHistory() {
    return $("~Review of Systems ROS");
  }
  get reviewofSystems() {
    return $("~Review of Systems ROS");
  }
  get vitalSigns() {
    return $("~Vital Signs");
  }
  get generallAppearance() {
    return $("~General Appearance");
  }
  get physicalApperence() {
    return $("~Physical Examination");
  }
  get Diognosis() {
    return $('(//XCUIElementTypeStaticText[@name="Diagnosis :"])[3]');
  }
  get clinicalImpression() {
    return $("~Treatment Plan");
  }
  get treatmentPlan() {
    return $("~Treatment Plan");
  }
  get patitentEducation() {
    return $("~Patient Education");
  }
  get followUp() {
    return $("~Follow-Up");
  }
  get medications() {
    return $("~Medications");
  }

  get allergies() {
    return $("~Allergies");
  }
  get immunization() {
    return $("~Immunizations");
  }
  get referal() {
    return $('//XCUIElementTypeTextView[@name="Referral"]');
  }

  get Transcript() {
    return $('//XCUIElementTypeStaticText[@name="Transcripción"]');
  }
  get Cdss() {
    return $("~CDSS");
  }
  get SuggestedDiagnosisAndInterventions() {
    return $("~Diagnóstico e intervención sugeridos");
  }
  get SuggestedQuestions() {
    return $("~Preguntas Sugeridas");
  }
  get SuggestedMedications() {
    return $("~Medicamentos Sugeridos");
  }
  get SuggestedFollowups() {
    return $("~Sugerencias de Seguimiento");
  }

  get originalTrnscript() {
    return $(
      '//XCUIElementTypeStaticText[@name="Mostrar Transcripción Original"]'
    );
  }

  get claeanedTranscript() {
    return $(
      '//XCUIElementTypeStaticText[@name="Mostrar Transcripción Limpiada"]'
    );
  }

  get copyBtn() {
    return $("~copy");
  }
  get mailBtn() {
    return $("~mail");
  }
  get emailSentOk() {
    return $("~OK");
  }
  get printBtn() {
    return $("~print");
  }
  get printPagePrintBtn() {
    return $("~Imprimirt");
  }
  get printConformation() {
    return $('(//XCUIElementTypeButton[@name="Imprimir"])[2]');
  }
  get printDownload() {
    return $("~Descargar");
  }

  get printCancel() {
    return $("~Cancelar");
  }
  get printPageCancel() {
    return $("~Cancelar");
  }
  get printPageBackBtn() {
    return $("~Left");
  }
  get SoapNoteScreenTxtField() {
    return $(
      '//XCUIElementTypeTextView[@value="Haz clic en el micrófono y comienza a hablar.."]'
    );
  }
  // get SoapNoteTxtField()
  // {
  //     return $('');
  // }
  get Mic() {
    return $("~micIcon");
  }
  get send() {
    return $("~sendVoiceBtn");
  }
  get finaliseEncounter() {
    return $("~finalizedBtn");
  }
  get finaliseEncounterTxt() {
    return $(
      "~¿Está seguro de finalizar el encuentro y deshabilitar todas las acciones disponibles?"
    );
  }
  get finaliseEncounterOk() {
    return $('//XCUIElementTypeButton[@name="Ok"]');
  }
  get finaliseEncounterCancel() {
    return $('//XCUIElementTypeButton[@name="Cancelar"]');
  }
  get finaliseEncounteSuccessrTxt() {
    return $('//XCUIElementTypeStaticText[@name="Éxito"]');
  }
  get finaliseEncounterSuccess() {
    return $("~Encuentro finalizado con éxito.");
  }
  get finaliseEncounterConformed() {
    return $("~OK");
  }
  get PatientInfo() {
    return $('//XCUIElementTypeOther[@name="Información del paciente"]');
  }
  get Subject() {
    return $('//XCUIElementTypeStaticText[@name="Subjetivo"]');
  }
  get Object() {
    return $('//XCUIElementTypeStaticText[@name="Objetivo"]');
  }
  get Assess() {
    return $('//XCUIElementTypeStaticText[@name="Evaluación"]');
  }
  get Plan() {
    return $('//XCUIElementTypeStaticText[@name="Plan"]');
  }
  get AdditionalInfo() {
    return $('//XCUIElementTypeStaticText[@name="Información adicional"]');
  }
  get connectionLost() {
    return $("~¡Conexión perdida!");
  }
  get connectionLostClose() {
    return $('//XCUIElementTypeStaticText[@name="Cerrar"]');
  }
  get backToPatientScreen() {
    return $("~Left");
  }
  get Done() {
    return $("~Done");
  }

  //Quock Actions Flow
  get quickActionButton() {
    return $('//XCUIElementTypeButton[@name="Acciones rápidas"]');
  }
  get quicktionsSearchField() {
    return $('//XCUIElementTypeTextField[@value="Buscar acciones rápidas"]');
  }
  get regenerateSoapNote() {
    return $("~Regenerar nota SOAP");
  }

  get translateSoapNote() {
    return $("~Translate soap note to");
  }
  // get french()
  // {
  //     return $('~french');
  // }
  get spanish() {
    return $("");
  }
  get english() {
    return $("~Inglés");
  }

  get generateIcdAndCptCodes() {
    return $("~Generar códigos ICD y CPT");
  }
  get generateCarePlan() {
    return $("~Generar plan de atención con explicación");
  }
  get generateFeedBack() {
    return $("~Generar comentarios sobre el desempeño del médico");
  }
  get generateReferalLetter() {
    return $("~Generar carta de derivación");
  }
  get icdAndCptCodes() {
    return $("~Códigos ICD y CPT");
  }

  get regenerateIcdAndCpt() {
    return $("~Regenerar códigos ICD y CPT");
  }
  get regenerateCarePlan() {
    return $(`~Regenerar plan de atención con explicación`);
  }
  get carePlan() {
    return $("~Plan de atención con explicación");
  }
  get regenerateFeedBack() {
    return $("~Regenerar comentarios sobre el desempeño del médico");
  }
  get feedBack() {
    return $("~Comentarios sobre el desempeño del médico");
  }
  get regenerateReferalLetter() {
    return $("~Regenerar carta de derivación");
  }
  get referalLetter() {
    return $("~Carta de derivación");
  }

  get Proceed() {
    return $("");
  }
  get cancel() {
    return $("");
  }

  // get PatientInformationInFrench()
  // {
  //     return $('');
  // }

  get PatientInformation() {
    return $(
      `//XCUIElementTypeOther[@name="Stack view"]/XCUIElementTypeOther[6]/XCUIElementTypeOther`
    );
  }
  get save() {
    return $('//XCUIElementTypeButton[@name="Guardar"]');
  }
  get cancel() {
    return $('//XCUIElementTypeButton[@name="Cancelar"]');
  }
  get yes() {
    return $('//XCUIElementTypeButton[@name="SÍ"]');
  }
  get no() {
    return $('//XCUIElementTypeButton[@name="No"]');
  }
  get PatientInformationInEnlish() {
    return $("");
  }
  get update() {
    return $("~pencil.line");
  }
  get title() {
    return $('//XCUIElementTypeTextView[@value="Título"]');
  }

  get Discription() {
    return $('(//XCUIElementTypeTextView[@value="Descripción"])[1]');
  }
  get add() {
    return $('(//XCUIElementTypeButton[@name="selected"])[1]');
  }
  get SuggestedDiagnosticTesting() {
    return $("");
  }
  get AddConversation() {
    return $('//XCUIElementTypeButton[@name="Agregar Conversación"]');
  }
  get AddConversationNo() {
    return $('//XCUIElementTypeButton[@name="No"]');
  }
  get AddConversationConfirmationYes() {
    return $('//XCUIElementTypeButton[@name="SÍ"]');
  }
  get resumeConversationForMultipleConverstionScenario() {
    return $('//XCUIElementTypeButton[@name="Reanudar Conversación"]');
  }
  get resumeConversationForMultipleConverstionScenarioYes() {
    return $('//XCUIElementTypeButton[@name="SÍ"]');
  }

  get PatientInformationTxtInEnlish() {
    return $(
      '//XCUIElementTypeStaticText[@name="main label" and @label="Patient Information"]'
    );
  }
  get PatientInformationTxtOnSpanish() {
    return $(
      '//XCUIElementTypeStaticText[@name="main label" and @label="Información del Paciente"]'
    );
  }
  get spanish() {
    return $("~Español");
  }
  get offlineModeRTranscription() {
    return $("~No hay transcripción disponible en el modo sin conexión");
  }
  get() {
    return $("");
  }
  get() {
    return $("");
  }
  get() {
    return $("");
  }
  get() {
    return $("");
  }
  get() {
    return $("");
  }
  get() {
    return $("");
  }

  get() {
    return $("");
  }
  get() {
    return $("");
  }
  get() {
    return $("");
  }
  get() {
    return $("");
  }
  get() {
    return $("");
  }
  get() {
    return $("");
  }
  async copyMailPrint() {
    await waitForElement(this.copyBtn);
    await verifyAndClick(this.copyBtn);
    await verifyAndClick(this.mailBtn);
    // await verifyAndClick(this.emailSentOk);
    await verifyAndClick(this.printBtn);
    await verify(this.printDownload);
    await driver.pause(10000);
    await verifyAndClick(RecordingPage.printPageCancel);
    await verifyAndClick(this.printPageBackBtn);
  }
  async quickAction() {
    await waitForElement(this.SoapNoteBtn);
    await this.quickActionButton.click();
    await verify(this.quicktionsSearchField);
    await verifyAndClick(this.regenerateSoapNote);
    await verifyAndClick(this.yes);
    // await waitForElement(this.ok)
    // await verifyAndClick(this.ok)
    await waitForElement(this.SoapNoteBtn);
    await this.copyMailPrint();
    await this.update.click();
    await this.PatientInformation.click();
    await verify(this.title);
    await verify(this.Discription);
    await verifyAndClick(this.add);
    await verifyAndClick(RecordingPage.clearPatientInfo);
    await verifyAndClick(this.save);
    await verifyAndClick(this.update);
    await verifyAndClick(this.cancel);

    // await this.quickActions.click()
    // await verifyAndClick(this.translateSoapNote)
    // await verify(this.french)
    // await verify(this.cancel)
    // await verifyAndClick(this.Proceed)
    // await waitForElement(this.PatientInformationInSpnish)
    // await Recording.copyMailPrint()
    // await driver.execute('mobile: swipe', { direction: 'up' });

    await this.quickActionButton.click();
    await this.translateSoapNote.click();
    await this.english.click();
    await verifyAndClick(this.yes);
    // await waitForElement(this.ok)
    // await verifyAndClick(this.ok)
    await waitForElement(this.PatientInformationTxtInEnlish);
    await this.copyMailPrint();
    await this.update.click();
    await this.PatientInformation.click();
    //await verify(RecordingPage.titleInSpanish)
    //await verify(RecordingPage.discriptionInSpanish)
    await verifyAndClick(this.add);
    // await verifyAndClick(RecordingPage.ok)
    await verifyAndClick(RecordingPage.clearPatientInfo);
    await verifyAndClick(this.save);
    await verifyAndClick(this.update);
    await verifyAndClick(this.cancel);
    await this.quickActionButton.click();
    await this.translateSoapNote.click();
    await verifyAndClick(this.spanish);
    await verifyAndClick(this.yes);
    // await waitForElement(this.ok)
    // await verifyAndClick(this.ok)
    await waitForElement(this.PatientInformationTxtOnSpanish);
    await driver.pause(4000);
    await verifyAndClick(this.quickActionButton);
    await verifyAndClick(this.generateIcdAndCptCodes);
    // await waitForElement(this.ok)
    // await verifyAndClick(this.ok)
    await waitForElement(this.icdAndCptCodes);
    await this.copyMailPrint();
    await this.update.click();
    await this.save.click();
    await this.quickActionButton.click();
    await this.generateCarePlan.click();
    // await waitForElement(this.ok)
    // await verifyAndClick(this.ok)
    await waitForElement(this.carePlan);
    await this.copyMailPrint();
    await this.quickActionButton.click();
    await this.generateFeedBack.click();
    // await waitForElement(this.ok)
    // await verifyAndClick(this.ok)
    await waitForElement(this.feedBack);
    await this.copyMailPrint();
    await this.quickActionButton.click();
    await this.generateReferalLetter.click();
    // await waitForElement(this.ok)
    // await verifyAndClick(this.ok)
    await waitForElement(this.referalLetter);
    await this.copyMailPrint();
    await verifyAndClick(this.quickActionButton);
    await verifyAndClick(this.regenerateIcdAndCpt);
    await verifyAndClick(this.yes);
    // await waitForElement(this.ok)
    // await verifyAndClick(this.ok)
    await waitForElement(this.icdAndCptCodes);
    await this.copyMailPrint();
    await verifyAndClick(this.quickActionButton);
    await verifyAndClick(this.regenerateCarePlan);
    await verifyAndClick(this.yes);
    // await waitForElement(this.ok)
    // await verifyAndClick(this.ok)
    await waitForElement(this.carePlan);
    await this.copyMailPrint();
    await verifyAndClick(this.quickActionButton);
    await verifyAndClick(this.regenerateFeedBack);
    await verifyAndClick(this.yes);
    // await waitForElement(this.ok)
    // await verifyAndClick(this.ok)
    await waitForElement(this.feedBack);
    await this.copyMailPrint();
    await this.quickActionButton.click();
    await verifyAndClick(this.regenerateReferalLetter);
    await verifyAndClick(this.yes);
    // await waitForElement(this.ok)
    // await verifyAndClick(this.ok)
    await waitForElement(this.referalLetter);
    await verifyAndClick(this.copyBtn);
    await verifyAndClick(this.mailBtn);
    // await verifyAndClick(RecordingPage.emailSentOk)
    await verifyAndClick(this.printBtn);
    await verifyAndClick(this.printPageCancel);
    await verifyAndClick(this.printPageBackBtn);
    await this.quickActionButton.click();
    await verifyAndClick(this.regenerateSoapNote);
    await verifyAndClick(this.yes);
    // await waitForElement(this.ok)
    // await verifyAndClick(this.ok)
  }

  //AddPatitent Screen Functions
  async createNewPatient() {
    const name = faker.person.fullName();
    const year = faker.number.int({ min: 1920, max: 2023 });
    const month = faker.number.int({ min: 1, max: 12 });
    await verifyAndClick(this.newpatientName);
    await this.newpatientName.setValue(name)
    await this.dobPicker.click();
    await this.previousMonth.click();
    await this.nextMonth.click();
    await this.yearPickerShow.click();
    await this.yearPicker.setValue(year);
    await this.monthPicker.setValue(month);
    await this.yearPickerHide.click();
    await this.ok.click();
    await this.genderPicker.click();
    await verifyAndClick(this.female);
    await this.genderPicker.click();
    await verifyAndClick(this.other);
    await this.genderPicker.click();
    await verifyAndClick(this.unknown);
    await this.genderPicker.click();
    await this.male.click();
    await verify(this.cancel);
    await verifyAndClick(this.addAndProceed);
    // await RecordingPage.patientCreatedOk.click()
    await this.startConversation();
    return name;
  }
  async addPatitentWrn() {
    await verifyAndClick(this.addAndProceed);
    await waitForElementToBeVisible(this.nameError);
    await waitForElementToBeVisible(this.dateError);
    await waitForElementToBeVisible(this.genderError);
  }

  //Encounter Screen Function
  async noteSearch(randomName) {
    await this.searchNote.click();
    await this.searchNote.setValue(randomName);
  }
  async noteSearchVerification(randomName) {
    await this.noteSearch(randomName);
    return $(`//XCUIElementTypeStaticText[@name="${randomName}"]`);
  }
  async deleteSwipe() {
    await driver
      .action("pointer")
      .move({ duration: 0, x: 375, y: 232 })
      .down({ button: 0 })
      .move({ duration: 1000, x: 104, y: 233 })
      .up({ button: 0 })
      .perform();
  }
  async deleteEncounter() {
    await this.deleteSwipe();
    await this.deleteBtn.click();
    await this.deleteCancel.click();
    await this.deleteSwipe();
    await this.deleteBtn.click();
    await this.deleteConformation.click();
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
  async patientSearch(patient) {
    await this.searchPatientsField.click();
    await this.searchPatientsField.setValue(patient);
    await driver.pause(2000);
    const patientElement = await this.patientName(patient);
    await verifyAndClick(patientElement);
    await verifyAndClick(this.proceedBTn);
  }
  async startConversation() {
    await verifyAndClick(RecordingPage.acknowledgeCheckBox);
    await verifyAndClick(this.startConversationBtn);
  }

  async startNewConveresation(patitent) {
    await this.nokiDashboard.click();
    await this.startNewEncounter.click();
    await this.patientSearch(patitent);
    const patientElement = await this.patitentName(patitent);
    await patientElement.click();
    await this.proceedBTn.click();
  }
  //Recording Screen
  async recordAudio() {
    await AudioManager.playAudio("spanish");
    await driver.pause(60000);
    await aeroplaneModeOn();
    await driver.pause(60000);
    await verify(this.offlineModeRTranscription);
    await driver.pause(60000);
    await aeroplaneModeOff();
    await driver.pause(60000);
    await AudioManager.stopAudio();
    await this.pauseBtn.click();
    await this.stopBtn.click();
  }
  async ctsConformation() {
    if (await this.notEnoughTranscript.isDisplayed()) {
      console.error(
        "Recording failed: Please provide a proper medical conversation"
      );
    } else {
      await waitForElement(this.SoapNoteBtn);
      console.log("Recording successful: Transcript generated");
    }
    await driver.pause(120000);
    await verifyAndClick(this.Transcript);
    await verifyAndClick(this.Cdss);
    await driver.pause(2000);
    const elements =
      this.SuggestedDiagnosisAndInterventions ||
      this.SuggestedDiagnosticTesting ||
      this.SuggestedMedications || //asdvwrfversdvcwreasvfdcweafSvdxc wrefasvdcxz
      this.SuggestedQuestions;

    if (elements.isDisplayed()) {
      console.log("CDSS is generated properly");
    } else if (this.CDSSLimitExceded.isDisplayed()) {
      console.error(
        "\x1b[31m%s\x1b[0m",
        "Kindly please verify the CDSS is off / your CDSS subscription is over"
      );
    }
    await driver.pause(3000);
    await verifyAndClick(this.Transcript);
    await RecordingPage.dataScanning(RecordingPage.cleanedTranscriptScroll); // dsvceafsdc
    await verifyAndClick(this.originalTrnscript);
    await verifyAndClick(this.claeanedTranscript);
    await this.SoapNoteBtn.click();
  }

  async recordAudioAndSaveAsDraft() {
    await AudioManager.playAudio("spanish");
    await driver.pause(180000);
    await AudioManager.pauseAudio();
    await verifyAndClick(this.Back);
    await verifyAndClick(this.saveAsDraftBtn);
  }
  async recordAudioAndContinueForPrevEncounter() {
    await this.recordAudio();
    await waitForElement(this.PrevEncounterRef);
    await this.PrevEncounterRefNo.click();
  }
  async recordAudioForDraft() {
    await this.recordAudio();
    await waitForElementToBeVisible(this.PrevEncounterRef);
    await verifyAndClick(this.PrevEncounterRefYes);
    await this.ctsConformation();
  }
  async finalizeEncounter() {
    await waitForElement(this.SoapNoteBtn);
    await this.finaliseEncounter.click();
    await this.finaliseEncounterOk.click();
    // await verify(this.finaliseEncounteSuccessrTxt);
    await driver.pause(5000);
  }

  async multipleConversation() {
    await verifyAndClick(this.AddConversation);
    await verifyAndClick(this.AddConversationNo);
    await verifyAndClick(this.AddConversation);
    await verifyAndClick(this.AddConversationConfirmationYes);
    await verify(this.pauseBtn);
    await this.recordAudioAndSaveAsDraft();
    await driver.pause(5000);
    await LoginPage.restartApp();
    await verifyAndClick(HomePage.encounter);
    await driver.pause(5000);
    await EncounterPage.clickDraftTranscript()
    await waitForElement(this.finaliseEncounter);
    await verifyAndClick(this.finaliseEncounter);
    await driver.pause(3000);
    //await verifyAndClick(this.ok)
    await verifyAndClick(this.resumeConversationForMultipleConverstionScenario);
    await verifyAndClick(
      this.resumeConversationForMultipleConverstionScenarioYes
    );
    await this.recordAudio();
  }
  async multipleConversationForExistingEnconter() {
    await this.multipleConversation();
    await this.PrevEncounterRef.click();
    await this.PrevEncounterRefNo.click();
  }
  async recordAudioforOfflineMode() {
    await AudioManeger.playAudio("spanish");
    console.log("Audio started:", AudioManeger.currentAudioFile);
    await this.recordAudioforOfflineModeMT();
    await driver.pause(10000);
    await verifyAndClick(this.pauseBtn);
    await AudioManeger.pauseAudio();
    console.log("Audio paused at:", AudioManeger.pausedTime, "seconds");
    await driver.pause(20000);
    await this.playBtn.click();
    await AudioManeger.resumeAudio();
    console.log("Audio resumed:", AudioManeger.currentAudioFile);
    await driver.pause(100000);
    await AudioManeger.pauseAudio();
    await driver.pause(2000);
    await aeroplaneModeOn();
    await driver.pause(2000);
    await AudioManeger.resumeAudio();
    await driver.pause(5000);
    await driver.terminateApp("com.thinkhat.nokiTest");
    await AudioManeger.pauseAudio();
    await driver.pause(10000);
    await driver.activateApp("com.thinkhat.nokiTest");
    await driver.pause(10000);
    await verifyAndClick(this.ContinueBtn);
    console.log(
      "Here app got restarted the app while it is in the recording screen and we verified with the app still in that page"
    );
    await AudioManeger.resumeAudio();
    await driver.pause(100000);
    await AudioManeger.pauseAudio();
    await verifyAndClick(this.stopBtn);
    console.log(
      "here after app got closed while recording we magaing automatically again resumed the audio"
    );
    await driver.pause(5000);
    await verify(this.offlineConversationSaved);
    await driver
      .action("pointer")
      .move({ duration: 0, x: 355, y: 22 })
      .down({ button: 0 })
      .move({ duration: 1000, x: 354, y: 720 })
      .up({ button: 0 })
      .perform();
    const airplaneModeBtn = await $("~com.apple.ControlCenter.Airplane");
    await (await airplaneModeBtn).click();

    await driver
      .action("pointer")
      .move({ duration: 0, x: 283, y: 790 })
      .down({ button: 0 })
      .pause(50)
      .up({ button: 0 })
      .perform();
    await driver.pause(5000);
    console.log(
      "here we have verified that the in offline mode when we click stop button it willshould show a popup of offline conversation is saved"
    );
    if (this.PrevEncounterRefNo.isDisplayed()) {
      await this.PrevEncounterRefNo.click();
      console.log(
        "Here her are undrgoing conversation may be s followup or the patient is visted the doctor previously"
      );
    } else {
      console.log(
        "This Encounter we are recording for this particulat patient is for the First time"
      );
    }
  }

  async recordAudioforOfflineModeMT() {
    let timesToRun = 3;
    let count = 0;
    console.log(`Loop will run ${timesToRun} times`);
    for (let i = 0; i < timesToRun; i++) {
      await driver.pause(10000);
      await aeroplaneModeOn();
      await driver.pause(10000);
      await verify(this.offlineModeRTranscription);
      await driver.pause(60000);
      await aeroplaneModeOff();
      count++;
      console.log(`Offline Mode Loop we are Running Now  ${i + 1} completed`);
    }
  }
}
export default new SpanishLanguage();
