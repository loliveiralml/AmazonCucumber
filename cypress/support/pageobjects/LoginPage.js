/// <reference types="Cypress" />

import LoginElements from '../elements/LoginElements'


const loginElements = new LoginElements

const url = "https://cwi.com.br"

class LoginPage {
    acessarSite() {
        cy.visit(url)
       
    }
    
    clicarbotaoAceitarCookies() {
        cy.get(loginElements.botaoAceitarCookies()).should('exist')
        cy.get(loginElements.botaoAceitarCookies()).click()
    }
    clicarBotaoPaginaLogin() {
        cy.get(loginElements.botaoLogin()).should('exist')
        cy.get(loginElements.botaoLogin()).click({force: true})
    }
  
    visualizarBotaoRecuperarSenha() {
        cy.get(loginElements.botaoRecuperarSenha()).should('contain', 'Esqueceu sua senha?')
    }
}
export default LoginPage;