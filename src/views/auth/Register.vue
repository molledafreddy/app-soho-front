<template>
  <article class="card-body mx-auto" style="max-width: 400px;">
    <h4 class="card-title mt-3 text-center">Crear usuario</h4>
    <form>
      <div class="form-group input-group">
        <div class="input-group-prepend">
          <span class="input-group-text"> <i class="fa fa-user"></i> </span>
        </div>
        <input name="" class="form-control" placeholder="Nombre completo" type="text">
      </div> <!-- form-group// -->
      <div class="form-group input-group">
        <div class="input-group-prepend">
          <span class="input-group-text"> <i class="fa fa-envelope"></i> </span>
        </div>
        <input name="" class="form-control" placeholder="Email" type="email">
      </div> <!-- form-group// -->
      <div class="form-group input-group">
        <div class="input-group-prepend">
          <span class="input-group-text"> <i class="fa fa-phone"></i> </span>
        </div>
        <select class="custom-select" style="max-width: 120px;">
          <option selected="">+971</option>
          <option value="1">+972</option>
          <option value="2">+198</option>
          <option value="3">+701</option>
        </select>
        <input name="" class="form-control" placeholder="Numero telefonico" type="text">
      </div> <!-- form-group// -->
      <div class="form-group input-group">
        <div class="input-group-prepend">
          <span class="input-group-text"> <i class="fa fa-lock"></i> </span>
        </div>
        <input class="form-control" placeholder="Crear contraseña" type="password">
      </div> <!-- form-group// -->
      <div class="form-group input-group">
        <div class="input-group-prepend">
          <span class="input-group-text"> <i class="fa fa-lock"></i> </span>
        </div>
        <input class="form-control" placeholder="Repetir contraseña" type="password">
      </div> <!-- form-group// -->
      <div class="form-group">
        <button type="submit" class="btn btn-primary btn-block">Crear cuenta</button>
      </div> <!-- form-group// -->
      <p class="text-center">Ya posee una cuenta? <router-link to="/login">Iniciar sesión</router-link> </p>
    </form>
  </article>
</template>

<script>
export default {
  data () {
    return {
      form: {
        email: '',
        password: ''
      },
    }
  },
  methods: {
    doLogin(){
      this.$validator.validateAll().then((result) => {
        if(result){
          var slf = this;
          slf.$http.post('api/login', this.form).then((res)=>{
              console.log(res.data);
              if (res && res.data.status == 200)  {
                //Acá va la notificacion
                console.log("Todo exitoso")
                  slf.$store.dispatch('setSession',res.data.user);

                  slf.$router.push('/playfair');
              }else if(res && res.data.status == 401){
                //Acá va la notificacion
                console.log("Ocurrio un error")
              }
          })
          .catch((error)=>{
            if(error && error.response.status == 422){
                this.alert.oper='danger';
                this.alert.msg='Error en los datos de autenticación';
            }
          })
        }
      }).catch(() => {console.log('error form')});
    }
  },computed: {
    
  },
}
</script>
<style>

</style>

<!-- b-form-1.vue -->