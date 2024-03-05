// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

Cypress.Commands.add("sendKeysXPATH", (etiqueta, atributo, valor, texto, index) => {
    try {
        let xpath = "(//"+etiqueta+"[@"+atributo+"='"+valor+"'])["+index+"]"
        cy.xpath(xpath).should("be.visible").then(() =>{
            cy.xpath(xpath).clear().type(texto)
        })
    } catch (error) {
        cy.log(error)
    }

})

Cypress.Commands.add("sendKeysGET", (etiqueta, atributo, valor, texto) => {
    try {
        let selector = etiqueta+"["+atributo+"='"+valor+"']"
        cy.get(selector).should("be.visible").then(() =>{
            cy.xpath(xpath).clear().type(texto)
        })
    } catch (error) {
        cy.log(error.texto)
    }

})

Cypress.Commands.add("clickButtonXPATH", (etiqueta, atributo, valor, index) => {
    try {
        let xpath = "(//"+etiqueta+"[@"+atributo+"='"+valor+"'])["+index+"]"
        cy.xpath(xpath).should("be.visible").then(() =>{
            cy.xpath(xpath).click({force: true})
        })
    } catch (error) {
        cy.log(error.texto)
    }

})

Cypress.Commands.add("clickButtonXpathTexto", (etiqueta, atributo, valor, index) => {
    try {
        let xpath = "(//" + etiqueta + "[contains(text(),'" + valor + "')])[" + index + "]"
        cy.xpath(xpath).should("be.visible").then(() =>{
            cy.xpath(xpath).click({force: true})
        })
    } catch (error) {
        cy.log(error.texto)
    }

})

Cypress.Commands.add("clickButtonGET", (etiqueta, atributo, valor) => {
    try {
        let selector = etiqueta+"["+atributo+"='"+valor+"']"
        cy.get(selector).should("be.visible").then(() =>{
            cy.get(selector).click({force: true})
        })
    } catch (error) {
        cy.log(error.texto)
    }

})

Cypress.Commands.add("assertText", (etiqueta, atributo, valor, index, string) => {
    try {
        let xpath = "(//"+etiqueta+"[@"+atributo+"='"+valor+"'])["+index+"]"
        cy.xpath(xpath).should("be.visible").then((val) =>{
            expect(val.text()).to.equal(string)
        })
    } catch (error) {
        cy.log(error.texto)
    }

})

Cypress.Commands.add("assertTextForText", (etiqueta, valor, index, string) => {
    try {
        let xpath = "(//"+etiqueta+"[contains(text(),'"+valor+"')])["+index+"]"
        cy.xpath(xpath).should("be.visible").then((val) =>{
            expect(val.text()).to.equal(string)
        })
    } catch (error) {
        cy.log(error.texto)
    }

})