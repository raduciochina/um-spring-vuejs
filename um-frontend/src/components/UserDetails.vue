<template>
    <div class="user-details">
        <h2>User Details</h2>
        <hr>
        <h3>Name: {{user.name}}</h3>
        <p>Email: {{user.email}}</p>
        <p>Parola: {{user.password}}</p>
        <h3>Credit Cards</h3>
        <div class="credit-cards" >
            <p v-if="user.creditCardList.length === 0">No credit cards</p>
            <CreditCard @delete-credit-card="deleteCreditCard" v-for="creditCard in user.creditCardList" :key="creditCard.id" :creditCard="creditCard"/>
        </div>
        <Button @btn-click="$emit('show-add-credit-card')" :text="showAddCreditCard ? 'Close' : 'Add Credit Card'" :color="showAddCreditCard ? 'red' : 'green'" />
    </div>
</template>

<script>
    import CreditCard from './CreditCard.vue'
    import Button from './Button.vue'
    import UserService from '@/services/UserService'

    export default ({
        data() {
            return {
                creditCardList: [],
            };
        },
        name: 'UserDetails',
        props: {
            user: Object,
            creditCard: Object,
            showAddCreditCard: Boolean
        },
        components: {
            CreditCard,
            Button
        },
        methods: {
            deleteCreditCard(creditCard){
            if(confirm("Are you sure?")) {
            UserService.deleteCreditCardFromUser(creditCard)
            .then(() => {
                this.creditCardList = this.creditCardList.filter(card => card.id !== creditCard.id);
                })
            }            
        }     
    },
    created() {
        this.creditCardList = UserService.getUsersCreditCards(this.user.email)
    }
})
    
</script>

<style scoped>
h2{
    margin-top: 10px;
}
hr{
    border: 1px solid #ccc;
    margin-bottom: 10px;
}

.credit-cards{
    border: 1px solid #ccc;
    border-radius: 10px;
    padding: 10px;
    margin-bottom: 10px;
}



</style>