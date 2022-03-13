<template>
  <hello-metamask />
</template>

<script>
import HelloMetamask from "@/components/HelloMetaMask.vue";
export default {
  name: "Main-App",
  beforeCreate() {
    console.log("registerWeb3 Action dispatched from MainApp.vue");
    this.$store.dispatch("registerWeb3");
  },
  components: {
    "hello-metamask": HelloMetamask,
  },
};
</script>

<style scoped></style>
