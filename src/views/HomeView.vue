<template>
  <div class="home">
    <div class="header">
      <h1>ShareLink</h1>
      <ThemeBtn />
    </div>
    <ListCard />
  </div>
</template>

<script setup lang="ts">
import ThemeBtn from './ThemeBtn.vue';
import ListCard from './ListCard.vue';
</script>

<style scoped>
.home {
  height: 100%;
  background-color: var(--home-bg-color);
}
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
  width: 100%;
  height: 60px;
  margin-top: 1px;
  border-radius: 5px;
  background-color: #fff;
  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.1);
  background-color: var(--home-cell-bg-color);
  color: var(--home-font-color-b);
}

</style>