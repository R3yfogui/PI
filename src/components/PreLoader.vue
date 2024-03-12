<script setup>
import { VuePreloader } from 'vue-preloader';
import '../../node_modules/vue-preloader/dist/style.css'
</script>

<template>
 <div class="teste1" style="z-index: 100000;">
  <TemplatesHeader />
  <TemplatesPage>
	  <slot />
  </TemplatesPage>
  <TemplatesFooter />
  <VuePreloader
    background-color="#141414"
    color="#ffffff"
    transition-type="fade-up"
    :loading-speed="45"
    :transition-speed="1400"
    @loading-is-over="loadingIsOver"
    @transition-is-over="transitionIsOver"
  ></VuePreloader>
</div>
<div class="teste">
  <VuePreloader
  
  background-color=""
  color="#ffffff"
    transition-type="fade-up"
    :loading-speed="45"
    :transition-speed="900"
    @loading-is-over="loadingIsOver"
    @transition-is-over="transitionIsOver"
    
  > <video autoplay muted plays-inline class=" cardback">
      <source src="../assets/videos/bardo.mp4" type="video/mp4" />
    </video></VuePreloader>
</div>

</template>

<style>
a{
  color: #141414;
}
.teste{
  z-index: 10000;
  right: 50%;
  
}
.teste1{
  left: 50%;

}
h1{
  transition: all .3s ease;
  color: #8f8f8f;
  margin-bottom: 80px;
}
.cardback{
  width: 93%;
  background-size: cover;
  
}</style>