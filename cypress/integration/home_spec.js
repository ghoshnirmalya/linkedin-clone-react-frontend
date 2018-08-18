/* global cy, it, describe */

describe('Home page', function () {
  it('Visits the Home page', function () {
    cy.visit('http://localhost:3000/')

    cy.contains('Welcome home!')
  })
})
