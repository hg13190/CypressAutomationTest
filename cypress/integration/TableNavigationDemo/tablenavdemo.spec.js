/// <reference types="cypress" />

const { invoke } = require("lodash");

describe('TableNavigationSuite', function() {

    this.beforeEach(() => {
        cy.visit('https://testautomationpractice.blogspot.com/')
    });

    it('VerifyPresenceOfBookNameAgainstParticularAuthor', function() {
            findContentInTbl(2)        
    })

    function findContentInTbl (count = 1) {
        cy.get('[name="BookTable"]').find('tr').then(limit => {
            cy.log(limit.length)
            if (count === limit.length) {
                cy.log("finish")
                return
            }
            cy.get(`[name="BookTable"] > tbody > tr:nth-child(${count}) > td:nth-child(2)`).invoke('text').then(authorval => {
                if (authorval === 'Amod') {
                    cy.get(`[name="BookTable"] > tbody > tr:nth-child(${count}) > td:nth-child(1)`).invoke('text').then(booknameval => {
                        cy.log(booknameval)
                    })
                    cy.get(`[name="BookTable"] > tbody > tr:nth-child(${count}) > td:nth-child(1)`).invoke('text').should('eq', 'Master In Java')
                    return
                }
                findContentInTbl (count + 1)
            })
        })
    }
})