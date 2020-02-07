<template>
  <article class="card-body mx-auto" style="max-width: 400px;">
    <h4 class="card-title mt-3 text-center">Reset Password</h4>
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
        <b-button class="btn btn-primary btn-block btn-signin" type="submit" @click.prevent="sendForm" variant="primary" >Reset</b-button>
      </div> <!-- form-group// -->
      </form>
  </article>
</template>
<script>
  export default {
  data () {
    return {
      form: {
        email: '',
        password: '',
        password_confirmation:'',
        token:this.$route.params.hash,
      },
    }
  },
  methods: {
    sendForm(){  
      var slf = this;
      slf.$http.post('https://appsoho.herokuapp.com/api/call-reset-password', this.form).then((res)=>{
          console.log(res);
          if (res.status == 200)  {
            var sfl=this;
            slf.$http.post('https://appsoho.herokuapp.com/api/logout')
              .then(response => {
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
      });
    }
  }
}
</script>

