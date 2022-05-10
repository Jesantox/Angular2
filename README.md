![Icone do Framework Angular](https://img.icons8.com/nolan/344/angularjs.png)

<span id='intro'> 
 
### 👉 [DOCUMENTAÇÃO](https://angular.io/)
### 👉 <a href='#sobre'>SOBRE O ANGULAR</a>
### 👉 <a href='#requisitos'>REQUISITOS</a>
### 👉 <a href='#angular-cli'>ANGULAR CLI</a>
### 👉 <a href='#componente'>COMPONENTES</a>
### 👉 <a href='#ciclo-de-vida'>CICLOS DE VIDA</a>
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
  | ngAfterContentlnit()    | Após inserir conteúdo externo na view                                   |
  | ngOnDestroy()           | Antes da diretiva/component ser destruído                               | 
 
                                                                                           <a href='#intro'> back to top ⬆️  </a>
  <br>
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
 
 
