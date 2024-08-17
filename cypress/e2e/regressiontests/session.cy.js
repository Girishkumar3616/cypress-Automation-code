//1.Job title
import addemployee from "../../fixtures/addemployee.json";
import adminP from "../../pageobjects.po.js/admin.cy"
import login from "../../fixtures/logindata.json";

describe("Admin Module - Verify Job section", () => {
    beforeEach(function () {
        cy.session("login session", () => {
            cy.visit('/');
            cy.get(adminP.Username()).type(login.username);
            cy.get(adminP.password()).type(login.password);
            cy.get(adminP.loginbutton()).click();
            cy.get('input[placeholder="Search"]').should('be.visible')
        });
    
    });
    // Generate unique data
    const G = (Math.random() + 1).toString(36).substring(7);
    it.only("Verify Add Job title in Job Section", () => {
            cy.fixture('addemployee.json').then((data) =>{
            cy.visit('/web/index.php/admin/saveJobTitle');
            cy.log("User navigated to Dashboard page successfully");
            // Handle exceptions
            Cypress.on('uncaught:exception', (err, runnable) => {
                return false;
            });
            cy.get('div > input.oxd-input.oxd-input--active').eq(1).type(data.jobtitle + G);
            cy.get('textarea[placeholder="Type description here"]').type(data.jobdescription + G);
            cy.wait(500);
            cy.get('textarea[placeholder="Add note"]').type(data.note + G);
            cy.contains(' Save ').click();
            cy.wait(1000);
        
        });
    });
    // 2.PAY GRADE ADDING 
    it.only("Verify Add Pay Grade in Job Section", () => {
        cy.visit('/web/index.php/admin/payGrade');
        cy.log("User navigated to Dashboard page successfully");
        // Handle exceptions
        Cypress.on('uncaught:exception', (err, runnable) => {
            return false;
        });
        cy.get('div > input.oxd-input.oxd-input--active').eq(1).type("girisj" + G);
        cy.contains(' Save ').click();
        cy.wait(1000);
    
    });
    
});
