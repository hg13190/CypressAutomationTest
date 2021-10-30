describe('LoginTestsSuite', function() {
    it('VerifyThatLoginAsCustomerOrDesignerChoicesAppearOnSelectingLoginOption', function() {
        cy.visit('http://www.fashionhub.in/')
        cy.contains('Login').click()
        cy.contains('CUSTOMER').then($button => {
            expect($button.is(':visible')).to.be.true
        })
        cy.contains('DESIGNER').then($button => {
            expect($button.is(':visible')).to.be.true
        })
    })

    it('VerifyThatCustomerGetsLoggedIn', function() {
        cy.visit('http://www.fashionhub.in/')
        cy.contains('Login').click()
        cy.contains('CUSTOMER').click()
        cy.get('#Email').type('hdhillo@gmail.com')
        cy.get('#Password').type('hdhillo@gmail.com');
        cy.get('*[value="Login"]').click()
        cy.contains('Welcome').click()
        cy.get('#Email').invoke('val').should('eq', 'hdhillo@gmail.com')
    })
})