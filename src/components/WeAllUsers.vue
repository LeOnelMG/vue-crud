<template>
  <v-simple-table>
    <template v-slot:default>
      <thead>
        <tr>
          <th class="text-left">
            Nome/Razão Social
          </th>
          <th class="text-left">
            CPF/CNPJ
          </th>
           <th class="text-left">
            E-mail
          </th>
          <th>

          </th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="user in $store.state.usuarios" :key="user.id">
          <td>{{user.nome}} {{user.razaosocial}}</td>
          <td>{{user.cpf}} {{user.cpnj}}</td>
          <td>{{user.email}}</td>
          <td><WeUserMenu :user="user"/></td>
        </tr>
      </tbody>
    </template>
  </v-simple-table>
</template>

<script>
import WeUserMenu from './WeUserMenu.vue'

export default {
    name: 'WeAllUsers',
    components: {WeUserMenu},
    created(){
      this.$store.commit('searchUsers');
    }
  }
</script>
<style scoped>
.allusers{
  padding: 2%;
}
</style>