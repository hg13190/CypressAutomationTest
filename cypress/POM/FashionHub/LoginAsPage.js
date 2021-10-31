/// <reference types="cypress" />

class LoginAsPage {
    elements = {
        CustomerBtn: () => cy.contains('CUSTOMER'),
        DesignerBtn: () => cy.contains('DESIGNER')
    }
}

module.exports = new LoginAsPage();