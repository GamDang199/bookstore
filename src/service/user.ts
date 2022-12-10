import { inject } from 'vue';

const axios: any = inject('axios') 

class UserService {
    
    async login() {
        const res = axios.get();
    }

}

export const userService = new UserService();