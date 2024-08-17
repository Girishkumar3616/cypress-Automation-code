describe("drop and drog ",function(){

   
/* it("drogand drop",function(){
cy.visit('https://kitchen.applitools.com/ingredients/drag-and-drop')
cy.get('#menu-items>li').each(function($item , indexing=3){
    if( indexing < 3) { // Limiting to the first 3 items
        cy.wrap($item).drag('#plate-items')
        cy.wait(1000)
      }
})
})
}) */

    /* it("Drags and drops the first three items", function() {
        cy.visit('https://kitchen.applitools.com/ingredients/drag-and-drop');
        Cypress.on('uncaught:exception',() => { 

        return false
        })
      /* cy.get('#menu-fried-chicken').drag('#plate-items')
      cy.wait(1000)
      cy.get('#menu-hamburger').drag('#plate-items')
      cy.wait(1000) */
const dataTransfer=new DataTransfer()
/* cy.get('#menu-fried-chicken').trigger('dragstart', {
    datatransfer
})
cy.get('#plate-items').trigger('drop', {
    datatransfer
}) */
/* 
    cy.get('#menu-fried-chicken').trigger('dragstart', {

        dataTransfer
      })
  
      cy.get('#plate-items').trigger('drop', {
  
        dataTransfer
      })
    })


 */ 

    it("drag_drop",function(){

        cy.visit('https://kitchen.applitools.com/ingredients/drag-and-drop')

        Cypress.on('uncaught:eception',()=>{
            return false
        })

        const dataTransfer=new DataTransfer()
        cy.get('#menu-fried-chicken').trigger('dragstart',{
            dataTransfer
        })
        cy.get('#plate-items').trigger('drop',{
            dataTransfer
        })
        cy.get('#menu-hamburger').trigger('dragstart',{
            dataTransfer
        })
        cy.get('#plate-items').trigger('drop',{
            dataTransfer
        })
    })

})