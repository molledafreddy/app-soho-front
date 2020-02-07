<template>
  <div>
  <b-navbar toggleable="lg" type="dark" variant="info">
    <b-navbar-brand href="#">NavBar</b-navbar-brand>

    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

    <b-collapse id="nav-collapse" is-nav>
      <b-navbar-nav>
        <b-nav-item  to="/">
          Home
        </b-nav-item>

        <template v-if="valid">
          <b-nav-item  to="/shoes">
            Shoes
          </b-nav-item>
        </template>
      </b-navbar-nav>

      <!-- Right aligned nav items -->
      <b-navbar-nav class="ml-auto">
        <b-nav-form>
        </b-nav-form>
        <b-nav-item-dropdown right>
          <!-- Using 'button-content' slot -->
          <template v-slot:button-content>
            <em>Usuario</em>
          </template>
          <template v-if="valid===null">
            <b-dropdown-item  to="/login">Iniciar sesion</b-dropdown-item>
          </template>
          <template v-if="valid">
            <b-dropdown-item href="#" @click="logout">Salir</b-dropdown-item>
          </template>
        </b-nav-item-dropdown>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
</div>
</template>
<script>
    export default{
      data(){
        return{
          style:false,
          valid: null,
          showLogout: false,
          arrayOfObjects: [],
          object: {
            name: 'Object Name',
          }
        }
      },
      mounted () {
        this.valid = localStorage.getItem("sesion_status")
        console.log("hasdasdasd",this.valid)
      },
      methods:{
        methodToRunOnSelect(payload) {
          this.object = payload;
        },
        profile(){
          this.$router.push({name: 'profile'})
            return
        },
        logout(){
          let vm = this;
          // api/auth/logout
          this.$http.post('https://appsoho.herokuapp.com/api/logout', {
            'headers' : {
              'Accenpt': 'application/json',
              'Authorization': 'Bearer '+ localStorage.getItem("token"),
            }
          })
          .then(response => {
            console.log(response)
            localStorage.removeItem("token");
            localStorage.removeItem("user");
            vm.$router.push('/login');
          })
          .catch(error => {
              console.log(error)
          });
        },
      },
      computed: {
        styleMenu(){
          return this.$route.path=="/";
        },
      }
    }
</script>

