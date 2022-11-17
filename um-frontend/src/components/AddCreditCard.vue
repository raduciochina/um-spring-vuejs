<template>
        <div class="add-credit-card">
        <form @submit="onSubmit">
        <div class="form-control">
            <label for="bankName">Bank Name</label>
            <input type="text" id="bankName" v-model="bankName" />
        </div>
        <!-- <div class="form-control">
            <label for="holder">Holder's email</label>
            <input type="text" id="holder" v-model="holder" />
        </div> -->
        <div class="form-control">
            <label for="name">Name</label>
            <input type="text" id="name" v-model="name" />
        </div>
        <div class="form-control">
            <label for="expiryDate">Expiry Date</label>
            <input type="text" id="expiryDate" v-model="expiryDate" />
        </div>
        <div class="form-control">
            <label for="number">Number</label>
            <input type="text" id="number" v-model="number" />
        </div>
        <div class="form-control">
            <label for="name">CVV</label>
            <input type="text" id="cvv" v-model="cvv" />
        </div>
        <input type="submit" value="Save Credit Card" class="btnSave" />
        </form>
    </div>
</template>

<script>
    export default{
        name: 'AddCreditCard',
        data() {
            return {
                cardId: '',
                bankName: '',
                // holder: '',
                expiryDate: '',
                name: '',
                number: '',
                cvv: '',
            }
        },
        props: {
            user: {
                type: Object,
            }
        },
        methods: {
            onSubmit(e) {
            e.preventDefault();
            if(!this.bankName || !this.expiryDate
                || !this.number || !this.cvv  || !this.name) {
                alert('Please enter all fields');
                return;
            }
            const newCreditCard = {
                cardId: Math.random().toString(36).slice(2),
                bankName: this.bankName,
                holder: this.user.email,
                expiryDate: this.expiryDate,
                name: this.name,
                number: this.number,
                cvv: this.cvv,
            };
            this.$emit('add-credit-card', newCreditCard);
            this.cardId = '';
            this.bankName = '';
            // this.holder = '';
            this.expiryDate = '';
            this.name = '';
            this.number = '';
            this.cvv = '';  
            }
        }
    }
</script>

<style>
.add-credit-card{
    width: 50%;
    margin: 5% auto;
    padding: 20px;
    border: 1px solid #ccc;
    border-radius: 10px;
}
.form-control{
    margin-bottom: 10px;
}
.form-control label{
    display: block;
    margin-bottom: 5px;
}
.form-control input{
    width: 100%;
    padding: 5px;
    border: 1px solid #ccc;
    border-radius: 5px;
}
.btnSave{
    background: #333;
    color: #fff;
    border: none;
    padding: 5px 10px;
    border-radius: 5px;
    cursor: pointer;
}
</style>