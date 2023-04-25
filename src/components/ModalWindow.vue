<script lang="ts" setup>

const props = defineProps<{
  title: string;
  onClose: () => void
}>();


</script>
<template>
  <div class="modal-mask">
    <div class="modal-wrapper">
      <div class="header">
        <div class="title">{{ props.title }}</div>
        <button class="close" @click="props.onClose">X</button>
      </div>
      <slot></slot>
    </div>
  </div>
</template>

<style scoped>
.modal-mask {
  align-items: center;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  height: 100%;
  justify-content: center;
  left: 0;
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 100;
}

.modal-wrapper {
  background-color: white;
  border: 1px solid black;
  height: 23rem;
  width: 30vw;
}

.header {
  border-bottom: 1px solid black;
  display: flex;
  justify-content: space-between;
  padding: 0.5rem;
}

.close {
  background: none;
  color: black;
  padding: 0;
}
</style>