describe("mouse over actions",function(){


it("Actions on elements", ()=>{

cy.visit('https://www.cypress.io/')
Cypress.on('uncaught:exception' ,(error,runnabel)=>{

    return false
})
cy.wait(1200)
cy.get('#dropdownDocs').trigger("mouseover").wait(2000).trigger("mouseleave").trigger("mouseover")
cy.wait(1200)
cy.get('#dropdownDocs').rightclick()

cy.get('a[href="/subscribe"]').scrollIntoView()
cy.wait(5000)
cy.scrollTo(50,1000)
cy.wait(5000)
})




})