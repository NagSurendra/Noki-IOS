
class LoginPage {
    get emailField() { return $('//XCUIElementTypeTextField[@value="Email*"]'); }
    get passwordField() { return $('//XCUIElementTypeSecureTextField[@value="Password*"]'); }
    get loginButton() { return $('//XCUIElementTypeButton[@name="Login"]'); }
    get errorMessage() { return $('~Password is Required'); }
    get WrongPassword() { return $('~The password is invalid or the user does not have a password.'); }
    get emailError() { return $('~Email is required'); }
    get invalidEmailError() { return $('~Invalid Email'); }
    get emailNotRegisteredError() { return $('~No account associated with the email address'); }
    get homescreenAnimation() { return $('~homescreenanimation'); }
    get Done() { return $('~Done'); }
    get multitenantDropDown() { return $('~selectAccountId'); }
    get multiTenantOption() { return $('~bheema-badri-ocsqv'); }
    get multiTenantError() { return $('~Please select an Account ID')}
    
    // Helper methods for actions
    async enterEmail(email) {
        await expect(this.emailField).toBeDisplayed();
        const size = await this.emailField.getSize();
        expect(size.height).toBeGreaterThanOrEqual(34);
        await this.emailField.setValue(email);
        await this.Done.click()

    }

    async enterPassword(password) {
        await expect(this.passwordField).toBeDisplayed();
        const size = await this.passwordField.getSize();
        expect(size.height).toBeGreaterThanOrEqual(34);
        await this.passwordField.setValue(password);
        await this.Done.click()
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

    async restartApp() {
        await driver.terminateApp('com.thinkhat.devNoki');
        await driver.activateApp('com.thinkhat.devNoki');
    }
    async selectMultiTenant() {
      if(this.multitenantDropDown.isDisplayed()){
        await this.multitenantDropDown.click();
        await driver.pause(2000);
        await this.multiTenantOption.click();
      }else {
        console.log('the user Id that you have Entered is not a multi tenant user');
      }
    }
    
}

export default new LoginPage();
