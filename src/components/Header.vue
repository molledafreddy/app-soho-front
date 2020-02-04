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
        <b-nav-item  to="/shoes">
          Shoes
        </b-nav-item>
      </b-navbar-nav>

      <!-- Right aligned nav items -->
      <b-navbar-nav class="ml-auto">
        <b-nav-form>
          <b-form-input size="sm" class="mr-sm-2" placeholder="Search"></b-form-input>
          <b-button size="sm" class="my-2 my-sm-0" type="submit">Search</b-button>
        </b-nav-form>
        <b-nav-item-dropdown right>
          <!-- Using 'button-content' slot -->
          <template v-slot:button-content>
            <em>Usuario</em>
          </template>
          <b-dropdown-item href="#">Perfil</b-dropdown-item>
          <b-dropdown-item  to="/login">Iniciar sesion</b-dropdown-item>
          <b-dropdown-item  to="/register">Registrar</b-dropdown-item>
          <b-dropdown-item href="#">Salir</b-dropdown-item>
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
          let vm = this;
          // api/auth/logout
          this.http.get('https://appsoho.herokuapp.com/api/logout', {
            'headers' : {
              'Content-Type': 'application/json',
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

