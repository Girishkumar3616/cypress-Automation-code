
import cypress from "cypress"
import red from "../../pageobjects.po.js/rediffpom.cy"
import redf from "../../pageobjects.po.js/rediffpom.cy"

describe("Rediff Regester ",function(){
it("Regester",()=>{
cy.visit("https://register.rediff.com/register/register.php?FormName=user_details")
cy.get(redf.inputName()).type("Girish",{delay:20})
cy.get(redf.inputlogin()).type("girishkumar89@mail.com")
cy.get(redf.DOBday()).select(25)
cy.get(redf.DOBMon()).select([5])
cy.get(redf.DOBYear()).select("2020")
cy.get(redf.female()).click()
cy.get(redf.checkbox()).should('be.visible')
cy.get(redf.checkbox()).should('exist')
cy.wait(1000)
cy.get(redf.checkbox()).check()
if(cy.get(redf.checkbox()).should('be.checked').and('be.visible')){
cy.log("Check box is checked and visible ")
}
cy.wait(1000)
cy.get(redf.checkbox()).uncheck()

if(cy.get(redf.createbutton()).should('be.visible')){
 //   cy.get(redf.createbutton()).dblclick()
cy.log("girish button is enabled")
}
if(cy.get(redf.checkbox()).should('be.visible')){
    cy.log("girish button is visible")
}
cy.get(redf.checkbox()).dblclick()
// Text select
cy.get(redf.DOBMon()).select('APR').should("have.value",'04')
// Value
cy.wait(1000)
cy.get(redf.DOBMon()).select('06').should("have.value",'06')
// Indexing
cy.wait(1000)
cy.get(redf.DOBMon()).select(12).should("have.value",'12')
cy.xpath(`//select[contains(@name, 'DOB_Month')]/option`).each((months)=>{
var month=months.text()
cy.log(month)
})
cy.xpath(redf.monthsoptions()).each((mons)=>{
var monts=mons.text()
cy.log(monts)
})
})


it.only("TAB Handling",()=>{

cy.visit("https://www.cypress.io")
Cypress.on('uncaught:exception',(err,runnable)=>{

    return false
})
cy.wait(1000)
cy.get('a[href="https://on.cypress.io/installing-cypress"]').first().invoke("removeattr","target").click({force:true})
cy.url().should("eq","https://docs.cypress.io/guides/getting-started/installing-cypress")
cy.url().should("include","getting-started/installing-cypress")

})








})