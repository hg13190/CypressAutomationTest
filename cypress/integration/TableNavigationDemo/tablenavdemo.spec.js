/// <reference types="cypress" />

const { invoke } = require("lodash");

describe('TableNavigationSuite', function() {

    this.beforeEach(() => {
        cy.visit('https://testautomationpractice.blogspot.com/')
    });

    it('VerifyPresenceOfBookNameAgainstParticularAuthor', function() {
        cy.get('[name="BookTable"] > tbody').find('tr').its('length').then(rows => {
            const tablerows = Cypress.$(rows).length;
            for (var i = 2; i < tablerows; i += 1) {
                if(cy.get(`[name="BookTable"] > tbody > tr:nth-child(${i})`).contains('Amod')) {
                    var bookName = cy.get(`[name="BookTable"] > tbody > tr:nth-child(${i}) > td:nth-child(1)`).invoke('text').should('eq', 'Master In Java')
                    break;
                }                
            }
        });
    })
})
