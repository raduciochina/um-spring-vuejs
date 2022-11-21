<template>
    <div id="welcome">
        <h2>Welcome to User Management Application</h2>
        <h4>Please provide your credentials in order to access the app</h4>
    </div>
    <div>
        <form id="login-form">
            <div class="form-group">
                <label for="email">User Name</label>
                <input type="email" class="form-control" id="email" aria-describedby="emailHelp" placeholder="Enter email" v-model="username">
                <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
            </div>
            <div class="form-group">
                <label for="password">Password</label>
                <input type="password" class="form-control" id="password" placeholder="Password" v-model="password">
            </div>
            <button  type="submit" class="btn btn-primary" @click="login">Submit</button>
        </form>
    </div>
    <!-- login with github button -->
    <div class="oauth-buttons">
        <a id="github-button" class="btn btn-block btn-social btn-github"><i class="fa-brands fa-github"></i> Sign in with Github</a>
        <a id="facebook-button" class="btn btn-block btn-social btn-facenook"><i class="fa-brands fa-facebook"></i> Sign in with Facebook</a>
        <a id="facebook-button" class="btn btn-block btn-social btn-google"><i class="fa-brands fa-google"></i> Sign in with Google</a>
    </div>
    <div>
        <p>Don't have an account? <router-link to="/register">Register</router-link></p>
    </div>
</template>

<script>
    import SecurityService from '../services/SecurityService';
    export default ({
        name:'Login',
        methods: {
            login() {
                SecurityService.auth(this.username, this.password)
                    .then(response => {
                        if(response.data) {
                            this.$router.push('/app');
                            localStorage.setItem('token', response.data.jwt);

                        } else {
                            alert('Invalid credentials');
                        }
                    })
                    .catch(error => {
                        console.log(error);
                    });
            }
        },
    })

</script>

<style scoped>
    #welcome{
        margin: 40px;
    }
    #login-form {
        width: 50%;
        margin: 0 auto;
    }  
    .oauth-buttons {
        display: flex;
        flex-direction: column;
        width: 50%;
        margin: 30px auto;
    }


</style>

