/// <reference types="cypress" />
import HomePage from '../../POM/FashionHub/HomePage'
import LoginAsPage from '../../POM/FashionHub/LoginAsPage'
import LoginPage from '../../POM/FashionHub/LoginPage'
import CustomerWelcomePage from '../../POM/FashionHub/CustomerWelcomePage'
import CustomerProfilePage from '../../POM/FashionHub/CustomerProfilePage'
import DesignerWelcomePage from '../../POM/FashionHub/DesignerWelcomePage'

describe('LoginTestsSuite', function() {
    beforeEach(() => {
        cy.visit('http://www.fashionhub.in/')
    });

    it('VerifyThatLoginAsCustomerOrDesignerChoicesAppearOnSelectingLoginOption', function() {
        HomePage.elements.LoginMenuOption().click()
        LoginAsPage.elements.CustomerBtn().then($button => {
            expect($button.is(':visible')).to.be.true
        })
        LoginAsPage.elements.DesignerBtn().then($button => {
            expect($button.is(':visible')).to.be.true
        })
    })

    it('VerifyThatCustomerGetsLoggedIn', function() {
        HomePage.elements.LoginMenuOption().click()
        LoginAsPage.elements.CustomerBtn().click()
        LoginPage.elements.EmailTxtBox().type('hdhillo@gmail.com')
        LoginPage.elements.PasswordTxtBox().type('hdhillo@gmail.com');
        LoginPage.elements.LoginBtn().click()
        CustomerWelcomePage.elements.WelcomeLinkTxt().click()
        CustomerProfilePage.elements.UpdateEmailTxtBox().invoke('val').should('eq', 'hdhillo@gmail.com')
    })

    it('VerifyThatDesignerGetsLoggedIn', function() {
        HomePage.elements.LoginMenuOption().click()
        LoginAsPage.elements.DesignerBtn().click()
        LoginPage.elements.EmailTxtBox().type('hg13190@gmail.com')
        LoginPage.elements.PasswordTxtBox().type('Admin@123');
        LoginPage.elements.LoginBtn().click()
        DesignerWelcomePage.elements.DesignerPofileImg().then($image => {
            expect($image.is(':visible')).to.be.true
        })
    })

    it('VerifyValidationForBlankCustomerCredentials', function() {
        HomePage.elements.LoginMenuOption().click()
        LoginAsPage.elements.CustomerBtn().click()
        LoginPage.elements.LoginBtn().click()
        LoginPage.elements.EmailValidationTxt().then($text => {
            expect($text.is(':visible')).to.be.true
        })
        LoginPage.elements.PasswordValidationTxt().then($text => {
            expect($text.is(':visible')).to.be.true
        })
    })

    it('VerifyValidationForInvalidCustomerEmailId', function() {
        HomePage.elements.LoginMenuOption().click()
        LoginAsPage.elements.CustomerBtn().click()
        LoginPage.elements.EmailTxtBox().type('invalidcustomer@gmail.com')
        LoginPage.elements.PasswordTxtBox().type('hdhillo@gmail.com');
        LoginPage.elements.LoginBtn().click()
        LoginPage.elements.InvalidLoginValidation().then($text => {
            expect($text.is(':visible')).to.be.true
        })
    })

    it('VerifyValidationForInvalidCustomerPassword', function() {
        HomePage.elements.LoginMenuOption().click()
        LoginAsPage.elements.CustomerBtn().click()
        LoginPage.elements.EmailTxtBox().type('hdhillo@gmail.com')
        LoginPage.elements.PasswordTxtBox().type('invalidpassword');
        LoginPage.elements.LoginBtn().click()
        LoginPage.elements.InvalidLoginValidation().then($text => {
            expect($text.is(':visible')).to.be.true
        })
    })

    it('VerifyValidationForBlankDesignerCredentials', function() {
        HomePage.elements.LoginMenuOption().click()
        LoginAsPage.elements.DesignerBtn().click()
        LoginPage.elements.LoginBtn().click()
        LoginPage.elements.EmailValidationTxt().then($text => {
            expect($text.is(':visible')).to.be.true
        })
        LoginPage.elements.PasswordValidationTxt().then($text => {
            expect($text.is(':visible')).to.be.true
        })
    })

    it('VerifyValidationForInvalidDesignerEmailId', function() {
        HomePage.elements.LoginMenuOption().click()
        LoginAsPage.elements.DesignerBtn().click()
        LoginPage.elements.EmailTxtBox().type('invaliddesigner@gmail.com')
        LoginPage.elements.PasswordTxtBox().type('Admin@123');
        LoginPage.elements.LoginBtn().click()
        LoginPage.elements.InvalidLoginValidation().then($text => {
            expect($text.is(':visible')).to.be.true
        })
    })

    it('VerifyValidationForInvalidDesignerPassword', function() {
        HomePage.elements.LoginMenuOption().click()
        LoginAsPage.elements.DesignerBtn().click()
        LoginPage.elements.EmailTxtBox().type('hg13190@gmail.com')
        LoginPage.elements.PasswordTxtBox().type('invalidpassword');
        LoginPage.elements.LoginBtn().click()
        LoginPage.elements.InvalidLoginValidation().then($text => {
            expect($text.is(':visible')).to.be.true
        })
    })
})