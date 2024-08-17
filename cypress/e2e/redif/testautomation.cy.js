describe("drop down",function(){

    it("clic ob ",function(){

        cy.visit("https://testautomationpractice.blogspot.com/")

        cy.get('iframe[frameborder="0"]').then((frame) => {

        var dropdown=frame.contents().find("select[id='RESULT_RadioButton-3']")

        cy.wrap(dropdown).select('QA Engineer')
        })
        
    })
})