/// <reference types="cypress" />

it('API TEST - Validate Header', () => {
    cy.request('https://pokeapi.co/api/v2/pokemon/25').as('pokemon')
    cy.get('@pokemon')
      .its('headers')
      .its('content-type')
      .should('include', 'application/json; charset=utf-8')
  })

it('API GET', () => {
    cy.request('https://reqres.in/api/users?pages=2&per_pages=1&delay=3').as('tryget')
    cy.get('@tryget')
      .its('headers')
      .its('content-type')
      .should('include', 'application/json; charset=utf-8')
});

it('Verify the list users will displayed', () => {
    cy.request({
        method: 'GET',
        url: 'https://reqres.in/api/users'
    }).as('users')
    cy.get('@users').its('status').should('equal', 200)
});
 