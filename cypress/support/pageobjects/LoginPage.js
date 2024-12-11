/// <reference types="Cypress" />

import { stdout } from 'nodemon/lib/config/defaults.js'
import LoginElements from '../elements/LogaElements'
import baseparm from '../elements/parametros.js'


const loginElements = new LoginElements
const parametros = new baseparm


class LoginPage {
    acessarSite() {
        cy.visit(parametros.basesUrl)
       
       
    }   
    
    pesquisarTipoProduto() {
        cy.get(loginElements.dropDownCardTodosProdutos()).select(parametros.tipoDropBox,{force: true});
              
    }

    pesquisarProdutosItens() {
        
        cy.get(loginElements.barraPesquisa()).click({force: true});
        cy.get(loginElements.barraPesquisa()).type(parametros.prd2);
    }
    pesquisarProdutosValidos() {
        
        cy.get(loginElements.barraPesquisa()).click({force: true});
        cy.get(loginElements.barraPesquisa()).type(parametros.prd1);
    }
    NaoInformaProdutosValidos() {
        
        cy.get(loginElements.barraPesquisa()).click();
        
    }
    ///********* */
    pesquisarProdutosInvalidos() { 
        
        cy.get(loginElements.barraPesquisa()).click({force: true});
        cy.get(loginElements.barraPesquisa()).type(parametros.buscaProdutoNegativo);
    }///********* */

    botaoPesquisarProdutos() {
        cy.get(loginElements.botaoPesquisar()).click();
    }

    resultadoPesquisa(){
       
      cy.get(loginElements.resultadoPesquisa()).should('be.visible');
    }

    resultadoPesquisaInvalida(){
      cy.get(loginElements.resultadoPesquisaNegativa).contains(parametros.retornoProdutoNegativo);
    }

    resultadoPesquisaTipoProduto(){
        cy.get(loginElements.resultadoPesquisaTipoProduto).contains(parametros.retornoTipoProduto);
      }

      resultadoPesquisaTipoProdutoDescricao(){
        cy.get(loginElements.resultadoPesquisaTipoProduto).contains(parametros.retornoTipoProduto);
      }

    paginaPrincipal(){
        cy.url().should('eq', parametros.basesUrl);  // Verifica se a URL é exata
      }

      paginaTipoDescricao(){
        cy.url().should('eq', parametros.baseurlItem);  // Verifica se a URL é exata
      }

}
export default LoginPage;