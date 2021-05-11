<template>
  <div class="hero wrapper">
    <div>Hi Friend 👋</div>
    <h1></h1>
    <div>I build Internet Things.</div>
    <div class="hero__desc">I an <span style="color: var(--green);">Oregon</span> based Full Stack Web Developer with a focus on user experience and modern software architecture.</div>
  </div>
</template>

<script>
import { gsap } from "gsap";

export default {
    methods: {
    },
mounted() {
    gsap.registerPlugin(TextPlugin);
    gsap.to("h1", {text:"I'm Kevin Jordan.", ease:"power1.in", duration:2})

}
}
</script>

<style scoped lang="scss">
.hero {
    color: var(--slate);
    display: flex;

    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    width: 70%;
    height: 100vh;
    margin: 0 auto;
    margin-top: -5rem;

    & h1 {
        min-height: 6rem;
        color: var(--green);
        font-size: var(--lrg);
    }

    & div {
        margin: 1rem 0;
    }

    & div:nth-of-type(2), div:nth-of-type(1){
        font-size: var(--med);
    }

    &__desc {
        text-align: left;
        width: 50%;
    }
    
}
</style>