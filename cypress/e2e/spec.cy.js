describe('Display Tests', () => {
  it('Should be able to get all of these elements to assure they exist on page load', () => {
    cy.visit('http://localhost:3000/')
    .get('h1')
    .get('#stance')
    .get('#trick')
    .get('#obstacle')
    .get('#tutorial')
    .get('button')
    .get('.trick-card')
  })
})