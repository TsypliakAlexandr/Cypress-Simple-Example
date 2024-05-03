describe('template spec', () => {
  it('Open site and find project', () => {
    cy.visit('https://www.innovationukraine.com/')
    cy.get('[class="menu-main-container"] [href="https://www.innovationukraine.com/shop/"]').click()
    cy.get('[class="flex et_b_search-icon  et-toggle pointer"]').click()
    cy.wait(2000)
    cy.get('[class="search-content-head"] [placeholder="Search for..."]').type('Digital innovation accelerator')//
    cy.wait(5000)
    cy.get('[class="ajax-results-title products-title full-width loaded"]').should(($e) => {
      expect($e).to.have.text('1 Products found')
    })
    cy.wait(5000)
    cy.get('[class="autocomplete-suggestions"] [class="product-title"] a').click()
    cy.wait(5000)
    cy.get('[class="product_title entry-title"]').should(($e) => {
      expect($e).to.have.text('Digital innovation accelerator')
    })
  })
})