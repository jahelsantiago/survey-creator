import React from 'react'
import MultipleQuestion from './MultipleQuestion'
import { Props } from './MultipleQuestion'




describe('<MultipleQuestion />', () => {
  it('click on a radio button option', () => {
    // see: https://on.cypress.io/mounting-react
    const desiredData = {
      answer: "Red",
      question: "What is your favorite color?"
    }

    
    
    const options : Props = {
      question: "What is your favorite color?",
      options: ["Red", "Green", "Blue"],
      flexibleOptions: true,
      onSubmit: (data) => {
        expect(data).to.deep.equal(desiredData)
      },
      questionNumber: 3,
    }

    cy.spy(options, 'onSubmit').as('callbackSpy');

    cy.mount(<MultipleQuestion {...options} />)
    cy.contains('Red').click()
    //assert that the retuned data is correct 
    cy.get('@callbackSpy').should('have.been.calledOnce');
  })
  
})