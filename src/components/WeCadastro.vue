<template>
   <v-card class="card">
    <v-card-title class="text-h5 font-weight-regular blue-grey white--text">
      Cadastrar Usuário
    </v-card-title>
    <v-tabs>
    <v-tab @click="Pessoafisica = true">CPF</v-tab>
    <v-tab @click="Pessoafisica = false">CNPJ</v-tab>
  </v-tabs>
    <v-card-text>
  <v-form 
    v-if="Pessoafisica"
    ref="form"
    v-model="valid"
    lazy-validation
  >
     <v-text-field
      v-model="nome"
      label="Nome completo"
      :rules="nameRules"
      class="mt-4"
      required
      outlined
     ></v-text-field>

    <v-text-field
      v-model="email"
      label="E-mail"
      :rules="emailRules"
      required
      outlined
    ></v-text-field>

    <v-text-field
      label="CPF"
      v-model="cpf"
      required
      outlined
      number
    ></v-text-field>

    <v-btn
      :disabled="!valid"
      color="success"
      class="mr-4"
      @click="addCpf()"
    >
      Salvar
    </v-btn>
    
  </v-form>

<!--FORMJURIDICA-->
  <v-form 
    v-else
    ref="form"
    v-model="valid"
    lazy-validation
  >
     <v-text-field
      v-model="razaosocial"
      :rules="nameRules"
      label="Razão Social"
      class="mt-4"
      required
      outlined
     ></v-text-field>

    <v-text-field
      v-model="email"
      :rules="emailRules"
      label="E-mail"
      required
      outlined
    ></v-text-field>

    <v-text-field
      v-model="cpnj"
      label="CNPJ"
      required
      outlined
    ></v-text-field>

    <v-btn
      :disabled="!valid"
      color="success"
      class="mr-4"
      @click="addCnpj()"
    >
      Salvar
    </v-btn>
    
  </v-form>
      
    </v-card-text>
  </v-card>
</template>

<script>
  export default {
    name: 'WeCadastro',
    data(){
      return{
        valid: true,
        Pessoafisica: true,
        nome: null,
        cpf: null,
        email: null,
        emailRules: [
          v => !!v || 'E-mail is required',
          v => /.+@.+\..+/.test(v) || 'E-mail must be valid',
          ],
        nameRules: [
          v => !!v || 'Name is required',
          v => (v && v.length >= 3) || 'Name must be less than 10 characters',
          ],
        razaosocial: null,
        cpnj: null
        }
      },

    methods: {
      addCpf(){

        if(this.cpf && this.email && this.nome){
        const data = {
          nome: this.nome,
          email: this.email,
          cpf: this.cpf,
          categoria_id: 1
        }

        this.$store.dispatch('addUser', data)
        }
      },

      addCnpj(){

        if(this.razaosocial && this.email && this.cpnj){
        const data = {
          razaosocial: this.razaosocial,
          email: this.email,
          cpnj: this.cpnj,
          categoria_id: 2
        }

        this.$store.dispatch('addUser', data)
        }
      }
    }  
    
  }
</script>

<style scoped>
form{
 padding: 2%;
}
</style>
