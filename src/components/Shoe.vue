<template>
    <article>
        <table>
            <tr>
                <th>Name</th>
                <th>Color</th>
                <th>Size</th>
                <th>Price</th>
                <th>Status</th>
            </tr>
            <tr v-for="shoe in shoes" v-bind:key="shoe">
                <td>{{shoe.name}}</td>
                <td>{{shoe.color}}</td>
                <td>{{shoe.size}}</td>
                <td>{{shoe.price}}</td>
                <td>{{shoe.status}}</td>
            </tr>
        </table>
            
    </article>
</template>

<script>
    export default {
      name: 'shoe',
      data(){
        return {
            shoes: []
        }
      },
      mounted(){
        this.$http.get('https://appsoho.herokuapp.com/api/shoes')
        // $http.get('https://jsonplaceholder.typicode.com/users')
            .then(response => {
                this.shoes = response.data.data.data
                console.log(this.shoes);
            })
      }
    }

</script>

<style>
    table,tr,th,td{
        border:1px solid teal;
    }
</style>