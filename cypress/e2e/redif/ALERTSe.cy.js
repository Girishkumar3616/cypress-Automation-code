describe("ALERTS_verify ", function () {

    this.beforeEach(()=>{
        cy.visit('https://the-internet.herokuapp.com/javascript_alerts');
    })
    it("Alerts", function () { 
        cy.get("button[onclick='jsAlert()']").click()
        cy.on('window:alert', function (alert) {
            expect(alert).to.equal("I am a JS Alert")
            return true
        })
    })

    it.only("Comfirm alert click on Ok",function(){
cy.get("button[onclick='jsConfirm()']").click()
cy.on('window:confirm',function(){
return true
})
})

it("Comfirm alert click on cancel",function(){
    cy.get("button[onclick='jsConfirm()']").click()
    cy.on('window:confirm',function(){
    return false

    })
    })




    it.only("text alert",function () {
     cy.window().then(($win) => {
        cy.stub($win, "prompt").returns("girish")
        cy.contains('Click for JS Prompt').click();
     })



    })


 /*    it.only('Cypress Test Case - test prompt Alert - Ok', function () {
    
        cy.window().then(($win) => {

            cy.stub($win, 'prompt').returns("Mahesh");
            cy.contains('Click for JS Prompt').click();
        })
    
}) */



})