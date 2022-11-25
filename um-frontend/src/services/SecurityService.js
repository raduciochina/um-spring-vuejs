import axios from "axios";

const SECURITY_URL = "http://localhost:8080";

class SecurityService {
    async auth(username, password){
        return await axios.post(SECURITY_URL + "/auth", {
            username,
            password
        });
    }
    async loginWithGoogle(){
        return await axios.get(SECURITY_URL + "/oauth2/authorization/google");
    }
}

export default new SecurityService();