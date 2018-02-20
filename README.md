<h3> Desafio Angular </h3>

<h4>Contexto</h4>
<p>Você trabalha em uma empresa de desenvolvimento de software onde um cliente necessita gerenciar os projetos de uma empresa prestadora de serviços.</p>
<p>Este cliente entende que a utilização de um software web poderá ajudar nesta tarefa, mas não conseguiu descrever com detalhes os requisitos de cada funcionalidade. Na seção “Escopo” estão as funcionalidades que o cliente passou como necessárias para a aplicação.</p>

<h4>Orientações</h4>
<ul>
    <li>Você terá que desenvolver uma aplicação web responsiva com as funcionalidades solicitadas e depois deverá apresenta-las ao cliente;</li>
    <li>As telas do sistema podem ser criadas de acordo com o seu entendimento, de forma que facilite a utilização pelos usuários;</li>
    <li>A aplicação deve ser desenvolvida utilizando o framework Angular;</li>
    <li>Você deve utilizar a componentização do Angular Material;</li>
    <li>Para deixar o sistema responsivo deve-se utilizar o pacote Angular Flex Layout;</li>
    <li>Pode-se utilizar as bibliotecas utilitárias Lodash e Moment;</li>
    <li>O sistema deve ser estruturado seguindo o style guide do próprio Angular;</li>
    <li>A API para consultar, cadastrar, editar e remover informações está disponibilizada no seguinte endereço: https://github.com/mvmjacobs/challenge-one-api;</li>
</ul>

<h4>Escopo</h4>

<h5>Cadastro de Colaboradores</h5>

<ul>
    <li>Nome (texto livre; obrigatório)</li>
    <li>E-mail (texto livre; obrigatório)</li>
    <li>Telefone (texto livre)</li>
    <li>Data de Nascimento (data válida)</li>
    <li>Carga Horária (número inteiro)</li>
    <li>Escolaridade (opções: ensino fundamental, ensino médio, ensino superior, pós-graduação lato sensu, mestrado e doutorado)</li>
</ul>

<h5>Cadastro de Projetos</h5>

<ul>
    <li>Nome (texto livre; obrigatório)</li>
    <li>Data de Início (data válida; obrigatório)</li>
    <li>Data de Conclusão (data válida)</li>
    <li>Colaborador Responsável (colaborador cadastrado; obrigatório)</li>
    <li>Descrição (texto longo)</li>
    <li>Equipe (lista de colaboradores e a alocação em horas diária de cada um)</li>
</ul>
<h5>Regras de Negócio</h5>

<ul>
    <li>Deverá ser possível cadastrar vários colaboradores e vários projetos</li>
    <li>Não deve ser permitido cadastrar dois colaboradores com o mesmo e-mail</li>
    <li>Nenhum colaborador deve ser responsável por dois projetos ao mesmo tempo, ou seja, os projetos de um mesmo colaborador não devem ter intercessão</li>
    <li>Deverá ser possível realizar buscas na listagem de colaboradores e projetos</li>
    <li>Deverá ser armazenada a data/hora de cadastro dos colaboradores/projetos e na listagem exibido desde quando o registro está cadastrado</li>
    <li>A carga horário alocada para a equipe no projeto não deve ultrapassar a carga horário do colaborador;</li>
</ul>