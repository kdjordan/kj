<template>
  <div class="loading">
      <div class="loading__logo">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 71.1 90.63" fill="var(--green)">
                <polygon points="57.73 90.63 38.29 54.85 31.26 58.66 48.63 90.63 57.73 90.63" class="leg1" />
                <polygon points="71.1 90.63 43.69 40.17 36.66 43.99 62 90.63 71.1 90.63" class="leg2"/>
                <polygon points="21.04 66.6 21.04 66.6 57.08 0 47.98 0 8 73.89 8 1 0 1 0 90.54 8 90.54 8 90.49 8.09 90.54 9.77 87.44 9.77 87.44 21.04 66.6" class="k1"/>
                <polygon points="20.15 68.25 20.15 1 12.15 1 12.15 83.03 20.15 68.25" class="k2"/>
                <polygon points="60.13 0 20.15 73.89 20.15 73.87 12.15 88.62 12.15 90.54 20.15 90.54 20.15 90.49 20.24 90.54 69.23 0 60.13 0" class="k2"/>
            </svg>
      </div>
  </div>
</template>

<script>
import { gsap } from 'gsap';
export default {
    data() {
        return {

        }
    },
    methods: {
        runAnimation() {
            gsap.set('.leg1, .leg2, .k1, .k2', {opacity: 0})
            let tl = gsap.timeline()
            tl.to('.leg1', {opacity: 1, duration: .5})
            tl.to('.leg2', {opacity: 1, duration: .5})
            tl.to('.k2', {opacity: 1, duration: .5})
            tl.to('.k1', {opacity: 1, duration: .5})
            tl.to('.leg1, .leg2, .k1, .k2', {opacity: 0})
            tl.to('.loading', {width: 0})
            this.$store.commit('setIsLoading')
        }
    },
    mounted() {
        this.runAnimation()
    }

}
</script>

<style scoped lang="scss">
.loading {
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: 0;
    left: 0;
    background: var(--dark-slate);
    height: 100vh;
    width: 100vw;

    &__logo {
        width: 10%;
    }
}

</style>