import api from '../services/api'

export default {
    async addUser({commit}, payload){
        await api.post('/users/', payload)
        await commit('searchUsers') 
    },
    async delUser({commit}, payload){
        await api.delete(`/users/${payload}`)
        await commit('searchUsers')
    },
    editUser({commit}, data){
         api.put(`/users/${data.id}`, data).then(()=>{
            commit('searchUsers')
         })
    }
}