<script lang="ts" setup>
import { reactive, ref } from "vue";
import type { Account } from "@/stores/auth";
import { useAuthStore } from "@/stores/auth";
import router from "@/router";
import ModalForm from "@/components/Modal.vue";

const authStore = useAuthStore();

const account = reactive<Account>({ name: "", password: "" });
const isError = ref(false);

const submitForm = async (e: Event) => {
  e.preventDefault();
  const res = await authStore.checkAccount(account);
  if (!res) {
    isError.value = true;
  } else {
    isError.value = false;
    router.replace("/success");
  }
};
const closeForm = () => {
  router.push("/");
};
</script>

<template>
  <ModalForm :onClose="closeForm" title="Login">
    <form class="form">
      <input v-model="account.name" placeholder="login" type="text">
      <input v-model="account.password" placeholder="password" type="password">
      <span v-if="isError" class="error">Wrong login or password</span>
      <button :disabled="authStore.isLoading" class="submit" @click="submitForm">Submit</button>
    </form>
  </ModalForm>
</template>


<style scoped>
.form {
  align-items: center;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin: 2rem;
}

.error {
  color: tomato;
}
</style>