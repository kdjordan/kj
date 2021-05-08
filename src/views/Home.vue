<template>
  <div class="home">
    <div>
      <h1></h1>
    </div>
  </div>
</template>

<script>
import { gsap } from "gsap";

export default {
    methods: {
        runAnimation() {
            setTimeout(()=> {
                gsap.registerPlugin(TextPlugin);
                gsap.to("h1", {text:"Kevin Jordan", ease:"power1.in", duration:2})

            }, 2500)

        }
    },
mounted() {
    this.runAnimation()
}
}
</script>

<style scoped lang="scss">
.home {
  display: flex;
  height: 100vh;
  justify-content: center;
  align-items: center;
}
</style>
