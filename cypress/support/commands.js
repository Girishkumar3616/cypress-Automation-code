// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

import 'cypress-file-upload';
import 'cypress-iframe';
require('@4tw/cypress-drag-drop')
import 'cypress-file-upload';

require('cypress-downloadfile/lib/downloadFileCommand')
import adminP from "../pageobjects.po.js/admin.cy"
import login from "../fixtures/logindata.json"
Cypress.Commands.add('loginuser',() => {
   // cy.visit("/")
    cy.get(adminP.Username()).type(login.username)
    cy.get(adminP.password()).type(login.password)
    cy.get(adminP.loginbutton()).click()
    cy.get(adminP.dashboard()).should('be.visible')
})