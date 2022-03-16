<template>
 <div>
     <v-menu
      transition="slide-x-transition"
      right
    >
      <template v-slot:activator="{ on, attrs }">
        <v-btn
          v-bind="attrs"
          v-on="on"
          icon
        >
          <v-icon
          dark
        >
          mdi-dots-vertical
        </v-icon>
        </v-btn>
      </template>

      <v-list>
        <v-list-item
          v-for="(item, i) in items"
          :key="i"
          @click="item.click()"
        >
          <v-icon left color="black">{{item.icone}}</v-icon>
          <v-list-item-title rigth>{{ item.title }}</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-menu>
    <WeModalEditar
    v-if="items[0].modal"
    @fechaModal="items[0].modal = false"
    :user="user"
    />
    <WeModalExcluir
    v-if="items[1].modal"
    @fechaModal="items[1].modal = false"
    :user="user"
    />
 </div>  
</template>
<script>
import WeModalEditar from '../components/WeUserModalEditar.vue'
import WeModalExcluir from '../components/WeUserModalExcluir.vue'
export default {
    name: 'WeUserMenu',
    components: {
      WeModalEditar,
      WeModalExcluir
    },
    props: ['user'],
    data(){
        return {
            items: [
        { 
            icone: 'mdi-pencil', 
            title: 'Editar',
            modal: false,
            click(){
                this.modal = true
            } 
        },
        { 
            icone: 'mdi-trash-can', 
            title: 'Excluir',
            modal: false,
            click(){
                this.modal = true
            }
        },
      ],
        }
    }
}
</script>