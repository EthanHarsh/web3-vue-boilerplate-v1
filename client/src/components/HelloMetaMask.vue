<template>
  <div class="metamask-info">
    <f-card class="nav-card">
      <h1 class="no-style">Wallet Connect Demo</h1>
      <f-button size="small" @click.native="onClick" class="connect-btn">
        <p v-if="!web3.isInjected">Not Connected</p>
        <div v-else>
          <f-ellipsis
            :text="web3.account"
            overflow="middle"
            :fixed-chars-count="4"
          ></f-ellipsis>
        </div>
      </f-button>
    </f-card>
    <f-window modal title="Wallet Info" style="max-width: 500px" ref="win">
      <p>Connection: {{ web3.isInjected }}</p>
      <p>Network: {{ web3.networkId }}</p>
      <p>Account: {{ web3.account }}</p>
      <p>
        Balance: {{ web3.balance }}
        <span v-if="web3.networkId === 'Fantom Opera'">FTM</span
        ><span v-if="web3.networkId === 'Ethereum Mainnet'">ETH</span>
      </p>
    </f-window>
  </div>
</template>
<script>
import FButton from "fantom-vue-components/src/components/FButton/FButton.vue";
import FEllipsis from "fantom-vue-components/src/components/FEllipsis/FEllipsis.vue";
import FCard from "fantom-vue-components/src/components/FCard/FCard.vue";
import FWindow from "fantom-vue-components/src/components/FWindow/FWindow.vue";
import getWeb3V2 from "@/utils/getWeb3-v2";

export default {
  name: "hello-metamask",
  components: { FButton, FEllipsis, FCard, FWindow },
  computed: {
    web3() {
      return this.$store.state.web3;
    },
  },
  methods: {
    async onClick() {
      await window.ethereum.request({ method: "eth_requestAccounts" });
      console.log("registerWeb3 Action dispatched from MainApp.vue");
      const result = await getWeb3V2();
      this.$store.commit("updateWeb3", result);
      this.$refs.win.show();
    },
  },
};
</script>
<style scoped>
.metamask-info {
  display: flex;
  flex-flow: column nowrap;
  align-items: flex-start;
  justify-content: space-between;
  height: 66vh;
}
.nav-card {
  width: 100%;
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  align-content: center;
  padding-top: 1rem;
  padding-bottom: 1rem;
}
.connect-btn {
  margin-right: 5rem;
}
h1 {
  margin-bottom: 0;
  margin-left: 5rem;
}
</style>
