
import { Given, When, Then, And } from "cypress-cucumber-preprocessor/steps"
import LoginPage from '../../support/pageobjects/LoginPage'


const loginPage = new LoginPage;

Given("O usuário está na página inicial", () => {
     loginPage.acessarSite();
    
})

When("Não digito valor deixando a barra de pesquisa vazia", () => {
    loginPage.NaoInformaProdutosValidos();
})

And("Clica no botão de pesquisa", ()=>{
loginPage.botaoPesquisarProdutos();

})

Then("Deve manter-se na pagina principal da amazon.com.br", () => {
    loginPage.paginaPrincipal();
})