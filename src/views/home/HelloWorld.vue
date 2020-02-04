<template>
  <header>
    <h1>{{ msg }}</h1>
    <!-- <Shoe/> -->
  </header>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  components:{
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
header {
  padding: 20px 10px !important;
}
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
