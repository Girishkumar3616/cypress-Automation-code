describe("tujg",function(){

    it.only("TAB Handling",()=>{

       
        Cypress.on('uncaught:exception',(err,runnable)=>{
        
            return false
        })
        cy.visit("https://www.cypress.io/")
        cy.wait(1000)
        cy.get('a[href="https://on.cypress.io/installing-cypress"]').first().invoke('removeAttr','target').click({force:true})
        cy.url().should("eq","https://docs.cypress.io/guides/getting-started/installing-cypress")
        cy.url().should("include","getting-started/installing-cypress")
        
        cy.go(-1)
        cy.wait(1200)
        cy.go(1)
        })
        
        
})


    it("TABS HANDLING IN CYPRESS", () => {

        // Prevent Cypress from failing the test due to uncaught exceptions
        Cypress.on('uncaught:exception', (err, runnable) => {
            return false;
        });

        // Visit the Cypress website
        cy.visit("https://www.cypress.io/");
        
        // Wait for 1 second to ensure the page is loaded (if needed)
        cy.wait(1000);
        
        // Click the link to the installation guide after removing the 'target' attribute to avoid opening in a new tab
        cy.get('a[href="https://on.cypress.io/installing-cypress"]').first().invoke('removeAttr', 'target').click({ force: true });
        
        // Assert the URL is correct
        cy.url().should("eq", "https://docs.cypress.io/guides/getting-started/installing-cypress");
        cy.url().should("include", "getting-started/installing-cypress");
    });
