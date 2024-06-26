describe('template spec', () => 
  
{
  it('passes', () => {
    cy.visit('https://www.customer-code.surge.sh/')
    cy.get(':nth-child(21) > .form__input').type('admintest')
    //cy.get('cy.get('body')')
    cy.get(':nth-child(4) > .form__input').type('1234567890')
  })
})