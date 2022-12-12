import axios from 'axios';
import { inject } from 'vue';

// const axios: any = inject('axios') 

class UserService {
    
    async login(params : any) {
        const res = await axios.post('http://localhost:8080/api/login', params);
        return res;
    }

    async signup(params : any) {
        const res = await axios.post('http://localhost:8080/api/signup', params);
        return res;
    }

}

export const userService = new UserService();