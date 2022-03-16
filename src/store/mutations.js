import api from '../services/api'

export default {
    searchUsers(state){
        api.get('/users').then(usersDB =>{
            state.usuarios = usersDB.data
        })
    }
}