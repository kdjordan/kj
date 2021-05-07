<template>
  <div id="app">
    <Loading v-if="getIsLoading"/>
      <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>
    <router-view/>
  </div>
</template>

<script>
import Loading from '@/components/Loading'
import { mapGetters } from 'vuex'
export default {
  components: {
    Loading
  },
  computed: {
    ...mapGetters(['getIsLoading'])
  }
  
  
}
</script>
<style lang="scss">
@import '@/assets/scss/base.scss';

</style>
