![Icone do Framework Angular](https://img.icons8.com/nolan/344/angularjs.png)

<span id='intro'> 
 
### 👉 [DOCUMENTAÇÃO](https://angular.io/)
### 👉 <a href='#sobre'>SOBRE O ANGULAR</a>
### 👉 <a href='#requisitos'>REQUISITOS</a>
### 👉 <a href='#angular-cli'>ANGULAR CLI</a>
### 👉 <a href='#componente'>COMPONENTES</a>
### 👉 <a href='#ciclo-de-vida'>CICLOS DE VIDA</a>
### 👉 <a href='#data-binding'>DATA BINDING</a>
### 👉 <a href='#diretiva-angular'>DIRETIVA ANGULAR</a>
### 👉 <a href='#modulo'>MÓDULOS</a>
### 👉 <a href='#vantagens'>VANTAGENS</a>
 </span>
 
---
 
<details>
 <summary> 
  <span id='sobre'> SOBRE O ANGULAR </span> 
 </summary> <br>
 

  É uma plataforma de aplicações web com código fonte aberto, baseado em Typescript. <br>
  Angular é um dos frameworks Javascript mais populares, pois usamos pra criar sites dinâmicos, <br>
  web app, aplicativos etc, pois é uma aplicação feita de vários componentes reutilizáveis. <br>
  Facilitando assim, o desenvolvimento de nossas aplicações futuras.

  🔶 Angular 2 é uma reescrita completa do Angular JS, feito pela google.

</details>
 
 
<details>
 <summary> <span id='requisitos'> REQUISÍTOS </span> </summary> <br>
 
👉 `node js` [↗️](https://nodejs.org/en/download/)
  👉 `angular-cli` [↗️](https://angular.io/cli)

</details>
 
 
 <details>
  <summary> <span id='angular-cli'> ANGULAR CLI </span> </summary> <br>
 
  É uma interface de linha de comando do Angular. Ferramenta open source <br>
  desenvolvida para facilitar a criação de componentes, classes, services etc...

  ---
 
  🔶 `Gerando estrutura base`
 
  ```
  ng new nomeApp
  ```

  ---
 
  🔶 `Startando aplicação`
 
  ```
  cd nomeApp
  ```
 
  ```
  ng s
  ```

  ---
 
  🔶 `Buildando aplicação`
 
  ```
  cd nomeApp
  ```

  ```
  ng b --prod
  ```
   
                                                                                           <a href='#intro'> back to top ⬆️  </a>
  </details>
 
  <details>
  <summary> <span id='componente'> COMPONENTES </span> </summary> <br>
   
  Angular é baseado em componentes. Com eles, podemos encapsular comportamentos e regras <br>
  da interface, tornando a criação de aplicação simples e eficaz. Inclusive, um componente pode <br>
  encapsular outros componentes, pois é possível dividir a UI em partes independentes, porém <br>
  reutilizáveis. Ou seja, tratamos cada parte da aplicação como um bloco isolado e independente.
   
  Muito útil quando precisamos reutilizar, por exemplo : 
  
  👉 `header`
  👉 `footer`
  👉 `menu-nav`
  👉 `carousel-card`
   
  
  
  <br>
   
  🔶 `Estrutura de um componente`
  
  <a href='#'> <img src='https://img.shields.io/static/v1?label=&message=HTML&color=%23f06529'>       </a>
  <a href='#'> <img src='https://img.shields.io/static/v1?label=&message=SCSS&color=%23cc6699'>       </a>
  <a href='#'> <img src='https://img.shields.io/static/v1?label=&message=TYPESCRIPT&color=%23007acc'> </a>
  
  <br>
   
  🔶 `Gerar um componente`
 
  ```
  ng g c nomeComponent
  ```
   
                                                                                           <a href='#intro'> back to top ⬆️  </a>
  
  </details>
   
  <details>
  <summary> <span id='ciclo-de-vida'> CICLOS DE VIDA </span> </summary> <br>
   
  No Angular, cada componente tem um ciclo de vida, que são diferentes estágios pelos quais ele passa. <br>
  Existem 08 estágios no ciclo de vida de um componente. Cada estágio é um evento chamado. <br>
  Portanto, podemos usá-los em diferentes fases da aplicação para controlar os componentes. <br>

  Como um componente é uma classe TypeScript. Cada componente deve ter um método construtor. <br>
  O construtor é executado, primeiro, antes da execução de qualquer outro evento de ciclo de vida. <br>
   
  Eventos existentes dentro de uma classe : <br><br>
   
  | Eventos                 | Disparos                                                                |
  | ------------------------| ------------------------------------------------------------------------|
  | ngOnChanges()           | Quando um valor property-binding `@input()` ou `@output()` é atualizado |
  | ngOnInit()              | Quando o componente é inicializado                                      |
  | ngDoCheck()             | A cada ciclo de verificação de mudanças                                 |
  | ngAfterContentlnit()    | Após inserir conteúdo externo na view                                   |
  | ngAfterContentChecked() | A cada verificação de conteúdo inserido                                 |
  | ngAfterViewChecked()    | A cada verificação de conteúdo/conteúdo filho                           |
  | ngOnDestroy()           | Antes da diretiva/component ser destruído                               | 
 
                                                                                           <a href='#intro'> back to top ⬆️  </a>
  <br>
  </details>
 
  <details>
  <summary> <span id='data-binding'> DATA BINDING </span> </summary> <br>
 
  É uma forma de exibir dados em seu component HTML, <br>
  nada mais do que trabalhar com dados. <br> <br>
 
  🔶 `Interpolation`

  A interpolação de texto permite que você incorpore valores <br>
  das class TS dentre chaves em seu modelo HTML. <br> <br>
 
  🔶 `Property Binding`
 
  Ajuda a definir valores dentre colchetes para elementos ou diretivas HTML. <br> <br> 
 
  🔶 `Event Binding`
 
  É a associação de eventos que permite você escutar e responder às ações do usuário, <br> 
  como pressionamentos de tecla, movimentos do mouse, cliques e toques. <br> <br> 
 
  🔶 `TWO-WAY Binding`
 
  É a união do property-binding com event-binding. Use para ouvir eventos <br>
  e atualizar valores simultaneamente entre os componentes pai e filho. <br>
 
  </details>
  
  <details>
  <summary> <span id='diretiva-angular'> DIRETIVA ANGULAR </span> </summary> <br>
 
  São classes que incrementam comportamento adicional aos elementos em aplicativos Angular. <br>
  Com isso, podemos gerenciar formulários, listas, estilos e oque os usuários vêem. Ou seja, <br>
  manipulamos o `DOM` do nosso HTML. Conseguimos ocultar, mostrar, iterar uma lista etc... <br><br>
 
  👉 <a href='https://angular.io/api/core/ng-template'> 
         <strong> *ng-template </strong> 
       </a> : Permite ter o controle total sobre como e quando o conteúdo é exibido <br>
 
  👉 <a href='https://angular.io/api/core/ng-content'> 
         <strong> *ng-content </strong> 
       </a> : Permite posicionar elementos dentro de um componente selecionando-o <br>
 
  👉 <a href='https://vidafullstack.com.br/angular/o-que-e-um-pipe-angular/'> 
         <strong> pipes </strong> 
       </a> : Permite formatar dados diretamente no HTML chamando o `|`<br><br>
 
 
  🔶 `diretiva estrutural` <br>
 
  Responsável por moldar ou remodelar a estrutura do DOM, adicionando, removendo e <br>
  manipulando os elementos do host aos quais estão anexados. <br>
 
  👉 <a href='https://angular.io/api/common/NgIf'> 
         <strong> *ngIf </strong>
     </a> : Condicionalmente cria ou descarta visualizações do modelo. <br>
 
  👉 <a href='https://angular.io/api/common/NgForOf'> 
         <strong> *ngFor </strong>
     </a> : Repete um nó para cada item de uma lista. <br>
 
  👉 <a href='https://angular.io/api/common/NgSwitch'> 
         <strong> *ngSwitch </strong>
     </a> : Um conjunto de diretivas que alternam entre visões alternativas. <br><br>
 
 
  🔶 `diretiva atributo` <br>
 
  Responsável por alterar a aparência ou comportamento <br>
  de um elemento, componente ou outra diretiva. <br>

   👉 <a href='https://angular.io/api/common/NgClass'> 
         <strong> *ngClass </strong>
     </a> : adiciona e remove um conjunto de classes CSS <br>
 
  👉 <a href='https://angular.io/api/common/NgStyle'> 
         <strong> *ngStyle </strong>
     </a> : adiciona e remove um conjunto de estilos HTML <br>
 
  👉 <a href='https://angular.io/api/common/NgModel'> 
         <strong> *ngModel </strong>
     </a> : adiciona vinculação de dados bidirecional a um elemento de formulário HTML <br><br>
  </details>
  
  <details>
  <summary> <span id='modulo'> MÓDULOS </span> </summary> <br>
 
  É um mecanismo que agrupa componentes, diretivas, pipes e serviços, <br>
  de forma a combinar com outros módulos para criar um aplicativo. <br>
 
  Uma aplicação angular é como se fosse um quebra-cabeça. Onde cada bloco tem como <br>
  objetivo fornecer uma funcionalidade ou recurso específico. Deixando assim, a aplicação <br>
  mais limpa, rápida e robusta
 
 🔶 `anatomia do NgModule` <br>
 
 ```
 @NgModule({
 declarations: [], // declarar nossos componentes dentro do módulo específico
 imports: [], // importar funcionalidades externas ou componente de outro módulo
 exports: [], // quando precisamos reutilizar um componenete e suas funcionalidaddes em outro módulo
 providers: [], // declarar serviços como : requisição ao backend, requisições externas
 bootstrap: [] // só se deve usar uma única vez, que é no componente principal
 })
 ```
 
 🔶 `criando Sub-modules`
 
 ```
 ng g m 'name'
 ```
 
 🔶 `criando componente no Sub-modules`
 
 ```
 ng g c 'name/componentName'
 ```
 
  </details>
 
  <details>
  <summary> <span id='vantagens'> VANTAGENS </span> </summary> <br>
   
  ✔️ Testes; <br>
  ✔️ Flexibilidade; <br>
  ✔️ Produtividade; <br>
  ✔️ Documentação extensa; <br>
  ✔️ Mercado de trabalho bombando; <br>
  ✔️ Aplicativos de página única `SPA` ; <br>
  ✔️ Compatibilidade com Desktop e smartphone; <br>
   
                                                                                           <a href='#intro'> back to top ⬆️  </a>
  </details>
 
 
