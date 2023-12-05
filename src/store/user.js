// @ts-check
import { defineStore } from 'pinia'
import {ApiCore} from '../services/core'
import apiEndpoint from '../services/api-endpoint'

/**
 * Simulate a login
 */
async function apiLogin(email, password) {
  const response = await ApiCore.store(apiEndpoint.AUTHENTICATION, {
      email: email,
      password: password
  }, "signin")
  
  if (response.status)
    return Promise.resolve(response)
  else
    return Promise.reject(response.message)
}

export const useUserStore = defineStore('store', {
  state: () => ({
    isLogin: false
  }),
  actions: {
    logout() {
      this.$patch({
        isLogin: false
      })

      // we could do other stuff like redirecting the user
    },

    /**
     * Attempt to login a user
     */
    async login(user, password) {
      try {
        const userData = await apiLogin(user, password)
        this.$patch({
          isLogin: true,
          ...userData.user,
        })
        return Promise.resolve(userData)
      } catch (error) {
        return Promise.reject(error)
      }
    },
  },
  persist: true,
})
