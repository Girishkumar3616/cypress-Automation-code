describe("",function() {


it("Iframe",function(){


    cy.visit("https://jqueryui.com/checkboxradio/")


cy.get('iframe[class="demo-frame"]').then((frame)=>{

// Step 3: Access the contents inside the iframe
// `contents()` method gets the DOM contents of the iframe.
// `find()` is used to locate the specific element inside the iframe.
//we need store the element in a variable 

var radio=frame.contents().find("label[for='radio-1']")
// Step 4: Wrap the found element in a Cypress command chain using `cy.wrap`
// This allows you to interact with the element using Cypress commands
cy.wrap(radio).click()

})

})



})