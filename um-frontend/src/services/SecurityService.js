import axios from "axios";

const SECURITY_URL = "http://localhost:8080/auth";

class SecurityService {
    async auth(username, password){
        return await axios.post(SECURITY_URL, {
            username,
            password
        });
    }
}

export default new SecurityService();