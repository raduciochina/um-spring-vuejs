<template>
    <div class="container">
      <UserHeader @show-add-user="toggleAddUser()" title="User Management" :showAddUser = "showAddUser"/>
      <div v-if="showAddUser">
        <AddUser @add-user='addUser'/>
      </div>
      <div v-if="showEditUser">
        <!-- send user from editUser method in EditUser  -->
        <EditUser @edit-this-user="modifyUser" :user="user"/>
      </div>
      <div>
        <Users @edit-user='editUser'/>
      </div>
    </div>
  </template>
  
  <script>
  import UserHeader from './UserHeader.vue';
  import Users from './Users.vue';
  import AddUser from './AddUser.vue';
  import EditUser from './EditUser.vue';
  import UserService from '../services/UserService';
  
  export default {
    name: 'Home',
    components: {
      UserHeader,
      Users,
      AddUser,
      EditUser,
    },
    data() {
      return {
        user: null,
        showAddUser: false,
        showEditUser: false,
      };
    },
    methods: {
      toggleAddUser() {
        this.showAddUser = !this.showAddUser;
      },
      toggleEditUser() {
        this.showEditUser = !this.showEditUser;
      },
       addUser(newUser) {
        UserService.createUser(newUser)
        this.toggleAddUser()
      },
      editUser(user){
        this.user = user;
        this.toggleEditUser()
      },
      modifyUser(user){
        UserService.editUser(user)
        this.toggleEditUser()
      },
      reloadPage(){
        window.location.reload();
      }
    },
  }
  </script>
  <style>
  </style>
  