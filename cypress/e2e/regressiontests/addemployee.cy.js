

import { describe } from "mocha";
import adminP from "../../pageobjects.po.js/admin.cy";
import login from "../../fixtures/logindata.json"
import pimpage from "../../pageobjects.po.js/pim.cy"
describe("Addemp",function(){

it("  dfv",function(){
    cy.loginuser()
    cy.get(adminP.pim()).click()
    cy.get('input[type="checkbox"]').check(["5","4"],{force:true})
    cy.get('input[type="checkbox"]').check(["5","4"],{force:true})

cy.xpath(`(//div[@class="oxd-select-text oxd-select-text--active"]/..//div[text()='-- Select --'])[1]`).should("be.visible").click()
cy.get("div[role='listbox']").contains("Full-Time Contract").click()


cy.get("div[role='listbox']/div").each((jobs)=>{


var jobOptions=jobs.text()
cy.log(jobOptions)
if(jobOptions.contains("Freelance")){
  cy.log(1236)
}

})
})





})