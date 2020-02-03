<template>
  <div>
  <b-navbar toggleable="lg" type="dark" variant="info">
    <b-navbar-brand href="#">NavBar</b-navbar-brand>

    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

    <b-collapse id="nav-collapse" is-nav>
      <b-navbar-nav>
        <b-nav-item href="#">Link</b-nav-item>
        <b-nav-item href="#" disabled>Disabled</b-nav-item>
      </b-navbar-nav>

      <!-- Right aligned nav items -->
      <b-navbar-nav class="ml-auto">
        <b-nav-form>
          <b-form-input size="sm" class="mr-sm-2" placeholder="Search"></b-form-input>
          <b-button size="sm" class="my-2 my-sm-0" type="submit">Search</b-button>
        </b-nav-form>

        <b-nav-item-dropdown text="Lang" right>
          <b-dropdown-item href="#">EN</b-dropdown-item>
          <b-dropdown-item href="#">ES</b-dropdown-item>
          <b-dropdown-item href="#">RU</b-dropdown-item>
          <b-dropdown-item href="#">FA</b-dropdown-item>
        </b-nav-item-dropdown>

        <b-nav-item-dropdown right>
          <!-- Using 'button-content' slot -->
          <template v-slot:button-content>
            <em>User</em>
          </template>
          <b-dropdown-item href="#">Profile</b-dropdown-item>
          <b-dropdown-item href="#">Sign Out</b-dropdown-item>
        </b-nav-item-dropdown>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
</div>
</template>
<!-- <style type="text/css">
  .tx-danger {
    color: #dc3545 !important; }
  a.tx-danger:hover, a.tx-danger:focus {
  color: #d32535 !important; }
  .bd-danger {
  border-color: #dc3545 !important; }
  .bg-danger {
  background-color: #dc3545 !important; }
  .bg-black {
  background-color: rgba(0, 0, 0, 0.9) !important;}
  .bd-black {
  border-color: #181818 !important;}
  .tx-purple {
  color: #6f42c1 !important; }
  .bd-purple {
  border-color: #6f42c1 !important; }
  .bg-purple {
  background-color: #6f42c1 !important; }
  .bd-pink {
    border-color: #e83e8c !important; }
  

</style> -->
<script>
    // import dropdown from 'vue-dropdowns';
    import axios from 'axios';
    export default{
      data(){
        return{
          csrf_token: axios.defaults.headers.common['X-CSRF-TOKEN'],
          root:null,
          style:false,
          color: 'black',
          showLogout: false,
          arrayOfObjects: [],
          object: {
            name: 'Object Name',
          }
        }
      },
      components: {
          // 'dropdown': dropdown,
      },
      methods:{
        admin(){
          this.$router.push('/admin')
        },
        methodToRunOnSelect(payload) {
          this.object = payload;
        },
        profile(){
          this.$router.push({name: 'profile'})
            return
        },
        logout(){
          // let vm = this;
          // api/auth/logout
          // console.log(myToken.csrfToken);
          // axios.get('/logout', {
          //   'headers' : {
          //     'Content-Type': 'application/json',
          //     'Authorization': 'Bearer '+ myToken.csrfToken,
          //   }
          // })
          // .then(response => {
          //   console.log(response)
          //     vm.$store.commit('logout');
          //     vm.$router.push('/login');
          //     // location.reload();
          // })
          // .catch(error => {
          //     console.log(error)
          // });
        },
      },
      computed: {
        user(){
          return this.$store.getters.getSession
        },
        langS(){
          return this.$store.getters.getLangSession
        },
        validAuthenticated(){
          if(this.$store.getters.getSession.name!=undefined){
            return true;
          }else{
            return false;
          }
        },styleMenu(){
          return this.$route.path=="/";
        },
        // color(){
        //   return this.$store.getters.getColor
        // },
      }
    }
</script>

