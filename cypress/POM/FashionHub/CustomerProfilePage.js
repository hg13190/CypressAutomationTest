/// <reference types="cypress" />

class CustomerProfilePage {
    elements = {
        UpdateEmailTxtBox: () => cy.get('#Email')
    }
}

module.exports = new CustomerProfilePage();