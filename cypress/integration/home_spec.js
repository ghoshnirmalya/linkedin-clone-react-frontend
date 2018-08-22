/* global cy, it, describe, context */

describe('Index page', () => {
  context('When a unauthenticated user visits the /index page', () => {
    it('gets redirected to /auth page', () => {
      cy.visit('http://localhost:3000/')

      cy.location('pathname').should('eq', '/auth')
    })
  })
})
