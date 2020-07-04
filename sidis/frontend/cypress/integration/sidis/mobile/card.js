import Chance from 'chance'

/// <reference types="Cypress" />

context('Actions', () => {
  beforeEach(() => {
    cy.viewport('iphone-6');   
    cy.visit('http://localhost:3000/')

  })

  describe('test initial page', () => {
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