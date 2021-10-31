/// <reference types="cypress" />

class HomePage {
    elements = {
        LoginMenuOption: () => cy.contains('Login')
    }
}

module.exports = new HomePage();