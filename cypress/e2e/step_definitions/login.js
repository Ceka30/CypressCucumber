/// <reference types="Cypress" />
import 'cypress-file-upload'
require('cypress-xpath')
require('cypress-plugin-tab')

const { Given, When, Then } = require("@badeball/cypress-cucumber-preprocessor");


Given("Abrir el navegador con la URL {string}", (paginaWeb)=>{
    cy.visit(paginaWeb)
    cy.title().should('eq', 'Google')
    cy.wait(1000)
})

When("Buscar {string} en buscador", (texto)=>{
    cy.sendKeysXPATH("textarea", "name", "q", texto, "1")
    cy.wait(1000)

    cy.clickButtonXPATH("input", "name", "btnK", "2")
    cy.wait(2000)
})

When("Seleccionar resultado de la busqueda {string}", (texto)=>{
    switch (texto) {
        case "AnimeFLV":
            txt = "Ver Anime Online HD — AnimeFLV"
            url = "https://www3.animeflv.net/"
            break
        case "Crunchyroll":
            txt = "Crunchyroll: Mira animes populares, juega a juegos y compra ..."
            url = "https://www.crunchyroll.com/es/"
            break
        default:
            break
    }

    cy.assertText("h3", "class", "LC20lb MBeuO DKV0Md", "1", txt)
    cy.clickButtonGET("a", "href", url)
})

Then("Ingresar exitosamente a la pagina {string}", (texto)=>{
    switch (texto) {
        case "AnimeFLV":
            titulo = "AnimeFLV"
            break;
        case "Crunchyroll":
            titulo = "Crunchyroll: Mira animes populares, juega a juegos y compra online"
        default:
            break;
    }
    cy.wait(15000)
    cy.title().should('include', titulo)
})

