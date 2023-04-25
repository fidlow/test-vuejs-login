<script lang="ts" setup>
import { RouterView } from "vue-router";
import router from "@/router";
import { useAuthStore } from "@/stores/auth";

const authStore = useAuthStore();
const showModal = () => {
  router.replace("/login");
};
</script>

<template>
  <main>
    <button v-if="!authStore.isAuthenticated" class="button" @click="showModal">Open login form</button>
    <span v-if="authStore.isAuthenticated" class="account">Hello, {{ authStore.account.name }}</span>
  </main>
  <RouterView />
</template>

<style scoped>
.button {
  margin-left: 20px;
}

.account {
  align-items: center;
  display: flex;
  font-size: 4rem;
  height: 100vh;
  justify-content: center;
}
</style>
