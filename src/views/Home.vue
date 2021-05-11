<template>
  <div class="home">
    <Hero />
    <About />
  </div>
</template>

<script>
import Hero from '@/components/Hero'
import About from '@/components/About'
export default {
  components: {
    Hero,
    About
  }
}
</script>

<style scoped lang="scss">
// .home {
//   display: flex;
//   height: 100vh;
//   justify-content: center;
//   align-items: center;
// }
</style>
