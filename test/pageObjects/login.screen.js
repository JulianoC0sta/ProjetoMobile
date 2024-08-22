export default class LoginScreen {
    get btnEntrar() { return $('android=new UiSelector().resourceId("org.wikipedia.alpha:id/create_account_login_button")')}
    get txtUsername() { return $('android=new UiSelector().resourceId("org.wikipedia.alpha:id/login_username_text")')}
    get txtPassword() { return $('android=new UiSelector().resourceId("org.wikipedia.alpha:id/login_password_input")')}
    
    async clickBtnEntrar() {
        await this.btnEntrar.click()
    }

    async username(userName) {
        await this.txtUsername.setValue(userName)  // Corrigido
    }

    async password(passWord) {
        await this.txtPassword.setValue(passWord)  // Corrigido
    }
}
