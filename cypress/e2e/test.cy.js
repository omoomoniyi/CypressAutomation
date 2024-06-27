/// <reference types="cypress" />

it('Successful Login With Valid Credentials', () =>
    
    {
        cy.visit('https://practicetestautomation.com/practice-test-login/')
        cy.get('#username').type('student')
        cy.get('#password').type('Password123')
        cy.get('#submit').click()
        cy.wait(3000)
        cy.get('.wp-block-button__link').should('be.visible')

    
    })

    it('Failed Login With Invalid Credentials', () =>
    
        {
            cy.visit('https://practicetestautomation.com/practice-test-login/')
            cy.get('#username').type('incorrectUser ')
            cy.get('#password').type('Password123')
            cy.get('#submit').click()
            cy.wait(3000)

    
        
        })

        it('Error Message Display When Login Fails', () =>
    
            {
                cy.visit('https://practicetestautomation.com/practice-test-login/')
                cy.get('#username').type('incorrectUser ')
                cy.get('#password').type('Password123')
                cy.get('#submit').click()
                cy.wait(3000)
                cy.get('#error').should('be.visible')
 
        
            
            })