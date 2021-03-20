// https://docs.cypress.io/api/introduction/api.html

describe('Calculator App', () => {
  beforeEach(() => {
    cy.visit('http://localhost:8081')
  })
  it('successfully loads', () => {
    cy.visit('/')
  })
  it('should displayd the output of the calculator', () => {
    cy.get('.output').should("contain", "")
  })
})
describe("Operator Buttons", () => {
  const operatorButtons = [
    { 
      name: "op-add",
      symbol: '+'
    } ,
    { 
      name: "op-sub",
      symbol: '-'
    } ,
    { 
      name: "op-mul",
      symbol: '*'
    } ,
    { 
      name: "op-div",
      symbol: '/'
    } 
  ]
  for(let i=0; i<operatorButtons.length; i++)  {
    it(`Should show corresponding outputs when clicked`, () => {
      const btn =  cy.get(`.${operatorButtons[i].name}`)
      btn.click()
      btn.should('contain', operatorButtons[i].symbol)
    })
  }
})
describe("Digit Buttons", () => {
  for(let i=0; i<10; i++ ) {
    it(`Button ${i} should display ${i} when clicked`, async () => {
      const digitButton = cy.get(`.digit-${i}`, { timeout: 1000000 })
      cy.wait()
      if(digitButton.should('exist')) {
        await digitButton.click()
        digitButton.should('contain', i)
      }
    })
  }
})
