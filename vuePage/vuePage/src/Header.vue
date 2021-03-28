<template>
<Navbar />
<Title />
</template>

<script>
import Navbar from "./components/navbar.vue"
import Title from "./components/title.vue"

export default {
  name: 'Header',
  components: {
    Navbar,
    Title
  }
}

// This starter template is using Vue 3 experimental <script src="../../../bootstrap/js/bootstrap.bundle.js"></script>
<style src="../../../scss/custom.css"></style>