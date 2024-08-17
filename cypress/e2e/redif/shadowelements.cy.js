describe("shadow DOM Element",function(){

it.only("Shados dom ",() =>{
cy.visit("https://www.htmlelements.com/demos/menu/shadow-dom/index.htm")
    //cy.get('.smart-ui-component').shadow().find('smart-menu-items-group[label="File"]').realClick()
cy.get('smart-menu-items-group[label="File"]',{ includeShadowDom: true }).realClick()
})


})
it("new site for Shadow example", ()=>{
    cy.visit('https://www.htmlelements.com/demos/menu/shadow-dom/index.htm')
    //cy.get('').click()
    cy.get('.smart-ui-component').shadow().find('smart-menu-items-group[label="File"]').realClick()


})

