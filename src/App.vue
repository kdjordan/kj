<template>
  <div id="app">
    <Loading v-if="getIsLoading"/>
    <div v-else>
      <Header />
      <router-view/>
    </div>
  </div>
</template>

<script>
import Loading from '@/components/Loading'
import Header from '@/components/Header'
import { mapGetters } from 'vuex'
export default {
  components: {
    Loading,
    Header
  },
  computed: {
    ...mapGetters(['getIsLoading'])
  }
  
  
}
</script>
<style lang="scss">
@import '@/assets/scss/base.scss';

</style>
