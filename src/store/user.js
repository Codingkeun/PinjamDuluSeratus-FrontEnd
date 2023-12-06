// @ts-check
import { defineStore } from 'pinia'
import {ApiCore} from '../services/core'
import apiEndpoint from '../services/api-endpoint'

/**
 * Simulate a login
 */
async function apiLogin(role, email, password) {
  const response = await ApiCore.store(apiEndpoint.AUTHENTICATION, {
      email: email,
      password: password,
      role: role
  }, "signin")
  
  if (response.status)
    return Promise.resolve(response)
  else
    return Promise.reject(response.message)
}

export const useUserStore = defineStore('store', {
  state: () => ({
    role: '',
    isLogin: false
  }),
  actions: {
    logout() {
      this.$patch({
        role: '',
        isLogin: false
      })

      // we could do other stuff like redirecting the user
    },

    /**
     * Attempt to login a user
     */
    async login(role, user, password) {
      try {
        const userData = await apiLogin(role, user, password)
        this.$patch({
          role: role,
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
