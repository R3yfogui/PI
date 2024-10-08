<script setup>
import '@passageidentity/passage-elements/passage-auth';
</script>

<template>
  <h1>Login</h1>
  <div class="passage">
  <div class="authContainer" style="position: relative; z-index: 10000;">
    <passage-auth
      app-id="XlYsZEZ1pdDgVZbtY42oX11w"
    ></passage-auth>
  </div>
  </div>
</template>

<style scoped>
.passage{
  display: flex;
  justify-content: center;
}
</style>