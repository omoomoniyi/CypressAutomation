/// <reference types="cypress" />

it('Successful Login With Valid Credentials', () =>
    
    {
        cy.visit('https://practicetestautomation.com/practice-test-login/')
        cy.get('#username').type('student')
        cy.get('#password').type('Password123')
        cy.get('#submit').click()


        // cy.wait(6000)
        // cy.get(':nth-child(2) > .form__input', { timeout: 20000 }).should('be.visible').type('omoniyitest')
        // cy.wait(6000)
        // cy.get(':nth-child(4) > .form__input').type('omoniyitest')
        // cy.wait(6000)
        // cy.get('.btn').click()
        // cy.wait(20000)
        // cy.get('.fetch-offline-data').should('be.visible')
        

    
    })

    it('Failed Login With Invalid Credentials', () =>
    
        {
            cy.visit('https://practicetestautomation.com/practice-test-login/')
            // cy.get(':nth-child(2) > .form__input').type('admintest')
            // cy.get(':nth-child(4) > .form__input').type('1234567890')
            // cy.get('.btn').click()
            // cy.wait(2000)
            // cy.contains('Invalid Login Id or Password').should('be.visible')
            
    
        
        })

        it('Error Message Display When Login Fails', () =>
    
            {
                cy.visit('https://practicetestautomation.com/practice-test-login/')
                // cy.get(':nth-child(2) > .form__input').type('admintest')
                // cy.get(':nth-child(4) > .form__input').type('1234567890')
                // cy.get('.btn').click()
                // cy.wait(2000)
                // cy.contains('Invalid Login Id or Password').should('be.visible')
                
        
            
            })