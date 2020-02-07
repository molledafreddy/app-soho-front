<template>
    <div>
         <div class="panel-heading mt-4">
            <div class="pull-left">
                <h3>Shoes</h3>
<!--                 <search @search="search"></search> -->  
            </div>
            <div class="pull-right position-b">
                <button class="btn btn-primary" @click="add()">Create</button>
            </div>
            <div class="clearfix"></div>
        </div>
        <div class="centrado" style="width: 95%">
            <b-card >    
                    <b-table striped hover :items="shoes" :fields="fields" >
                    <template v-slot:cell(actions)="data">
                        <button class="btn btn-warning mr-1 btn-sm" @click="edit(data.item)" title="Update">
                            <b-icon-arrow-clockwise></b-icon-arrow-clockwise>
                        </button>
                        <button class="btn btn-danger btn-sm" @click="remove(data.item)" title="Delete">
                            <b-icon-trash-fill></b-icon-trash-fill>
                        </button>
                    </template>
                </b-table>
            </b-card>
        </div>
    </div>   
            
</template>
<style type="text/css">
    .position-b {
        margin-left: 1100px;
        margin-bottom: 5px; 
        /*float:right;*/
    }
    .centrado{
      margin-left: auto;
      margin-right: auto;
    }
</style>
<script>
    export default {
        watch:{
            target(){
                this.getShoes()
            }
        },
        data(){
            return{
                shoes:[],
                fields: [
                    {
                        key: 'name',
                        label: 'Name',
                        sortable: true
                    },
                    {
                        key: 'color',
                        label: 'Color',
                        sortable: true,
                    },
                    {
                        key: 'price',
                        label: 'Price',
                        sortable: true,
                    },
                    {
                        key: 'size',
                        label: 'Size',
                        sortable: true,
                    },
                    {
                        key: 'description',
                        label: 'Description',
                        sortable: false
                    },
                    {
                        key: 'actions',
                        label: 'Actions'
                    }
                ]  
            }
        },
        created(){
            this.getShoes()
        },
        methods:{
            add(){
                this.$router.push({name: 'ShoesAdd'})
            },
            edit(shoe){
                this.$router.push({ name: 'ShoesEdit', params: { id: shoe.id } })
            },
            getShoes(){
                // , {
                //     'headers' : {
                //       'Accenpt': 'application/json',
                //       'Authorization': 'Bearer '+ localStorage.getItem("token"),
                //     }
                //   }
                // let token = localStorage.getItem("token")
                this.$http.get('https://app-soho-back.herokuapp.com/api/shoes')
                .then(response => {
                    this.shoes = response.data.data.data
                    for (var i = this.shoes.length - 1; i >= 0; i--) {
                      this.shoes[i].description = this.shoes[i].description.substring(0, 40)
                    }
                })
            },
            remove(item){   
                var self = this;
                this.$http.delete('https://app-soho-back.herokuapp.com/api/shoes/' + item.id)
                .then(function(response) {
                    self.getShoes();
                    console.log(response);
                    self.$bvToast.toast('Registration was successfully deleted', {
                      title: 'Delete Record',
                      autoHideDelay: 2000,
                      variant: 'success',
                      appendToast: false
                    })
                })
                .catch(error => {
                    alert(error);
                    self.$bvToast.toast('Delete process failed', {
                      title: 'Delete Record',
                      autoHideDelay: 2000,
                      variant: 'danger',
                      appendToast: false
                    })
                })
            }
        }
    }
</script>