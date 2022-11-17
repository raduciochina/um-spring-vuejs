<template>
    <div class="add-user">
        <h2>{{title}}</h2>
        <form @submit="onSubmit">
        <div class="form-control">
            <label for="name">Name</label>
            <input type="text" id="name" v-model="name" />
        </div>
        <div class="form-control">
            <label for="email">Email</label>
            <input type="text" id="email" v-model="email" />
        </div>
        <div class="form-control">
            <label for="password">Password</label>
            <input type="password" id="password" v-model="password" />
        </div>
        <input type="submit" value="Save User" class="btnSave" />
        </form>
    </div>
</template>

<script>
export default {
    name: 'AddUser',
    data() {
        return {
            title:'Add User',
            name: '',
            email: '',
            password: '',
        };
    },
    methods: {
        onSubmit(e) {
            e.preventDefault();
            if(!this.name || !this.email || !this.password) {
                alert('Please enter all fields');
                return;
            }
            const newUser = {
                name: this.name,
                email: this.email,
                password: this.password,
            };
            this.$emit('add-user', newUser);
            this.name = '';
            this.email = '';
            this.password = '';
        },

        // editUser(user){
        // this.title = 'Edit User';
        // this.name = user.name;
        // this.email = user.email;
        // this.password = user.password;
        // }
    
    
    }
}
</script>
    
<style>
/* style the form to look good */
.add-user{
    width: 50%;
    margin: 0 auto;
    padding: 20px;
    border: 1px solid #ccc;
    border-radius: 10px;
}
.add-user h2{
    text-align: center;
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