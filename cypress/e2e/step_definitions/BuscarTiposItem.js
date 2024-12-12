
import { Given, When, Then, And } from "cypress-cucumber-preprocessor/steps"
import LoginPage from '../../support/pageobjects/LoginPage'


const loginPage = new LoginPage;

Given("O usuário está na página inicial", () => {
     loginPage.acessarSite();
     
    
})

When("Não digito nenhum valor deixando a barra de pesquisa vazia", () => {
    loginPage.pesquisarTipoProduto();
})

And("Clica no botão de pesquisa", ()=>{
loginPage.botaoPesquisarProdutos();

})

Then("Deve apresentar varios itens obdecendo categoria de busca parametrizada", () => {
    loginPage.resultadoPesquisaTipoProduto();
})