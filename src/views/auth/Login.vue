<template>  
  <article class="card-body mx-auto" style="max-width: 400px;">
    <h4 class="card-title mt-3 text-center">Iniciar sesión</h4>
    <form>
       <div class="form-group input-group">
        <div class="input-group-prepend">
          <span class="input-group-text"> <i class="fa fa-lock"></i> </span>
        </div>
        <input class="form-control" placeholder="Email" type="email">
      </div> <!-- form-group// --> <div class="form-group input-group">
        <div class="input-group-prepend">
          <span class="input-group-text"> <i class="fa fa-lock"></i> </span>
        </div>
        <input class="form-control" placeholder="Contraseña" type="password">
      </div> <!-- form-group// -->

      <div class="form-group">
        <b-button class="btn btn-primary btn-block btn-signin" type="submit" @click.prevent="doLogin" variant="primary" >Entrar</b-button>
      </div> <!-- form-group// -->
      
      <p class="text-center">Olvido su contraseña? <router-link to="/reset-password">Recuperar contraseña</router-link> </p>
      <!-- </b-form> -->                
    </form>
  </article>
</template>
<style type="text/css">
  .mt{
   margin-bottom: 20px;
  }
  .tx-danger {
    color: #dc3545 !important; }
  a.tx-danger:hover, a.tx-danger:focus {
  color: #d32535 !important; }
</style>

<script>
export default {
  data () {
    return {
      form: {
        email: '',
        password: '',
      },
      errorCred:false,
    }
  },
  created(){
    this.getColor()
  },
  methods: {
    closeMessage(){
      this.errorCred=false
    },
    getColor(){
        this.$store.dispatch('getColor')
    },
    doLogin(){
      this.$validator.validateAll().then((result) => {
        if(result){
          var slf = this;
          // api/auth/login
          slf.$http.post('login', this.form).then((res)=>{
              console.log(res.data);
              if (res)  {
                  slf.$store.dispatch('setSession',res.data.user)
                  slf.$store.dispatch('getLangs', res.data.defaultLang)
                  slf.$store.dispatch('setLangSession',res.data.defaultLang)
                  slf.$router.push('/admin')
              }else if(res.data.status == 401){
                console.log(res.data.msg)
                slf.errorCred=true
                 let self = this;
                setTimeout(function(){
                    self.errorCred=false
                }, 4000);
              }
          })
          .catch((error)=>{
            if(error && error.response.status == 422){
              console.log(error.response);
                // Vue.toasted.show('Error en los datos de autenticación', {icon: 'exclamation-triangle', type: 'error'})
                this.errorCred=true
            }
          })
        }
      }).catch(() => {console.log('error form')});
    }
  },computed: {
      color(){
        return this.$store.getters.getColor
      },
  },
}
</script>


<!-- b-form-1.vue -->