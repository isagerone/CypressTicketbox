Cypress.Commands.add('preencherForm', (firstName, lastName, email,) => { 
    cy.get('#first-name').type(firstName)
    cy.get('#last-name').type(lastName)
    cy.get('#email').type(email)   
})

Cypress.Commands.add('preencheOpcoesTicket', (quanTicket, TicketType, howHeardAboutUs) => { 
    cy.get('#ticket-quantity').select(quanTicket)
    cy.get(TicketType).check()
    cy.get(howHeardAboutUs).check()
})

Cypress.Commands.add('confirmaTicket', () => { 
    cy.get('#agree').check()
    cy.get('[type="submit"]').click()
    cy.get('.success').should('be.visible')
})

Cypress.Commands.add('resetButton', () => { 
    cy.get('.reset').click()
    cy.get('#first-name').should('be.empty')
    cy.get('#last-name').should('be.empty')
    cy.get('#email').should('be.empty')
})
