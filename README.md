# Teste iCasei: Front-End
Desenvolver uma aplicação HTML5.

## Instruções
- Siga as especificações abaixo.
- Crie um README com as instruções para compilar, testar e rodar o projeto.
- O link do repositório deverá ser enviado para o e-mail frontend@icasei.com.br com o título **Teste FrontEnd 2024**.

## Especificações funcionais da aplicação
Criar duas aplicações micro-frontend (no wireframe, mf_drawer e mf_videos)
A aplicação MF_DRAWER deve ter dois links, VÍDEOS E FAVORITOS e a aplicação MF_VIDEOS deve conter a busca e listagens.
  - VÍDEOS:
    - Ao acessar, o usuário deve poder buscar vídeos através de um campo de busca, onde ele deve informar termos que serão utilizados para buscar vídeos na API do YouTube e listar conforme wireframe.
    - O usuário pode reproduzir o vídeo e marcar como favorito.
    - Ao cliclar no botão de estrela, deve adicionar/remover da lista de favoritos e alterar o contador de total de vídeos na lista de favoritos.
  - FAVORITOS:
    - Ao clicar em FAVORITOS, deve exibir a lista de vídeos marcados como favorito.

### Base de Wireframe
[Wireframe](/wireframe/wireframe.png)

## Especificações tecnicas
- Ultilizar como sujestão algumas dessas opções para controle de sessão e BFF
  - [Node.js](https://nodejs.org/en/) 
  - [Go](https://go.dev/)
  - [Ruby](https://www.ruby-lang.org/pt/)
  - Qualquer outra linguagem back end também será aceita

- Utilizar a [API de busca do YouTube](https://developers.google.com/youtube/v3/docs/search/list)
- Desing responsivo
- Navegação por rotas é requerida
- Não utilizar framework JS (React, Vue, Angular ou frameworks relacionados)
- Cores livres, layout livre, imagens livres
- CSS nativo ou LESS, SASS e afins são permitidos
- Código deve ser tipado
- Utilizar microfront para cada aplicação com BFF
- Utilizar docker para microfronts e BFF
- Obrigatório testes unitários

## Observações
- Observar padrões e boas práticas de arquitetura 
- Para consumir os dados desta [API](https://developers.google.com/youtube/v3/docs/search/list), você deve gerar sua api_key de aplicação neste [link](https://developers.google.com/youtube/v3/getting-started?hl=pt-br).

## O que será avaliado?
- Organização do projeto
- Lógica do código
- Uso do Git
- Componentização
- Usabilidade/Acessibilidade
