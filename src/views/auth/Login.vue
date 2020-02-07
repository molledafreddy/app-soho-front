<template>  
  <article class="card-body mx-auto" style="max-width: 400px;">
    <h4 class="card-title mt-3 text-center">Iniciar sesión</h4>
    <form>
       <div class="form-group input-group">
        <div class="input-group-prepend">
          <span class="input-group-text"> <i class="fa fa-lock"></i> </span>
        </div>
        <input v-model="form.username" placeholder="username" type="text" class="form-control">
      </div> <!-- form-group// --> <div class="form-group input-group">
        <div class="input-group-prepend">
          <span class="input-group-text"> <i class="fa fa-lock"></i> </span>
        </div>
        <input v-model="form.password" type="password" class="form-control" placeholder="Password">
      </div> <!-- form-group// -->
      <template v-if="errorCred">
        <div class="alert alert-danger mt text-center" role="alert">
          {{message}}
        </div><!-- alert -->
      </template>
      <div class="form-group">
        <b-button class="btn btn-primary btn-block btn-signin" type="submit" @click.prevent="doLogin" variant="primary" >Entrar</b-button>
      </div> <!-- form-group// -->
      
      <p class="text-center">Olvido su contraseña? <router-link to="/send-email">Recuperar contraseña</router-link> </p>
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
        username: '',
        password: '',
      },
      errorCred:false,
      message: 'Error credentials'
    }
  },
  methods: {
    closeMessage(){
      this.errorCred=false
    },
    doLogin(){
      var slf = this;
      slf.$http.post('https://app-soho-back.herokuapp.com/api/login', this.form)
      .then((res)=>{
          if (res)  {
              localStorage.setItem("token", res.data.token);
              localStorage.setItem("user", res.data.user);
              localStorage.setItem("sesion_status", true);
              slf.$router.push('/shoes')
          }else if(res.data.status == 401){
            slf.errorCred=true
             let self = this;
            setTimeout(function(){
                self.errorCred=false
            }, 4000);
          }
      })
      .catch((error)=>{
        if(error && error.response.status == 422){
          this.errorCred=true
        }
      })
      
    }
  }
}
</script>


<!-- b-form-1.vue -->