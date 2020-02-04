<template>

 <b-card title="Productos" sub-title="Lista de productos">    
    <b-table striped hover :items="items" :fields="fields" ></b-table>
</b-card>      
            
</template>

<script>
    export default {
        watch:{
            target(){
                this.getShoes()
            }
        },
        data(){
            return{
                fields: [
                    {
                        key: 'name',
                        label: 'Nombre',
                        sortable: true
                    },
                    {
                        key: 'description',
                        label: 'Descripcion',
                        sortable: false
                    },
                    {
                        key: 'image',
                        label: 'Imagen',
                        sortable: true,
                    }
                ],
                items: [    
                    { image: 40, name: 'Dickerson', description: 'Macdonald' },
                    { image: 21, name: 'Larsen', description: 'Shaw' },
                    { image: 89, name: 'Geneva', description: 'Wilson' },
                    { image: 38, name: 'Jami', description: 'Carney' },
                    { image: 40, name: 'Dickerson', description: 'Macdonald' },
                    { image: 21, name: 'Larsen', description: 'Shaw' },
                    { image: 89, name: 'Geneva', description: 'Wilson' },
                    { image: 38, name: 'Jami', description: 'Carney' },
                    { image: 40, name: 'Dickerson', description: 'Macdonald' },
                    { image: 21, name: 'Larsen', description: 'Shaw' },
                    { image: 89, name: 'Geneva', description: 'Wilson' },
                    { image: 38, name: 'Jami', description: 'Carney' }
                ]   
            }
        },
        created(){
            this.getShoes()
        },
        methods:{
            // edit(shoe, index){
            //     this.draft = clone(shoe)
            //     this.currentIndex = index
            //     this.showEdit = true
            //     this.draft.flag=false
            // },
            create(){
                this.draft = {
                    id: null,
                    name: '',
                    color: '',
                    price: null,
                    size: null,
                    status: null,
                    flag:true,
                }
                this.showEdit = true
            },
            getShoes(){
                let params = {page: this.currentPage, target: this.target, orderBy: this.sortBy, desc: this.sortDesc}
                this.$store.dispatch('getShoes', params)
            },
            close(){
              this.showEdit = false
            },
            // remove(item, index){
            //     this.$swal({
            //       title: 'Delete title',
            //       text: 'app.common.delete_text') + item.name +'?',
            //       type: 'warning',
            //       showCancelButton: true,
            //       confirmButtonShoe: '#3085d6',
            //       cancelButtonShoe: '#d33',
            //       confirmButtonText: trans('app.common.delete_confirm'),
            //       cancelButtonText: trans('app.common.0')
            //     }).then((result) => {
            //       if (result.value) {
            //         this.$store.dispatch('removeShoe', item.id)
            //       }
            //     })
            // },
            sortingChanged (ctx) {
                if (ctx.sortBy) {
                    this.sortBy = ctx.sortBy
                    this.sortDesc = ctx.sortDesc
                    this.currentPage = 1
                    this.getShoes()
                }
            },
        },
        computed:{
            shoe(){
                return this.$store.state.Shoe.shoes
            },
            current_page(){
                return this.$store.state.Shoe.currentPage
            },
            totalRows(){
                return this.$store.state.Shoe.totalRows
            },
            perPage(){
                return this.$store.state.Shoe.perPage
            },
            loading(){
               return this.$store.state.Shoe.loading
            }
        }
    }
</script>