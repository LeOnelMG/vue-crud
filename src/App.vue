<template>
  <v-app id="inspire">
     <v-navigation-drawer 
     app
     v-model="drawer"
     >
      <v-list-item>
        <v-list-item-content>
        <center>
         <v-img 
         src="./assets/unnamed.png"
         max-width="130px"
         center
         ></v-img>
         </center>
        </v-list-item-content>
      </v-list-item>

      <v-divider></v-divider>

      <v-list
        dense
        nav
      >
        <v-list-item
          v-for="item in navItems"
          :key="item.title"
          :to="item.to"
        >
          <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar app>
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>

      <v-toolbar-title>Cadastro de usuários</v-toolbar-title>
    </v-app-bar>

    <v-main>
      <router-view/>
    </v-main>
  </v-app>
</template>

<script>
  export default {
    data: () => ({ 
      drawer: null,
      navItems: [
        {title: 'Home', icon: 'mdi-home', to: '/'},
        {title: 'Cadastro de Usuário', icon: 'mdi-account-edit', to: '/cadastro'}
      ] 
      }),
  }
</script>
<style>
html,
body{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
.principal-container{
  margin: 50px;
}
</style>