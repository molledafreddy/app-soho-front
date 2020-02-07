<template>
  <article class="card-body mx-auto" style="max-width: 400px;">
    <h4 class="card-title mt-5 text-center">Send Email</h4>
    <form>
      <!-- <b-form> -->
      <div class="form-group">
        <input v-model="form.email" type="text" class="form-control" placeholder="Enter your email">
      </div><!-- form-group -->
      <div class="form-group">
        <b-button class="btn btn-primary btn-block btn-signin" type="submit" @click.prevent="sendForm" variant="primary" >Send</b-button>
      </div> <!-- form-group// -->
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
            slf.$bvToast.toast('There was an error sending the email', {
              title: 'Error',
              autoHideDelay: 2000,
              variant: 'danger',
              appendToast: false
            })
          }
      },(error) => {
        if (error.response && error.response.status === 500) {
          slf.$bvToast.toast([error.response.data.error], {
            title: 'Error send email',
            autoHideDelay: 2000,
            variant: 'danger',
            appendToast: false
          })
        } else {
            console.log(error);
        }
      })
      .catch((error)=>{
        if (error.response && error.response.status === 422) {
            for (var i = error.response.data.error.length - 1; i >= 0; i--) {
                self.$bvToast.toast([error.response.data.error[i]], {
                  title: 'Error send email',
                  autoHideDelay: 2000,
                  variant: 'danger',
                  appendToast: false
                })
            }
        } else {
            console.log(error);
        }
      });
    }
  }
}
</script>

