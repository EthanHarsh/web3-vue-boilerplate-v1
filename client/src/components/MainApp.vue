<template>
  <div class="info">
    <hello-metamask />
  </div>
</template>

<script>
import HelloMetamask from "@/components/HelloMetaMask.vue";
export default {
  name: "Main-App",
  components: {
    "hello-metamask": HelloMetamask,
  },
};
</script>

<style scoped>
body {
  background: #f6f9fc;
}
</style>
