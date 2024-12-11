
import { Given, When, Then } from "cypress-cucumber-preprocessor/steps"
import LoginPage from '../../support/pageobjects/LoginPage'


const loginPage = new LoginPage;

Given("acesso o site CWI", () => {
     loginPage.acessarSite();
     loginPage.clicarbotaoAceitarCookies();
      
})

When("acesso a pagina de login", () => {
    loginPage.clicarBotaoPaginaLogin();
})

Then("devo visualizar botao de recuperar senha esquecida", () => {
    loginPage.visualizarBotaoRecuperarSenha();
})