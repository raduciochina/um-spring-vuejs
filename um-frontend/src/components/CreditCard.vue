<template>
    <div class = "credit-card">
        <p>Number: {{creditCard.number}}</p>
        <p>Expiry Date: {{creditCard.expiryDate}}</p>
        <p>Bank Name: {{creditCard.bankName}}</p>
        <p>CVV: {{creditCard.cvv}}</p>
        <div class="options">
            <i @click="$emit('delete-credit-card', creditCard)" class="fas fa-trash"></i>
            <i @click="$emit('edit-credit-card', creditCard)" class="fas fa-pen-to-square"></i>
        </div>  
    </div>
</template>

<script>
    export default{
        name: 'CreditCard',
        props: {
            creditCard: Object,
        },
    }
</script>

<style scoped>

    .credit-card{
        border: 1px solid #ccc;
        border-radius: 10px;
        padding: 10px;
        margin-bottom: 10px;
        position: relative;
    }

    .fa-trash{
        cursor: pointer;
        color: tomato;
        margin: 10px;
    }
    .fa-pen-to-square{
        cursor: pointer;
        color: blue;
        margin: 10px;
    }
    .options{
        position: absolute;
        top: 10px;
        right: 10px;
    }

</style>