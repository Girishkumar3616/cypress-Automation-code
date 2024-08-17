describe("tables",function(){



    it("table values ",()=>{
cy.visit('https://the-internet.herokuapp.com/tables')
cy.get('#table1>tbody > tr:nth-child(3)').then((text)=>{



    var tableValue=text.text()
    cy.log(tableValue)

   if(cy.contains('Jason')){
   
cy.log("jhon")
}

})

    })
})