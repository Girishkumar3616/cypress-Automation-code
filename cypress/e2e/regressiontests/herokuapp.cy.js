describe('Verify login functinality', function () {
   
    it('Verify login with valid credentials', () => {

      cy.visit('https://the-internet.herokuapp.com/login')
      cy.get('input[name="username"]').type('tomsmith')
      cy.get('input[name="password"]').type('SuperSecretPassword!')
      cy.get('button[type="submit"]').click()
      cy.contains('Welcom').should("be.visible")
    })


   it('Verify login with valid user name with invalid pasword ',() =>{
cy.visit('https://the-internet.herokuapp.com/login')
cy.get('input[name="username"]').type('tomsmith')
cy.get('input[name="password"]').type('SecretPassword!')
cy.get('button[type="submit"]').click()
cy.contains('invalid!').should("be.visible")
   })

it('Verify login with invalid user name with valid pasword', ()=> {
cy.visit('https://the-internet.herokuapp.com/login')
cy.get('input[name="username"]').type('Girish')
cy.get('input[name="password"]').type('SuperSecretPassword!')
cy.get('button[type="submit"]').click()
cy.contains('invalid!').should("be.visible")
   })

   it('Verify login with invalid user name with invalid pasword', ()=> {
    cy.visit('https://the-internet.herokuapp.com/login')
    cy.get('input[name="username"]').type('Girish')
    cy.get('input[name="password"]').type('Girish@123!')
    cy.get('button[type="submit"]').click()
    cy.contains('invalid!').should("be.visible")
       })
  

  })