
import trellopages from "../../pageobjects.po.js/trello.po"
describe("To verify Board creation in Trello", function () {
    var g = (Math.random() + 1).toString(36).substring(7)
    it("Board Creation in Trello", function () {
        cy.visit('https://trello.com/')
        cy.get('a[data-uuid="MJFtCCgVhXrVl7v9HA7EH_login"]').click()
        cy.origin('https://id.atlassian.com', () => {
            cy.get("input[autocomplete='username']").type("girigirish419@gmail.com")
            cy.get("#login-submit").click()
            cy.get("#password").type("8977306313")
            //input[autocomplete='username
            cy.get("#login-submit").click()
        })
        cy.get('li[data-testid="create-board-tile"]').click()
        cy.log("----456-----")
        cy.get('input[type="text"]').type("Types of testings" + g)
        cy.get('button[data-testid="create-board-submit-button"]').click()
        cy.wait(2000)
        cy.get('span[data-testid="CloseIcon"]').click()
        cy.get('button[data-testid="list-composer-button"]').click()
        cy.get('textarea[name="Enter list name…"]').type("List A")
        cy.get('button[data-testid="list-composer-add-list-button"]').click()
        cy.get('textarea[name="Enter list name…"]').type("List B")
        cy.get('button[data-testid="list-composer-add-list-button"]').click()
        cy.get('button[data-testid="list-add-card-button"]').first().click()
        cy.get('textarea[data-testid="list-card-composer-textarea"]').type("Smoke Test")
        cy.get('button[data-testid="list-card-composer-add-card-button"]').click()
        cy.get('textarea[data-testid="list-card-composer-textarea"]').type("Sanity Test")
        cy.get('button[data-testid="list-card-composer-add-card-button"]').click()
        cy.get('button[data-testid="list-add-card-button"]').last().click()
        cy.get('textarea[data-testid="list-card-composer-textarea"]').type("regression test")
        cy.get('button[data-testid="list-card-composer-add-card-button"]').click()
        cy.get('textarea[data-testid="list-card-composer-textarea"]').type("Re-Test")
        cy.get('button[data-testid="list-card-composer-add-card-button"]').click()
        cy.wait(1233)
        // cy.get("a[href$='smoke-test']").drag('div[data-testid="list"]').then(() =>{
        // })
        cy.get('div[data-testid="trello-card"]').eq(1).invoke('outerHeight').then((height) => {
            var h = { height }
            cy.log("Height of the Card" + " = " + height)
        })
        cy.get('div[data-testid="trello-card"]').eq(1).invoke('outerWidth').then((width) => {

            cy.log("Width of the Card" + " =  " + width)
        })
        const dataTransfer = new DataTransfer()
        cy.get('div[data-testid="trello-card"]').eq(1).trigger('dragstart', {
            dataTransfer
        })
        cy.get('div[data-testid="list"]').eq(1).trigger('drop', { force: true }, {
            dataTransfer
        })
    })
    /* cy.get('selector-for-draggable-element')
  .trigger('mousedown', { which: 1 })
  cy.get('selector-for-target-location')
  .trigger('mousemove', { which: 1 }) // Simulate dragging the element
  .trigger('mouseup', { force: true }); /
cy.get('selector').invoke('outerHeight').then((height) => {
  cy.log(`Height: ${height}`);
});
cy.get('selector').invoke('outerWidth').then((width) => {
  cy.log(`Width: ${width}`);
});
  */






})


/* cy.visit("https://trello.com")
        cy.get(login.loginbutton()).click()
    cy.origin("https://id.atlassian.com/",() => {
        cy.get(login.usernameinputfield()).type('girigirish419@gmail.com')
        cy.get(login.login_Continue()).click()
        cy.get(login.passwordinputfield()).should('be.visible').type(data.password)
        cy.get(login.login_Continue()).click()
        cy.get(login.trelloAppicon()).click()
         */