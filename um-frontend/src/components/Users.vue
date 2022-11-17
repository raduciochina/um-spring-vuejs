<template>
    <div class="users" :key="user.email" v-for="user in users">
        <User @edit-user="editUser(user)" @show-user-info="showUserInfo" @delete-user="deleteUser" :user="user" />  
    </div>
</template>

<script>
import UserService from '../services/UserService';
import User from './User.vue';

export default ({
    data() {
        return {
            users: [],
        };
    },
    name: 'Users',
    components: {
        User,
    },
    methods: {
    getUsers(){
        UserService.getUsers()
        .then(response => {
            this.users = response.data;
        })
    },
    editUser(user){
        this.$emit('edit-user', user)
    },
    deleteUser(email) {
      if(confirm("Are you sure?")) {
        UserService.deleteUser(email)
        .then(() => {
          this.users = this.users.filter(user => user.email !== email);
        })
      }
    },
    },
    created(){
        this.users = this.getUsers();
    }
})
</script>
<style scoped>
    .users{
        margin-top: 10px;
    }

</style>
