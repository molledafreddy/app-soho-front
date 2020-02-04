<template>
  <b-row>
    <b-col v-for="item in items" :key="item.id">
      
      <b-card
      :title="item.title"
      img-src="https://picsum.photos/600/300/?image=25"
      img-alt="Image"
      img-top
      tag="article"
      class="mb-2"
    >
      <b-card-text>
        Some quick example text to build on the card title and make up the bulk of the card's content.
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
      items: [
        {id: 1, title: 'Nombre del producto'},
        {id: 2, title: 'Nombre del producto'},
        {id: 3, title: 'Nombre del producto'},
        {id: 4, title: 'Nombre del producto'}
      ]
    }
  }
}
</script>