<template>
    <header>
        <h1>{{title}}</h1>
        <Button @btn-click="$emit('show-add-user')" :text="showAddUser ? 'Close' : 'Add User'" :color="showAddUser ? 'red' : 'green'" />
    </header>
</template>

<script>
import Button from './Button.vue';
    export default {
        name: 'UserHeader',
        props:{
            title: String,
            showAddUser: Boolean,
        },
    components: {
        Button,
    }
    }
</script>

<style scoped>
    header{
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 10px;
        border: 1px solid #ccc;
        border-radius: 10px;
        margin-bottom: 10px;
    }

</style>