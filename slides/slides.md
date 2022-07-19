---
theme: default
layout: intro
fonts:
  sans: 'Roboto'
  mono: 'JetBrains Mono'
highlighter: shiki
title: 'Testes no front-end usando Vitest e Vue Test Utils'
lineNumbers: false
drawings:
  persist: false
---

# Vitest Workshop

## A blazing fast unit-test framework powered by [Vite](https://main.vitejs.dev)

<style>
  h1 {
    @apply font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-green-500 to-blue-500;
  }
</style>

---

## Introdução - TDD

A sigla TDD é uma abreviação para o termo *Test* *Driven* *Development* (Desenvolvimento Orientado a Testes) e trata-se de uma prática de desenvolvimento de software onde a **codificação das funcionalidades começa a partir da escrita de testes unitários**.

## História ⌛

O TDD foi "criado" por [Kent Beck](https://pt.wikipedia.org/wiki/Kent_Beck) por volta dos 1990, período no qual as metodologias ágeis para desenvolvimento de software começaram a ganhar força.

---
layout: two-cols
---

## Ciclo do TDD

O ciclo do desenvolvimento com base no TDD consiste em **três etapas**:

<div class="flex flex-col justify-start items-start">
  <p class="flex items-center">
    <pre class="text-red-500 font-semibold">red: </pre>
    Escreve o teste falhando.
  </p>

  <p class="flex items-center">
    <pre class="text-green-500 font-semibold">green: </pre>
    Implementa a solução.
  </p>

  <p class="flex items-center">
    <pre class="text-yellow-500 font-semibold">yellow: </pre>
    Refatoração do código
  </p>
</div>

::right::

<img
  class="!h-[240px] mx-auto mt-20"
  src="https://www.programonaut.com/wp-content/uploads/2021/08/TDD.png"
  alt="Ciclo do TDD"
/>

---
layout: two-cols
---

## Tipos de testes

A pirâmide de testes elaborada pelo arquiteto de software Martin Fowler mostra que no TDD existem três tipos de testes:

- 📦 **Testes de unidade**
- ⚙️ **Testes de integração**
- 🔁 **Testes E2E**

::right::

<img src="/assets/piramide-testes.png" alt="Pirâmide de testes" />

---

## Vantagens de aplicar o TDD ✅

A prática do TDD visa auxiliar os desenvolvedores nos seguintes aspectos:

- 💩 Correção de bugs
- 📃 Documentação
- ✍️ Refatoração
- 🔨 Legibilidade e Manutenção
- 🤩 Evita redundância de código
- 🔃 Auxilia nos teste de regressão

<style>
  p {
    @apply opacity-50;
  }
</style>

---

## Setup de testes utilizando o Vitest

O Vitest, assim como Jest, Chai e Mocha, é um framework que auxilia na criação de teste unitários.

### Vantagens

Ao utilizar o Vitest temos alguns benefícios:

- ⚡ Vite Powered
- 🥰 Jest Compatible
- 🧠 Smart & instant watch mode
- 💪 ESM, Typescript, JSX support
- 📦 Components testing for Vue, React, Svelte, Lit etc
- ✔️ Native code coverage via c8

<br>
<br>

E para complementar o setup vamos utilizar o [Vue Test Utils](https://test-utils.vuejs.org/) para testar os componentes **Vue**.

<style>
  h2 {
    @apply text-transparent bg-clip-text bg-gradient-to-r from-green-500 to-blue-500;
  }

  h3 + p {
    @apply opacity-50;
  }

  strong {
    @apply text-green-500;
  }
</style>

---
layout: statement
---

<div class="absolute inset-0 bg-gradient-to-br from-green-500 to-blue-500 !text-white flex flex-col items-center justify-center gap-8">
  <h2 class="!text-6xl font-mono font-extrabold">
    Let's code!
  </h2>
</div>

