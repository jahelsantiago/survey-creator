/// <reference types="cypress" />

describe('template spec', () => {
  beforeEach(() => {
    cy.visit('/')
  })
  
  it('correct formular completition', () => {
    cy.contains("Campaña de escasez de").should('be.visible')
    cy.dataCy('btn-responder').click()
    //fill the formular with 
    cy.get('input[name="name"]').type('Jahel Leon')
    cy.get('input[name="email"]').type('jleonro@unal.edu.co')
    cy.get('input[name="phone"]').type('1234567890')
    cy.dataCy('btn-siguiente').click()
    //question 2
    cy.contains('Implantes').click()
    //question 3 should fail 
    cy.dataCy('btn-siguiente').click()
    cy.contains('Por favor, responder la pregunta').should('be.visible')

    cy.get("[placeholder ='Por favor ingrese su respuesta']").type("Ninguno")
    cy.dataCy('btn-siguiente').click()
    //    question 4
    cy.get("[placeholder ='Por favor ingrese su respuesta']").type("Ninguno")
    cy.dataCy('btn-siguiente').click()
    //question 5 click en la opcion de ningiuno, deberia cambiar el checkbox a seleccionado y el texto estar active
    cy.get("input[placeholder ='Otro, ¿Cual?']").type("Ninguno")
    cy.dataCy('btn-siguiente').click()

    //question 6
    cy.contains('Sí').click()

    //question 7
    cy.get('.react-datepicker-wrapper').click()
    cy.get('.react-datepicker').contains('15').click()
    cy.dataCy('btn-siguiente').click()

    //question 8
    cy.get("[placeholder ='Por favor ingrese su respuesta']").type("Ninguno")
    cy.dataCy('btn-siguiente').click()

    //question 9
    cy.contains('Sí').click()

    //question 10
    cy.contains('No').click()

    //question 11
    cy.get("input[placeholder ='Otro, ¿Cual?']").type("Ninguno")
    cy.dataCy('btn-siguiente').click()

    //question 12
    cy.contains('No').click()



    
  })
})