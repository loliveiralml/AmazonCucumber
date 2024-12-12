
import { Given, When, Then, And } from "cypress-cucumber-preprocessor/steps"
import LoginPage from '../../support/pageobjects/LoginPage'


const loginPage = new LoginPage;

Given("O usuário está na página inicial", () => {
     loginPage.acessarSite();
    
})

When("Digita o valor 000000erwerwer0000 na barra de pesquisa", () => {
    loginPage.pesquisarProdutosInvalidos();
})

And("Clica no botão de pesquisa", ()=>{
loginPage.botaoPesquisarProdutos();

})

Then("O sistema não exibe resultados relacionados a pesquisa", () => {
    loginPage.resultadoPesquisaInvalida();
})