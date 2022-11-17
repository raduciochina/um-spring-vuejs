<template>
  <button v-on:click="onClick()" :style="{ background: color }">
    {{ text }}
  </button>
</template>

<script>
export default {
  name: "AddButton",
  props: {
    text: String,
    color: String,
  },
  methods: {
    onClick() {
        this.$emit("btn-click");
    },
  },
};
</script>
<style scoped>
button {
  border: none;
  border-radius: 10px;
  padding: 10px;
  color: white;
  cursor: pointer;
  font-weight: bold;
}
</style>
