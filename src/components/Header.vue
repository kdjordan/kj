<template>
    <div class="top">
        <div class="top__left">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="-10 -10 200 200" fill="var(--green)">
                <circle class="cls-1" cx="68.5" cy="68.5" r="70"/>
                <polygon points="93.73 112 74.29 76.21 67.26 80.03 84.63 112 93.73 112"/>
                <polygon points="107.1 112 79.69 61.53 72.66 65.35 98 112 107.1 112"/>
                <polygon points="57.04 87.97 57.04 87.97 93.08 21.37 83.98 21.37 44 95.25 44 22.37 36 22.37 36 111.91 44 111.91 44 111.86 44.09 111.91 45.77 108.8 45.77 108.8 57.04 87.97"/>
                <polygon points="56.15 89.61 56.15 22.37 48.15 22.37 48.15 104.4 56.15 89.61"/>
                <polygon points="96.13 21.37 56.15 95.25 56.15 95.24 48.15 109.99 48.15 111.91 56.15 111.91 56.15 111.86 56.24 111.91 105.23 21.37 96.13 21.37"/>
            </svg>
        </div>
        <div class="nav">
            <router-link class="link" to="/">Home</router-link>
            <router-link class="link" to="/about">Projects</router-link>
            <router-link class="link" to="/about">Blog</router-link>
            <router-link class="link link__last" to="/about">Resume</router-link>
        </div>
    </div>
</template>

<script>
import { gsap } from "gsap";

export default {
    methods: {
    },
mounted() {
    gsap.from('.link', {
    duration: 0.5,
    opacity: 0,
    scale: 0,
    y: -200,
    ease: 'power1',
    stagger: 0.2
  })
}
}
</script>

<style scoped lang="scss">
.top {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 2rem 3rem;

    &__left {
        width: 5rem;
        height: auto;
        line-height: 0;
    }
}
.nav {
    display: flex;
    justify-content: space-evenly;
    align-items: center;

    & .link {
        margin: 0 1rem;
        letter-spacing: 1px;

        // &:before, &:after {
        //     content: '-';
        // }

        &__last {
            color: var(--green);
            border: 1px solid;
            padding: .5rem;
            border-radius: 5px;
            text-transform: uppercase;
            margin-left: 2rem;
        }
    }

}

.cls-1 {
    fill:none;
    stroke:var(--green);
    stroke-miterlimit:10;
    stroke-width: 7px;    
}

.cls-1 .before,
.cls-1 .after {
    position: absolute;
    border: 1px solid #58ea00;
    left: -20px;
    right: -20px;
    top: -20px;
    bottom: -20px;
    border-radius: 50%;
    backface-visibility: hidden;
}
</style>