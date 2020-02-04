<template>
  <article class="card-body mx-auto" style="max-width: 400px;">
    <h4 class="card-title mt-3 text-center">Crear usuario</h4>
    <form>
      <!-- <b-form> -->
        <div class="form-group">
          <input v-model="form.email" type="text" class="form-control" placeholder="Enter your email">
        </div><!-- form-group -->
        <div class="form-group ">
          <input v-model="form.password" type="password" class="form-control" placeholder="Enter your password">
        </div><!-- form-group -->
        <div class="form-group mg-b-50">
          <input v-model="form.password_confirmation" type="password" class="form-control" placeholder="Confirm password">
        </div><!-- form-group -->
      <div class="form-group">
        <b-button class="btn btn-primary btn-block btn-signin" type="submit" @click.prevent="doLogin" variant="primary" >Entrar</b-button>
      </div> <!-- form-group// -->
      </form>
  </article>
</template>
<script>
  export default {
  data () {
    return {
      csrf_token: this.$http.defaults.headers.common['X-CSRF-TOKEN'],
      validemail:true,
      form: {
        email: '',
        password: '',
        password_confirmation:'',
        token:this.$route.params.hash,
      },
    }
  },mounted() {
      this.validView();
  },methods: {
    validView(){
      var obj={}, slf = this;
      obj.hash=this.form.token;
      slf.$http.post('../../validViewHash',obj)
        .then(response => {
           console.log(response);
        })
        .catch(error => {
            console.log(error.response)
        });
    },
    resetError(){
      this.alert.msg=null;
      this.alert.oper=null;
      this.validemail=true;
    },
    setPass(){   
      this.$validator.validateAll().then((result) => {
        if(result){
          this.sendForm();
        }
      }).catch(() => {console.log('error form')});
    },
    sendForm(){  
      var slf = this;
      // '../../api/password/reset'
      slf.$http.post('/password/reset', this.form).then((res)=>{
          console.log(res);
          if (res.status == 200)  {
            var sfl=this;
            slf.$http.post('../../logout')
              .then(response => {
                  sfl.$store.commit('logout');
                  sfl.$router.push('/login');
                  console.log(response);
              })
              .catch(error => {
                  console.log(error.response)
              });
          }
      },(err) => {
        console.log(err.response.data.errors)
        var i = 0;
        if (err.response.data.errors.password) {
          for ( i = err.response.data.errors.password[0].length - 1; i >= 0; i--) {
            
            //se muestra mensaje
            console.log()
          }
          
        }else if (err.response.data.errors.email){
          for ( i = err.response.data.errors.email[0].length - 1; i >= 0; i--) {
            
            console.log()
          }
        }
              //email error from Laravel
          
      })
      .catch((error)=>{
        console.log(error);
        // Vue.toasted.show(error, {icon: 'exclamation-triangle', type: 'error'})
      });
    }
  }
}
</script>

