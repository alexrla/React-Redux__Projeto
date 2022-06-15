# Redux

- **Não faz parte diretamente do React (não vem junto com o React);**
- **É uma biblioteca JavaScript, totalmente separada do React;**
- **Com Redux, conseguimos ter controle dos estados das nossas aplicações, de forma global;**
- **Estados globais:**
  - **Quando possuem mais de um dono;**
  - **Quando ele é manipulado por mais componentes;**
  - **Quando as ações do usuário em outros componentes, causa efeitos nos estados;**



### Arquitetura

- **Action (ação disparada quando clicamos em algo - um objeto): deve ter um type (e podemos passar uma informação);**
- **Redux Store: dentro dela temos os reducers;**
- **Reducers: dentro dos reducers temos os estados e, quando a ação for diparada, o reducer vai estar ouvindo essas ações (os componentes podem ouvir a Store);**



### OBS.:

- **O Redux é um controlador de estados geral, para a nossa aplicação;**

- **O Redux é basicamente dividido em três partes:**

  - **Store: conjunto de estados da aplicação (um objeto JavaScript que possui todos os estados dos nossos componentes);**
  - **Reducers: cada dado da store, deve ter o seu próprio reducer (um reducer é encarregado de lidar com todas as ações, como algum componente pedindo para alterar algum dado da store);**
  - **Actions: são responsáveis por reqisitar algo para um reducer. Elas devem apenas enviar os dados ao reducer (nada além disso), que vai receber e usar esses dados;**




### Código

- **`{ Provider } from 'react-redux'`: deixa o Redux acessável e todos os componentes vão poder acessar suas propriedades, conteúdos e reducers;**
- **O Provider espera que passemos uma store;**
- **Não podemos criar uma store, sem que ela tenha pelo menos, um Reducer;**
- **Não é uma boa prática criar um Reducer, na própria configuração da Store;**
- **Root Reducer: combinar todos os módulos (reducers) que temos e passar para a store;**
- **`import { combineReducers } from 'redux'`: combina todos os Reducers que passamos para ele;**
- **`import { useDispatch } from 'react-redux'`: responsável pelo disparo de uma ação para o Redux;**
- **O Reducer, por padrão, tem uma state e as actions;**
- **Os dados que mandamos pelo dispatch, vão para o Reducer;**
- **`import { useSelector } from 'react-redux'`: responsável por conectar o Redux, aos Reducers;**
- **O state é imutável;**
- **Geralmente usamos `async function` para funções assícronas (ela espera a requisição antes de partir para a próxima instrução), mas podemos usar o generator: `function*`, que é tido como "mais poderoso";**
- **Com o uso do generator, ao invés do `await`, usamos o `yield`;**
- **`import { call } from 'redux-saga/effects'`: fazer requisições;**
- **`import { put } from 'redux-saga/effects'`: disparar actions;**
- **`import { all } from 'redux-saga/effects'`: disparar listeners (para quê se possa ficar ouvindo);**
- **`import { takeLatest } from 'redux-saga/effects'`: pega a última requisição;**
- **`import { select } from 'redux-saga/effects'`: com ele conseguimos fazer um side effect e pegar todo o state;**
- **Toda vez que utilizamos um side effect, usamos em conjunto com o `yield`;**



### Immer

- **Biblioteca que nos ajuda a trabalhar com imutabilidade;**
- **Temos o estado (state) e o "rascunho" dele, one trabalharemos nesse estado, através do seu rascunho;**



### Redux Saga

- **Trabalhar com side effects;**
- **É um Middleware;**
- **Disparamos um action, a action vai ser ouvida pelo redux-saga, o redux-saga, por exemplo, vai fazer o side effect (buscar algo de uma api) e o redux-saga pode ainda disparada uma action para o Reducer;**
- **Trabalhamos com o Redux Saga, quando queremos trabalhar com funções assíncronas, fazer requisições https, quando queremos utilizar um middleware ou quando queremos fazer uma verificação antes de chegarmos nos nossos Reducers;**

