<template>
    <div class="about wrapper">
        <div class="about__left">
            <p>
            Hello ! My name is Kevin Jordan and I've been tinkering with technology since the Commodore 64 days. 
            </p>
            <p>
            I earned a BS in Computer Science at the University of Oregon and have been a professional artist and ski bum along the way. Throughout my career I have been a a Lead Developer at a start up and patnered with some interesting chaaracters to create some niche online services. 
            <p>
            I currently work as the VP of Wholesale Services for an International Telecom Compny, but am always seeking out new challenges and opportunities.
            </p>
            <p>
            Here's some of the tech that I've been focusing on recently
            </p>
        </div>
        <div class="about__right">
            <div class="about__right"></div>
                <img src="@/assets/profile2.jpg" alt="">
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style scoped lang="scss">
.about {
    color: var(--slate);
    display: flex;
    max-width: 70%;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 10rem;

    &__left {
        text-align: left;
        max-width: 60%;
        margin-right: 2rem;
    }

    &__right {

        & img {
            border-right: 8px solid var(--green);
            border-left: 8px solid var(--green);
            border-radius: 5px;
        }
        
    }
}
</style>