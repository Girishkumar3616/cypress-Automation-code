

import userdata from "../fixtures/logindata.json"

describe('Verify login functinality', function () {

    it('Verify login with valid credentials', () => {

      cy.visit('https://the-internet.herokuapp.com/login')
      cy.get('input[name="username"]').type(userdata.fristname)
      cy.get('input[name="password"]').type(userdata.useremail)
      cy.get('button[type="submit"]').click()
      cy.contains('Welcom').should("be.visible")
      cy.get('a[href="/logout"]').click()
      cy.contains('Login Page')
    })
})