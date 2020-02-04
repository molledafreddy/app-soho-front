<template>
  <div class="home">
    <Carousel/>
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    <MostSeller/>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from './HelloWorld'
import Carousel from './Carousel'
import MostSeller from './MostSeller'
export default {
  name: 'home',
  components: {
    HelloWorld,
    MostSeller,
    Carousel
  }
}
</script>
