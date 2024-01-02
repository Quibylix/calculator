describe("app test", () => {
  it("shows a calculator", () => {
    cy.visit("/");

    cy.get("[data-testid=calculator]").should("exist");
  });
});
