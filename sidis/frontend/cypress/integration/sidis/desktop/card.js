import Chance from 'chance'

/// <reference types="Cypress" />

context('Actions', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/')
  })

  describe('test initial page', () => {
    it('empty task page', () => {
      cy.get('#no-task')
        .contains('Choose any Card from the list')
    })

    it('.type() - type into a DOM element', () => {
      cy.get('input[name="keyword"]')
        .type('card1234')
        .should('have.value', 'card1234')
    })

    it('register a card', () => {
        const uuid = () => Cypress._.random(0, 1e6)
        const id = uuid()
        cy.get('#create-card')
        .click()
        cy.get('input[name="name"]')
        .type(id)
        cy.get('button').first()
        .click()
        .get(`#${id}`)
        .contains(id)
    })


    it('delete a card', () => {
        const uuid = () => Cypress._.random(0, 1e6)
        const id = uuid()
        cy.get('#create-card')
        .click()
        cy.get('input[name="name"]')
        .type(id)
        cy.get('button').first()
        .click()
        .get(`#${id}`)
        .contains(id)
        .get(`#ic${id}`)
        .click()
        .get('.modal-footer').find('button').last()
        .click()
        .get('ul')
        .not(`#ic${id}`)
    })
  })
})