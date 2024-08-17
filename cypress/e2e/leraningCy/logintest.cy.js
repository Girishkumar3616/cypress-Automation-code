describe("Login to Orange Hrm ", () => {


it("Verify login functionality  ",() => {

cy.visit("/")
cy.get('input[name="username"]').type(Cypress.env("username"))
cy.get('input[name="password"]').type(Cypress.env("password"))
cy.get('button[type="submit"]').click()
cy.contains("Dashboard").should("be.visible")
cy.wait(500)
cy.log("User navigated to dashboard")
cy.get("li[class='oxd-userdropdown']").click()
cy.wait(500)
cy.contains("Logout").click()

})




})