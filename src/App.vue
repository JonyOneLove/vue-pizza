<template>
  <div class="backdrop" @click="closeSidebar" v-show="showSidebar" />
  <Sidebar :showSidebar="showSidebar" />
  <div class="wrapper">
    <Header @showOpen="openSidebar" />
    <router-view />
  </div>
</template>

<script>
import Header from '@/components/Header'
import Sidebar from './components/Sidebar.vue'
export default {
  components: { Header, Sidebar },
  data() {
    return {
      showSidebar: false,
    }
  },
  methods: {
    openSidebar() {
      this.showSidebar = true
    },
    closeSidebar() {
      this.showSidebar = false
    },
  },
}
</script>

<style lang="scss">
.backdrop {
  background-color: rgba(0, 0, 0, 0.3);
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 10;
}

#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
