<template>
  <article class="card-body mx-auto" style="max-width: 400px;">
    <h4 class="card-title mt-3 text-center">Sent Email</h4>
    <form>
      <!-- <b-form> -->
      <div class="form-group">
        <input v-model="form.email" type="text" class="form-control" placeholder="Enter your email">
      </div><!-- form-group -->
      <div class="form-group">
        <b-button class="btn btn-primary btn-block btn-signin" type="submit" @click.prevent="sendForm" variant="primary" >Sent</b-button>
      </div> <!-- form-group// -->
      <template v-if="errorCred">
        <div class="alert alert-danger mt text-center" role="alert">
          {{message}}
        </div><!-- alert -->
      </template>
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
      errorCred:false,
      message: 'Error credentials',
      form: {
        email: '',
      },
    }
  },
  methods: {
    sendForm(){  
      var slf = this;
      slf.$http.post('https://appsoho.herokuapp.com/api/reset-password', this.form).then((res)=>{
          if (res)  {
              slf.$router.push('/login');
          }else if(res.data.status == 401){
            // console.log(res.data.msg)
            slf.errorCred=true
             let self = this;
            setTimeout(function(){
                self.errorCred=false
            }, 4000);
          }
      },(err) => {
        console.log(err.response.data.errors)
      })
      .catch((error)=>{
        console.log(error);
      });
    }
  }
}
</script>

