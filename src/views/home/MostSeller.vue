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
    this.$http.get('https://app-soho-back.herokuapp.com/api/list/shoes')
        .then(response => {
            this.shoes = response.data.data
            for (var i = this.shoes.length - 1; i >= 0; i--) {
              this.shoes[i].name = this.shoes[i].name.substring(0, 10)
              this.shoes[i].description = this.shoes[i].description.substring(0, 40)
            }  
        })
  }
}
</script>