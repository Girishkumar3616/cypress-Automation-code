describe("File Download Test", () => {
    it("should download a file", function() {
      cy.downloadFile(
        "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7a/Mahatma-Gandhi%2C_studio%2C_1931.jpg/640px-Mahatma-Gandhi%2C_studio%2C_1931.jpg", "cypress/downloads","gandhi.jpg" 
        // The name to give the saved file
      );
      
      // Verify that the file exists
      cy.readFile('cypress/downloads/gandhi.jpg').should('exist');
    });
  });
