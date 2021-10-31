/// <reference types="cypress" />

class LoginPage {
    elements = {
        EmailTxtBox: () => cy.get('#Email'),
        EmailValidationTxt: () => cy.get('[data-valmsg-for="Email"]'),
        PasswordTxtBox: () => cy.get('#Password'),
        PasswordValidationTxt: () => cy.get('[data-valmsg-for="Password"]'),
        LoginBtn: () => cy.get('[value="Login"]'),
        InvalidLoginValidation: () => cy.get('.validation-summary-errors')
    }
}

module.exports = new LoginPage();