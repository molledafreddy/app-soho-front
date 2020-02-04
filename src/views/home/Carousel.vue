<template>
  <div>
    <b-carousel
      id="carousel-1"
      v-model="slide"
      :interval="4000"
      controls
      indicators
      background="#ababab"
      img-width="1024"
      img-height="480"
      style="text-shadow: 1px 1px 2px #333;"
      @sliding-start="onSlideStart"
      @sliding-end="onSlideEnd"
    >
      <!-- Text slides with image -->
      <div v-for="shoe in shoes" v-bind:key="shoe">
        <b-carousel-slide
          :caption="shoe.name"
          :text="shoe.description"
        >
        <h1>New Color {{shoe.color}}</h1>
        <template v-slot:img>
          <img
            class="d-block img-fluid w-100"
            width="1024"
            height="480"
            src="https://picsum.photos/1024/480/?image=55"
            alt="image slot"
          >
        </template>
        </b-carousel-slide>
      </div>
    </b-carousel>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        slide: 0,
        sliding: null,
        shoes: []
      }
    },
    methods: {
      onSlideStart(slide) {
        this.sliding = true;
        console.log(slide)
      },
      onSlideEnd(slide) {
        this.sliding = false
        console.log(slide)
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