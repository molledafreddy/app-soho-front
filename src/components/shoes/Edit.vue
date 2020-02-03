<template>
<div>
  <b-modal v-model="show" :title="draft.id ? 'Edit' : 'Add'"  @hide="close">
    <b-container fluid>
        <b-row class="mb-1">
            <b-col><label :class="validName ? 'label-valid' : 'label-required'">Name</label></b-col>
        </b-row>
        <b-row class="mb-1">
            <b-col><input type="text" v-model="draft.name" class="form-control" ></b-col>
        </b-row>

        <b-row class="mb-1">
            <b-col><label :class="validColor ? 'label-valid' : 'label-required'">Color</label></b-col>
        </b-row>
        <b-row class="mb-1">
            <b-col>
                <input type="text" v-model="draft.color" class="form-control">
            </b-col>
        </b-row>
        
        <b-row class="mb-1">
            <b-col><label :class="validPrice ? 'label-valid' : 'label-required'">Price</label></b-col>
        </b-row>
        <b-row class="mb-1">
            <b-col>
                <input type="text" v-model="draft.price" class="form-control">
            </b-col>
        </b-row>

        <b-row class="mb-1">
            <b-col><label :class="validSize ? 'label-valid' : 'label-required'">Size</label></b-col>
        </b-row>
        <b-row class="mb-1">
            <b-col>
                <input type="text" v-model="draft.size" class="form-control">
            </b-col>
        </b-row>

        <b-row class="mb-1">
            <b-col><label >Status</label></b-col>
        </b-row>
        <b-row class="mb-1">
            <b-col>
                <b-form-select v-model="draft.status" :options="statuses" class="mb-3"/>
        </b-col>
        </b-row>
    </b-container>
    <div slot="modal-footer" class="pull-right">
        <b-btn class="btn btn-outline-danger" @click="close"> Close</b-btn>
        <b-btn class="btn btn-outline-primary" @click="save" :disabled="!validForm"> {{draft.id ? 'Update' : 'Create'}}</b-btn>
    </div>
  </b-modal>
</div>
</template>

<script>
    export default {
        props: ['show', 'draft'],
        data(){
            return{
                images:[],
                statuses: [
                    { value: null, text: 'Select' },
                    { value: '1', text: 'Active' },
                    { value: '0', text: 'Inactive' },
                ],
                categoriesList: [
                    { value: '', text: ''},
                ],

            }
        },
        created(){
            // this.listCategories()
        },
        methods:{
            close(){
                this.$emit('close')
            },
            save(){
                if (this.draft.id) {
                    this.update()
                } else{
                    this.store()
                }
                this.close()
            },
            update(){
                this.$store.dispatch('updateShoe', {id:this.draft.id, draft:this.draft})
            },
            store(){
                this.$store.dispatch('storeShoe', {draft:this.draft})
            }
        },
        computed:{
            
            validForm(){
              return this.validColor && this.validName  && this.validPrice && this.validSize
            },
            validName(){
              return this.draft.name ? this.draft.name.length > 3 : false
            },
            validColor(){
                return this.draft.color
            },
            validPrice(){
                return this.draft.price
            },
            validSize(){
                return this.draft.size
            },
        }
    }
</script>