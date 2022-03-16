<template>
    <v-dialog
      v-model="dialog"
      max-width="290"
    >
    <v-card v-if="user.categoria_id == 1">
    <v-card-title class="text-h5 font-weight-regular blue-grey white--text">
      Editar
    </v-card-title>
    <v-card-text>
      
  <v-form
    ref="form"
    v-model="valid"
    lazy-validation
  >
     <v-text-field
      v-model="nome"
      label="Nome completo"
      class="mt-4"
      required
      outlined
     ></v-text-field>

    <v-text-field
      v-model="email"
      label="E-mail"
      required
      outlined
    ></v-text-field>

    <v-text-field
      v-model="cpf"
      label="CPF"
      required
      outlined
    ></v-text-field>
</v-form>
<v-card-actions>
          <v-spacer></v-spacer>

          <v-btn
            color="red darken-1"
            text
            @click="$emit('fechaModal')"
          >
            Cancelar
          </v-btn>

          <v-btn
            text
            @click="editarUserCpf()"
          >
            Editar
          </v-btn>
        </v-card-actions>
          </v-card-text>
    </v-card>

    <!--EDITFORMCNPJ-->
     <v-card v-else>
    <v-card-title class="text-h5 font-weight-regular blue-grey white--text">
      Editar Editar
    </v-card-title>
    <v-card-text>
  <v-form
    ref="form"
    v-model="valid"
    lazy-validation
  >
     <v-text-field
      v-model="razaosocial"
      label="Razão Social"
      class="mt-4"
      required
      outlined
     ></v-text-field>

    <v-text-field
      v-model="email"
      label="E-mail"
      required
      outlined
    ></v-text-field>

    <v-text-field
      v-model="cnpj"
      label="CNPJ"
      required
      outlined
    ></v-text-field>  
    
  </v-form>
          <v-card-actions>
          <v-spacer></v-spacer>

          <v-btn
            color="red darken-1"
            text
            @click="$emit('fechaModal')"
          >
            Cancelar
          </v-btn>

          <v-btn
            text
            @click="editarUserCnpj()"
          >
            Editar
          </v-btn>
        </v-card-actions>
          </v-card-text>
    </v-card>
    </v-dialog>
</template>

<script>
export default {
    name: 'WeUserModalEditar',
    components: {},
    props: ["user"],
    data(){
      return{
        dialog: true,
        nome: this.user.nome,
        email: this.user.email,
        cpf: this.user.cpf,
        razaosocial: this.user.razaosocial,
        cnpj: this.user.cpnj,
        id: this.user.id
          }
        },
    
    methods : {
      editarUserCnpj(){
        const data = {
          id: this.user.id,
          razaosocial: this.razaosocial,
          email: this.email,
          cpnj: this.cnpj,
          categoria_id: 2
        }
        this.$store.dispatch('editUser', data)
        this.$emit('fechaModal')
      },
      editarUserCpf(){
        const data = {
          id: this.user.id,
          nome: this.nome,
          email: this.email,
          cpf: this.cpf,
          categoria_id: 1
        }
        this.$store.dispatch('editUser', data)
        this.$emit('fechaModal')
      }
    }    


}
</script>
<style scoped>


</style>