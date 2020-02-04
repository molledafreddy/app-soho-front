<template>
  <b-row>
    <b-col v-for="shoe in shoes" :key="shoe.id">
      
      <b-card
      :title="shoe.name"
      img-src="https://picsum.photos/600/300/?image=25"
      img-alt="Image"
      img-top
      tag="article"
      class="mb-2"
    >
      <b-card-text>
        {{shoe.description}}
      </b-card-text>

      <b-button href="#" variant="primary">Go somewhere</b-button>
    </b-card>
    </b-col>
  </b-row>    
</template>

<script>

export default {
  data() {
    return {
      shoes: []
    }
  },
  mounted(){
    this.$http.get('https://appsoho.herokuapp.com/api/shoes')
        .then(response => {
            this.shoes = response.data.data.data  
            console.log(this.shoes);
        })
  }
}
</script>