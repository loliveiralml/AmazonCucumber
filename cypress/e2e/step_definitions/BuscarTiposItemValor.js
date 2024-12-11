
import { Given, When, Then, And } from "cypress-cucumber-preprocessor/steps"
import LoginPage from '../../support/pageobjects/LoginPage'


const loginPage = new LoginPage;

Given("O usuário está na página inicial", () => {
     loginPage.acessarSite();
     
    
})

When("Digito um valor na barra de pesquisa", () => {
    loginPage.pesquisarTipoProduto();
    loginPage.pesquisarProdutosItens();
})

And("Clica no botão de pesquisa", ()=>{
loginPage.botaoPesquisarProdutos();

})

Then("Deve apresentar varios itens obdecendo categoria de busca parametrizada e o valor digitado na barra de pesquisa", () => {
    loginPage.paginaTipoDescricao();
})