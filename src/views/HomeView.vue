<template>
  <div class="home">
    <MainApp />
  </div>
</template>

<script>
// @ is an alias to /src
import MainApp from '@/components/MainApp.vue'

export default {
  name: 'HomeView',
  components: {
    MainApp
  }
}
</script>
