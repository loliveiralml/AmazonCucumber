Feature: Barra de Pesquisa
Como um usuário de um e-commerce 
  Eu quero realizar buscas através da barra de pesquisa da pagina principal
  Para que eu possa realizar a escolha de produtos e realizar minha compra de forma eficiente

  Scenario: Pesquisa com uma palavra-chave válida
    Given O usuário está na página inicial
    When O usuário digita Casa da barbie na barra de pesquisa
    And Clica no botão de pesquisa
    Then O sistema exibe resultados relacionados a pesquisa

  Scenario: Pesquisa com termo inválido
    Given O usuário está na página inicial
    When Digita o valor 000000erwerwer0000 na barra de pesquisa
    And Clica no botão de pesquisa
    Then O sistema não exibe resultados relacionados a pesquisa

  Scenario: Pesquisa sem digitar nada
    Given O usuário está na página inicial
    When Não digito valor deixando a barra de pesquisa vazia
    And Clica no botão de pesquisa
    Then Deve manter-se na pagina principal da amazon.com.br

  Scenario: Pesquisa Todos os itens sem digitar nada
    Given O usuário está na página inicial
    When Não digito nenhum valor deixando a barra de pesquisa vazia
    And Clica no botão de pesquisa
    Then Deve apresentar varios itens obdecendo categoria de busca parametrizada  
@corrigir
    Scenario: Pesquisa itens digitando produto
    Given O usuário está na página inicial
    When Digito um valor na barra de pesquisa
    And Clica no botão de pesquisa
    Then Deve apresentar varios itens obdecendo categoria de busca parametrizada e o valor digitado na barra de pesquisa

