<template>
    <v-dialog
      v-model="dialog"
      max-width="290"
    >
      <v-card>
        <v-card-title class="text-h5">
        Excluir
        </v-card-title>
        <v-divider></v-divider>
        <v-card-text class="mt-4">
          Tem certeza que deseja excluir {{user.nome}} {{user.razaosocial}} ?
        </v-card-text>

        <v-card-actions>
          <v-spacer></v-spacer>

          <v-btn
            text
            @click="$emit('fechaModal')"
          >
            Cancelar
          </v-btn>

          <v-btn
            color="red darken-1"
            text
            @click="excluirUser(user.id)"
          >
            Excluir
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
</template>
<script>
export default {
    name: 'WeUserModalExcluir',
    props: ["user"],
    data(){
        return{
            dialog: true
            }
    },

    methods: {
      excluirUser(id){
        this.$store.dispatch('delUser', id)
        this.$emit('fechaModal')
      }
    }

}
</script>
<style scoped>


</style>