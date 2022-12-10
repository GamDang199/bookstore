import { defineStore } from 'pinia';

export const useUserStore = defineStore({
    id: 'user',

    state: () => ({
        user: {}
    }),

    actions: {
       login() {
        return '';
       },

       logout() {

       },

       register() {

       },
    }
  })