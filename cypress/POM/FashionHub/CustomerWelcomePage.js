/// <reference types="cypress" />

class CustomerWelcomePage {
    elements = {
        WelcomeLinkTxt: () => cy.contains('Welcome')
    }
}

module.exports = new CustomerWelcomePage();