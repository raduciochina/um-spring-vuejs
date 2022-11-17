import axios from "axios";

// const USER_API_BASE_URL = "http://localhost:6060/um";
const USER_API_BASE_URL = "http://localhost:8080/api";

class UserService{
    async getUsers(){
        return await axios.get(USER_API_BASE_URL + '/users', {
            headers: {
                Authorization: 'Bearer ' + localStorage.getItem('token')
            }
        });
    }
    getUserByEmail(email){
        return axios.get(USER_API_BASE_URL + '/users/' + email);
    }
    async createUser(email, name, password){
        await fetch(USER_API_BASE_URL + '/users', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + localStorage.getItem('token')             

            },
            body: JSON.stringify(email, name, password)
        })

    }
    deleteUser(email){
        return axios.delete(USER_API_BASE_URL + '/users/' + email);
    }
    getUsersCreditCards(email){
        return axios.get(USER_API_BASE_URL + '/users/' + email + '/creditcards');
    }
    async addCreditCardToUser(newCreditCard){
        await fetch(USER_API_BASE_URL + '/users/' + newCreditCard.holder + '/creditcards', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + localStorage.getItem('token')             
            },
            body: JSON.stringify({
                "holder": newCreditCard.holder,
                "number": newCreditCard.number,
                "expiryDate": newCreditCard.expiryDate,
                "bankName": newCreditCard.bankName,
                "cvv": newCreditCard.cvv,
                "name": newCreditCard.name,
                "cardId":newCreditCard.cardId,
            })
        })
    }
    deleteCreditCardFromUser(creditCard){
        return axios.delete(USER_API_BASE_URL + '/users/' + creditCard.holder + '/creditcards/' + creditCard.cardId);
    }
    editUser(user){
        return axios.put(USER_API_BASE_URL + '/users/' + user.email, user);
    }
  
}


export default new UserService();