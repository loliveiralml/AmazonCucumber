
import { Given, When, Then, And } from "cypress-cucumber-preprocessor/steps"
import LoginPage from '../../support/pageobjects/LoginPage'


const loginPage = new LoginPage;

Given("O usuário está na página inicial", () => {
     loginPage.acessarSite();
     
    
})

When("O usuário digita Casa da barbie na barra de pesquisa", () => {
    loginPage.pesquisarProdutosValidos();
})

And("Clica no botão de pesquisa", ()=>{
loginPage.botaoPesquisarProdutos();

})

Then("O sistema exibe resultados relacionados a pesquisa", () => {
    loginPage.resultadoPesquisa();
})