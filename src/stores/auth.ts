import { defineStore } from "pinia";

export type Account = {
  name: string,
  password?: string
}

const mockAccount: Account = {
  name: "login",
  password: "password"
};

export const useAuthStore = defineStore({
  id: "auth",
  state: () => ({
    isAuthenticated: false,
    isLoading: false,
    account: {} as Account
  }),
  actions: {
    setAccount(newAccount: Account) {
      this.account.name = newAccount.name;
    },
    setLogged() {
      this.isAuthenticated = true;
    },
    async checkAccount(account: Account): Promise<boolean> {
      this.isLoading = true;
      return await new Promise(resolve => {
        setTimeout(() => {
          if (account.name === mockAccount.name && account.password === mockAccount.password) {
            this.setAccount(account);
            resolve(true);
          } else {
            resolve(false);
          }
          this.isLoading = false;
        }, 1000);
      });
    }
  }
});