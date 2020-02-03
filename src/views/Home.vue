<template>
  <div class="home">
    <Header/>
    <Index/>
    <!-- <img alt="Vue logo" src="../assets/logo.png"> -->
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    <!-- <Footer/> -->
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import Header from '@/components/sliders/Header.vue'
import Index from '@/components/shoes/Index.vue'
// import Footer from '@/components/sliders/Footer.vue'
// 
export default {
  name: 'home',
  components: {
    HelloWorld,
    // Footer,
    Header,
    Index
  }
}
</script>
