<template>
<div>
    <article class="card-body mx-auto" style="max-width: 400px;">
        <h4 class="card-title mt-3 text-center">Create record</h4>
        <form>
          <div class="form-group input-group">
            <div class="input-group-prepend">
              <span class="input-group-text"> <i class="fa fa-user"></i> </span>
            </div>
            <input name="" class="form-control" v-model="form.name" placeholder="Name" type="text">
          </div> <!-- form-group// -->
          <div class="form-group input-group">
            <div class="input-group-prepend">
              <span class="input-group-text"> <i class="fa fa-envelope"></i> </span>
            </div>
            <input name="" class="form-control" v-model="form.color" placeholder="Color" type="text">
          </div> <!-- form-group// -->
          <div class="form-group input-group">
            <div class="input-group-prepend">
              <span class="input-group-text"> <i class="fa fa-lock"></i> </span>
            </div>
            <input class="form-control" v-model="form.price" placeholder="Price" type="text">
          </div> <!-- form-group// -->
          <div class="form-group input-group">
            <div class="input-group-prepend">
              <span class="input-group-text"> <i class="fa fa-lock"></i> </span>
            </div>
            <input class="form-control" v-model="form.size" placeholder="Size" type="text">
          </div> <!-- form-group// -->
          <div class="form-group">
              <textarea class="form-control" v-model="form.description" placeholder="Description" rows="3" id="comment"></textarea>
            </div>
          <div class="form-group input-group">

            <div class="input-group-prepend">
                  <span class="input-group-text"> <i class="fa fa-phone"></i> </span>
                </div>
                <select class="custom-select" v-model="form.status" style="max-width: 120px;">
                  <option selected=""></option>
                  <option :value="true">Activo</option>
                  <option :value="false">Inactivo</option>
                </select>
              </div> <!-- form-group// -->
          <div class="form-group">
            <button type="button" class="btn btn-primary btn-block" @click="save()">Create register</button>
            <button type="button" class="btn btn-warning btn-block" @click="back()">Back</button>
          </div> <!-- form-group// -->
        </form>
      </article>
</div>
</template>
<script>
    export default {
        data(){
            return{
                statuses: [
                    { value: null, text: 'Select' },
                    { value: '1', text: 'Active' },
                    { value: '0', text: 'Inactive' },
                ],
                formAction: 'post',
                form: {
                  name: '',
                  color: '',
                  price: '',
                  size: '',
                  description: '',
                  status: false
                }
            }
        },
        mounted () {
            if (this.$route.params.id !== undefined) {
                this.$http.get('https://app-soho-back.herokuapp.com/api/shoes/' + this.$route.params.id)
                .then(response => {
                    this.form = response.data.data
                    this.formAction = 'put'
                    this.form.status = (this.form.status == 1 ? true : false)
                })
            }
        },
        methods:{
            back(){
                this.$router.push({name: 'shoes'})
            },
            save(){
                if (this.form.id) {
                    this.update()
                } else{
                    this.store()
                }
            },
            store(){
                var self = this;
                this.$http.post('https://app-soho-back.herokuapp.com/api/shoes', this.form)
                .then(response => {
                    console.log(response) 
                    self.$bvToast.toast('The record was created successfully', {
                      title: 'Create Record',
                      autoHideDelay: 2000,
                      variant: 'success',
                      appendToast: false
                    })
                    self.$router.push({name: 'shoes'})
                })
                .catch(error => {
                    if (error.response && error.response.status === 422) {
                        for (var i = error.response.data.error.length - 1; i >= 0; i--) {
                            self.$bvToast.toast([error.response.data.error[i]], {
                              title: 'Error updating the registry',
                              autoHideDelay: 2000,
                              variant: 'danger',
                              appendToast: false
                            })
                        }
                    } else {
                        console.log(error);
                    }
                })                
            },
            update(){
                var self = this;
                this.$http.put('https://app-soho-back.herokuapp.com/api/shoes/'+ this.form.id, this.form)
                .then( function(){
                    self.$bvToast.toast('Registry update was successful', {
                      title: 'Update Record',
                      autoHideDelay: 2000,
                      variant: 'success',
                      appendToast: false
                    })
                    self.$router.push({name: 'shoes'})
                })
                .catch(error => {
                    if (error.response && error.response.status === 422) {
                        for (var i = error.response.data.error.length - 1; i >= 0; i--) {
                            self.$bvToast.toast([error.response.data.error[i]], {
                              title: 'Error updating the registry',
                              autoHideDelay: 2000,
                              variant: 'danger',
                              appendToast: false
                            })
                        }
                    } else {
                        console.log(error);
                    }
                })                  
            },
        },
        computed:{
            
            // validForm(){
            //   return this.validColor && this.validName  && this.validPrice && this.validSize
            // },
            // validName(){
            //   return this.draft.name ? this.draft.name.length > 3 : false
            // },
            // validColor(){
            //     return this.draft.color
            // },
            // validPrice(){
            //     return this.draft.price
            // },
            // validSize(){
            //     return this.draft.size
            // },
        }
    }
</script>