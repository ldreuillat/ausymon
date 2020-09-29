<template>
  <div>
    <div class="collapse-header">
      <span v-if="open" @click="open = !open">&#x25B2; Réduire</span>
      <span v-if="!open" @click="open = !open">&#x25BC; Etendre</span>
    </div>
    <slot v-if="open"></slot>
  </div>
</template>

<script>
export default {
  name: 'CollapsibleSection',
  data() {
    return { open: true };
  },
};
</script>

<style>
.collapse-header {
  position: relative;
  width: 655px;
  left: 100px;
  background-color: #bbb;
  padding: 3px;
  cursor: pointer;
}
</style>
