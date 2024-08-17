describe("file upload",()=>{

it("Upload a file",()=>{

cy.visit('http://webdriveruniversity.com/File-Upload/index.html')
cy.get('input[id="myFile"]').attachFile('Girishkumargj.txt')
cy.get('#submit-button').click()
   cy.on('window:simple',function(){
    return true
   }) 
cy.log("file is uploaded succesfully")

})

 
it("Heroku file upload",()=>{
    cy.visit('https://the-internet.herokuapp.com/upload')
cy.get('#file-upload').attachFile('Girishkumargj.txt')
cy.get('#file-submit').click()
cy.get('#uploaded-files').should('have.text','Girishkumargj.txt')
})
//Girish Kumar K B 96 A.pdf

it("download file",function(){

cy.downloadFile("https://upload.wikimedia.org/wikipedia/commons/thumb/7/7a/Mahatma-Gandhi%2C_studio%2C_1931.jpg/640px-Mahatma-Gandhi%2C_studio%2C_1931.jpg","cypress/downloads","gandhi.jpg")
cy.readFile('cypress/download/gandhi.jpg').should('exist')

})
it.only('Cypress Test Case - Understanding Download file', function () {
  
    cy.downloadFile("https://images.unsplash.com/photo-1618281377501-88c2328cbb9a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Z3JlZW4lMjBwYXJyb3R8ZW58MHx8MHx8&w=1000&q=80", "cypress/Raju" , "parrot.jpg" )
    cy.readFile('cypress/Raju/parrot.jpg').should('exist')

  })


  

})