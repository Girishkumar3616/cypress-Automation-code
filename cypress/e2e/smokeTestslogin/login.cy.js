
import pim from "../../pageobjects.po.js/pim.cy"

import adminP from "../../pageobjects.po.js/admin.cy"
import addemp from "../../fixtures/addemployee.json"
describe ("Verify Add job title ",function(){

let G=(Math.random()+1).toString(36).substring(3);
it.only("Adding the new job title",function(){
cy.visit("/")
cy.wait(1000)
cy.get(adminP.Username()).type(Cypress.env("username"))
cy.get(adminP.password()).type(Cypress.env("password"))
cy.get(adminP.loginbutton()).click()
cy.wait(500)
cy.contains(adminP.admin()).click()
cy.contains(adminP.jobOption()).click()
cy.contains(adminP.JobTitles()).click()
cy.get(adminP.submitbuttton()).contains("Add").click()
cy.get(adminP.jobTittleinpuField()).eq(1).type(addemp.jobtitle + G)
cy.get(adminP.jodDescription()).type(addemp.jobdescription+G)
//cy.get(login.browseFile()).selectFile(filePath)
cy.get(adminP.jodDescription()).type(addemp.jobdescription+G)
cy.get(adminP.addNote()).type(addemp.note+G)
cy.get(adminP.saveButton()).click()
cy.get(adminP.profileOptn()).click()
cy.get(adminP.loginbutton()).click()

})

it("Add the new employee with unique data",function(){
cy.visit("/")
cy.wait(1000)
cy.get(adminP.Username()).type(Cypress.env("username"))
cy.get(adminP.password()).type(Cypress.env("password"))
cy.get(adminP.loginbutton()).click()
cy.wait(500)
cy.contains(adminP.pim()).click()
cy.contains(adminP.AddEmployee()).click()
cy.get(adminP.fristName()).type(addemp.fristname+G)
cy.get(adminP.lastName()).type(addemp.lastname+G)
cy.get(adminP.middleName()).type(addemp.middlename+G)
cy.get(adminP.empID()).clear()
cy.get(adminP.empID()).type(addemp.employeeid+G)
cy.get(adminP.saveButton()).click()
cy.get(adminP.profileOptn()).click()
cy.get(adminP.loginbutton()).click()

})

})







