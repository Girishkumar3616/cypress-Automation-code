describe("naukri reaume upload",()=>{

it("Uplaode a resume",()=>{



    cy.visit("https://www.naukri.com/")
    cy.get('#login_Layer').click()
    cy.get('input[placeholder="Enter your active Email ID / Username"]').type("girishkumarkb96@gmail.com")
    cy.get('input[type="password"]').type('Girish@234')
    cy.get('a[type="submit"]').click()
})


})