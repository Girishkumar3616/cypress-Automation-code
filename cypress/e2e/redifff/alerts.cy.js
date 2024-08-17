describe("ALERTS ", function () {

    this.beforeEach(() => {
        cy.visit('https://the-internet.herokuapp.com/javascript_alerts');
    })
    it("Alerts", function () {
        //   cy.visit('https://the-internet.herokuapp.com/javascript_alerts');
        cy.get("button[onclick='jsAlert()']").click()
        cy.on('window:simple alert', function (alert) {
            expect(alert).to.equal("I am a JS Alert")
            return true
        })
        it("confirm js alert", function () {
          //  cy.visit('https://the-internet.herokuapp.com/javascript_alerts');
            cy.get("button[onclick='jsConfirm()']").click()
            cy.on('window:simple alert', function (alert) {
                expect(alert).to.equal("I am a JS Confirm")
        
                return true
            })
        })
        it("Propmt popup123", function () {
           // cy.visit('https://the-internet.herokuapp.com/javascript_alerts');
            cy.get('button[onclick="jsPrompt()"]').click()
            cy.on('window:propmt', function (alert) {
                expect(alert).to.equal('')
            })
            cy.log("clicked")
        })
    })
    it("Propmt popup", function () {
      //  cy.visit('https://the-internet.herokuapp.com/javascript_alerts')
        cy.log("girish")
        cy.window().then(($win) => {
            cy.stub($win, 'prompt').returns('mahsj')
            cy.get('button[onclick="jsPrompt()"]').click()
        })
    })


    it("girisj",function(){

        cy.visit("www.amazon.in")
    })
})
