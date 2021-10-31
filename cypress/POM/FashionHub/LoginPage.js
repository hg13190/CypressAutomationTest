/// <reference types="cypress" />

class LoginPage {
    elements = {
        EmailTxtBox: () => cy.get('#Email'),
        PasswordTxtBox: () => cy.get('#Password'),
        LoginBtn: () => cy.get('*[value="Login"]')
    }
}

module.exports = new LoginPage();