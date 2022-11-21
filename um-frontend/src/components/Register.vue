<template>

</template>

<script>
export default {
  name: 'Register',
  data() {
    return {
      username: '',
      password: '',
      email: '',
      firstName: '',
      lastName: '',
    };
  },
  methods: {
    register() {
      SecurityService.register(this.username, this.password, this.email, this.firstName, this.lastName)
        .then((response) => {
          if (response.data) {
            this.$router.push('/login');
          } else {
            alert('Invalid credentials');
          }
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
};

</script>

<style scoped>

</style>