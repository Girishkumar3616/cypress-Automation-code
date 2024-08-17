
import data from "../../../fixtures/exceltojson/testdata.json"
import login from "../../../fixtures/logindata.json"
import adminP from "../../../pageobjects.po.js/admin.cy"
describe("data drive test case",()=>{

    data.forEach((data)=>{
it("Test case",()=>{
cy.visit("/")
cy.get(adminP.Username()).type(data.username)
cy.get(adminP.password()).type(data.password)
cy.get(adminP.loginbutton()).click()

if(cy.get(adminP.dashboard()).length >0){
cy.log("dashboard is visible")
}else{
    cy.log("dashboard is not visible")

}
    })
    
})


})