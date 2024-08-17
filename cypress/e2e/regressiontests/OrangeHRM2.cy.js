//1.Job title
    import addemployee from "../../fixtures/addemployee.json"

    import  adminP from "../../pageobjects.po.js/admin.cy"  
    import login from "../../fixtures/logindata.json"

    
describe(" Admin Module - Verify Job section ",  () => {
 
  beforeEach("",()=>{

    cy.visit('/')
  })
    
     // cy.get(adminP.dashboard()).should('be.visible'
  
  
// here automatically generat the data 
    let G=(Math.random()+1).toString(36).substring(7);

it.only("Verify Add Job title in Job Section ",() => {

cy.fixture('addemployee.json').then((data)=> {


  


  // User login to applicatoion
 cy.loginuser()

 cy.get('input[placeholder="Search"]').should('be.visible')
 cy.log("User navigated to Dashboard page successfully")
 // here iam handling exception 
 cy.get('a[href="/web/index.php/admin/viewAdminModule"]').click()
 Cypress.on('uncaught:exception', (err, runnable) => {
     return false;
   });
 // user click on job secton in top navigation
 cy.contains('Job').click()
 cy.contains('Job Titles').should('be.visible')
 cy.log("User can able to click on job section options")
 //user click on job titles in Job Section
 cy.wait(1000)
 cy.contains('Job Titles').click()
 // user click on add button
 cy.wait(1000)
 cy.contains('Add').click()
 cy.contains('Add Job Title').should('be.visible')
 cy.log('User navigated to add job title page ')
 // index will start from "0"  not "1"
 cy.get('div > input.oxd-input.oxd-input--active').eq(1).type(addemployee.jobtitle+G) 
 cy.get('textarea[placeholder="Type description here"]').type(addemployee.jobdescription+G)
 cy.wait(500)
 
 cy.get('input[type="file"]').invoke('show')
 //cy.get('#app > div.oxd-layout.orangehrm-upgrade-layout > div.oxd-layout-container > div.oxd-layout-context > div > div > form > div:nth-child(3) > div > div:nth-child(2) > div').selectFile('D:/Girish_Cypress/cypress/fixtures/Girishkumargj.txt');
cy.get('input[type="file"]').attachFile('Girishkumargj.txt',{force :true})
 


 cy.get('textarea[placeholder="Add note"]').type(addemployee.note + G)
 cy.contains(' Save ').click()
 cy.wait(1000)
 cy.contains('Successfully Saved').should('be.visible')
 cy.log("Successfully job title is saved "+ "addemployee.jobtitle")
 cy.get("span[class='oxd-userdropdown-tab']").click()
 cy.contains("Logout").click()
 })

})
   

// 2.PAY GRADE ADDING 
it.only("Verify Add Pay Grade in Job Section ",() =>{
    cy.visit("/web/index.php/admin/payGrade")
     // User login to applicatoion
    cy.loginuser()
    cy.get('input[placeholder="Search"]').should('be.visible')
    cy.log("User navigated to Dashboard page successfully")
    // here iam handling exception 
    cy.get('a[href="/web/index.php/admin/viewAdminModule"]').click()
    Cypress.on('uncaught:exception', (err, runnable) => {
        return false;
      });
    // user click on job secton in top navigation
    cy.contains('Job').click() 
     cy.contains('Job Titles').should('be.visible')
    cy.log("User can able to click on job section options")
    //user click on Pay grade option in Job Section
    cy.wait(1000)
    cy.contains('Pay Grades').click()
    // user click on add button
    cy.wait(1000)
    cy.contains('Add').click()
    cy.contains('Add Pay Grade').should('be.visible')
    cy.log('User navigated to Add Pay grade page ')
    // index will start from "0"  not "1"
    cy.get('div > input.oxd-input.oxd-input--active').eq(1).type(addemployee.paygradename + G)
    cy.contains(' Save ').click()
    cy.wait(1000)
    //cy.contains('Successfully Saved').should('be.visible')
    cy.log("Successfully Pay Grade saved "+ "addemployee.paygradename")
    
     cy.get("span[class='oxd-userdropdown-tab']").click()
     cy.contains("Logout").click()

    })
// 3.Add employee status
it("Verify Add Employee status in Job Section ",() =>{
    cy.visit("/")
     // User login to applicatoion
    cy.loginuser()
    cy.log("User navigated to Dashboard page successfully")
    // here iam handling exception 
    cy.get('a[href="/web/index.php/admin/viewAdminModule"]').click()
    Cypress.on('uncaught:exception', (err, runnable) => {
        return false;
      });
    // user click on job secton in top navigation
    cy.contains('Job').click()
    cy.contains('Job Titles').should('be.visible')
    cy.log("User can able to click on job section options")
    //user click on Employee status option in Job Section
    cy.wait(1000)
    cy.contains('Employment Status').click()
    // user click on add button
    cy.wait(1000)
    cy.contains('Add').click()
    cy.contains('Add Employment Status').should('be.visible')
    cy.log('User navigated to Add Employment Status page ')
    // index will start from "0"  not "1"
    cy.get('div > input.oxd-input.oxd-input--active').eq(1).type(addemployee.statusname + G)
    cy.contains(' Save ').click()
    cy.wait(1000)
    cy.contains('Successfully Saved').should('be.visible')
    cy.log("Successfully  Employment Status saved "+ "empstatus.employeestatus")  
    cy.get("span[class='oxd-userdropdown-tab']").click()
    cy.contains("Logout").click()

    })


//4.Job Category

it("Verify Add Job Category in Job Section ",() =>{
    cy.visit("/")
     // User login to applicatoion
     cy.loginuser()
    cy.log("User navigated to Dashboard page successfully")
    // here iam handling exception 
    cy.get('a[href="/web/index.php/admin/viewAdminModule"]').click()
    Cypress.on('uncaught:exception', (err, runnable) => {
        return false;
      });
    // user click on job secton in top navigation
    cy.contains('Job').click()
    cy.contains('Job Titles').should('be.visible')
    cy.log("User can able to click on job section options")
    //user click on Employee status option in Job Section
    cy.wait(1000)
    cy.contains('Job Categories').click()
    // user click on add button
    cy.wait(1000)
    cy.contains('Add').click()
    cy.contains('Add Job Category').should('be.visible')
    cy.log('User navigated to Add Job Categories page ')
    // index will start from "0"  not "1"
    cy.get('div > input.oxd-input.oxd-input--active').eq(1).type(addemployee.jobcategoryname + G)
    cy.contains(' Save ').click()
    cy.wait(1000)
    cy.contains('Successfully Saved').should('be.visible')
    cy.log("Successfully  Job Categories saved "+ "jobctgry.jobcategoryname")
     cy.get("span[class='oxd-userdropdown-tab']").click()
    cy.contains("Logout").click()
    })

//5.Add Shift Name


it("Verify Add Shift name in Job Section ",() =>{
    cy.visit("/")
     // User login to applicatoion
    cy.loginuser()
    cy.get('input[placeholder="Search"]').should('be.visible')
    cy.log("User navigated to Dashboard page successfully")
    // here iam handling exception 
    cy.get('a[href="/web/index.php/admin/viewAdminModule"]').click()
    Cypress.on('uncaught:exception', (err, runnable) => {
        return false;
      });
    // user click on job secton in top navigation
    cy.contains('Job').click()
    cy.contains('Job Titles').should('be.visible')
    cy.log("User can able to click on job section options")
    //user click on Employee status option in Job Section
    cy.wait(1000)
    cy.contains('Work Shifts').click()
    // user click on add button
    cy.wait(1000)
    cy.contains('Add').click()
    cy.contains('Add Work Shift').should('be.visible')
    cy.log('User navigated to Add Work Shifts page ')
    // index will start from "0"  not "1"
    cy.get('div>input.oxd-input.oxd-input--active').eq(1).click().type(addemployee.shiftname)
    cy.get('input[placeholder="Type for hints..."]').type(addemployee.assignedemployees)
    cy.get("input[placeholder='hh:mm']").eq(0).clear().type(addemployee.from)
    cy.get("input[placeholder='hh:mm']").eq(1).clear().type(addemployee.to)
    cy.contains(' Save ').click()
    cy.wait(1000)
    cy.contains('Successfully Saved').should('be.visible')
    cy.log("Successfully  Work shift is saved "+ "shifts.shiftname"+G)
    cy.get("span[class='oxd-userdropdown-tab']").click()
    cy.contains("Logout").click()
  })
    })

