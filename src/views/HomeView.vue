<template>
 <div>
  <WeAllUsers/>
  </div>
</template>

<script>
  import WeAllUsers from '../components/WeAllUsers.vue'
  export default {
    name: 'HomeView',
    components: {WeAllUsers},
    data () {
      return {
        page: [],
      }
    },
    created(){
      this.$store.commit('searchPages');
    }
  }
</script>
