import React from 'react'
import MultipleQuestion from './MultipleQuestion'
import { Props } from './MultipleQuestion'




describe('<MultipleQuestion />', () => {
  it('click on a radio button option', () => {
    // define the desired data to be returned
    const desiredData = {
      answer: "Red",
      question: "What is your favorite color?"
    }
    //define the props
    const options : Props = {
      question: "What is your favorite color?",
      options: ["Red", "Green", "Blue"],
      flexibleOptions: true,
      onSubmit: (data) => {
        expect(data).to.deep.equal(desiredData)
      },
      questionNumber: 3,
    }
    //spy on the callback function
    cy.spy(options, 'onSubmit').as('callbackSpy');
    //mount the component
    cy.mount(<MultipleQuestion {...options} />)
    cy.contains('Red').click()
    //assert that the retuned data is correct 
    cy.get('@callbackSpy').should('have.been.calledOnce');
    cy.get('@callbackSpy').should('have.been.calledWith', desiredData);
  })

  it('write in the input and click enter', () => {
    // define the desired data to be returned
    const desiredData = {
      answer: "Yellow",
      question: "What is your favorite color?"
    }
    //define the props
    const options : Props = {
      question: "What is your favorite color?",
      options: ["Red", "Green", "Blue"],
      flexibleOptions: true,
      onSubmit: (data) => {
        expect(data).to.deep.equal(desiredData)
      },
      questionNumber: 3,
    }
    //spy on the callback function
    cy.spy(options, 'onSubmit').as('callbackSpy');
    //mount the component
    cy.mount(<MultipleQuestion {...options} />)
    cy.get("input[placeholder = 'Otro, ¿Cual?'").type('Yellow{enter}')
    //assert that the retuned data is correct 
    cy.get('@callbackSpy').should('have.been.calledOnce');
    cy.get('@callbackSpy').should('have.been.calledWith', desiredData);
  })
  
})