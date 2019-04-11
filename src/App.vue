<template>
  <div id="app">
    <div class = 'container'>
        <app-Header></app-Header>
    </div>
    <div class="container">
      <router-view></router-view>
    </div>
    <br>
    <div class="constainer">
      <!-- <routrt-link to = ''></routrt-link> -->
    </div>
  </div>
</template>


<script>
import Header from './components/Header';
export default {
  components:{
    'app-Header': Header
  }
}
</script>

<style>
</style>
