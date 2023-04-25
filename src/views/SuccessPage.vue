<script lang="ts" setup>
import ModalWindow from "@/components/ModalWindow.vue";
import router from "@/router";
import { onUnmounted, ref } from "vue";
import { useAuthStore } from "@/stores/auth";

const authStore = useAuthStore();

const count = ref(10);

const closeForm = () => {
  router.replace("/").then(() => {
    authStore.setLogged();
  });
};

const interval = setInterval(() => {
  if (count.value === 0) {
    closeForm();
  } else {
    count.value--;
  }
}, 1000);

onUnmounted(() => {
  clearInterval(interval);
});

</script>
<template>
  <ModalWindow :onClose="closeForm" title="Success">
    <div class="form">
      <span class="check">✔️</span>
      <button class="submit" @click="closeForm">Close ({{ count }} sec)</button>
    </div>
  </ModalWindow>
</template>


<style scoped>
.form {
  align-items: center;
  display: flex;
  flex-direction: column;
}

.check {
  font-size: 8rem;
}
</style>