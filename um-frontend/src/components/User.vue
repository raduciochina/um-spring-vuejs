<template>
    <div class="user">
        <h3>{{user.name}}</h3>
        <p>{{user.email}}</p>
        <i @click="$emit('delete-user', user.email)" class="fas fa-times"></i>
        <i @click='toggleShowUserDetails()' class="fas fa-info"></i>
        <i @click ="$emit('edit-user', user)" class="fa-solid fa-pen-to-square"></i>
        <div class="user-details" v-if="showUserDetails">
            <UserDetails :user="user" @show-add-credit-card="toggleAddCreditCard()" :showAddCreditCard = "showCreditCardForm "/>
            <div v-if="showCreditCardForm">
                <AddCreditCard :user="user" @add-credit-card = 'addCreditCard'/>
            </div>
        </div>
    </div>
</template>
<script>

import UserDetails from './UserDetails.vue';
import AddCreditCard from './AddCreditCard.vue';
import UserService from '@/services/UserService';

export default{
    
    data(){
        return{
            showUserDetails: false,
            showCreditCardForm: false
        }
    },
    name: 'User',
    props: {
        user: Object,
    },
    methods: {
        addCreditCard(newCreditCard){
            UserService.addCreditCardToUser(newCreditCard)
        },
        editUser(user){
            this.$emit('edit-user', user)
        },
        toggleShowUserDetails(){
            this.showUserDetails = !this.showUserDetails
        },
        toggleAddCreditCard(){
            this.showCreditCardForm = !this.showCreditCardForm
        }

    },
    components: {
        UserDetails,
        AddCreditCard
    }

}
</script>

<style scoped>
    .user{
        border: 1px solid #ccc;
        border-radius: 10px;
        padding: 10px;
        margin-bottom: 10px;
        position: relative;
    }
    .i{
        cursor: pointer;
    }
    .user-details{
        margin-top: 10px;
    }
    .fa-times{
        color: red;
        position: absolute;
        top:12px;
        right: 40px;
        cursor: pointer;
    }
    .fa-info{
        color: green;
        position: absolute;
        top: 10px;
        right: 10px;
        cursor: pointer;
    }
    .fa-pen-to-square{
        color: blue;
        position: absolute;
        top: 10px;
        right: 70px;
        cursor: pointer;
    }
</style>