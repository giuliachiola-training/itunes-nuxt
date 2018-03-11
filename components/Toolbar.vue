<template>
  <v-toolbar>
    <v-toolbar-side-icon></v-toolbar-side-icon>
    <v-toolbar-title>Title</v-toolbar-title>
    <v-spacer></v-spacer>
    <ul>
      <li class="c-toolbar__item"><nuxt-link to="/">Starting page</nuxt-link></li>
      <li class="c-toolbar__item"><nuxt-link to="/about">About</nuxt-link></li>
      <li class="c-toolbar__item"><nuxt-link to="/contact">Contact</nuxt-link></li>
      <li class="c-toolbar__item"><nuxt-link to="/other">Other</nuxt-link></li>
    </ul>
  </v-toolbar>
</template>

<style>
  .c-toolbar__item {
    display: inline-block;
    padding: 20px;
  }
</style>
