/// <reference types="cypress" />

class DesignerWelcomePage {
    elements = {
        DesignerPofileImg: () => cy.get('#header > nav > a:nth-child(2) > img')
    }
}

module.exports = new DesignerWelcomePage();