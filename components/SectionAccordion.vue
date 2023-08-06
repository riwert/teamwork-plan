<template>
  <section class="section__accordion">
    <div class="col col--image">
      <img :src="image.src" :alt="image.alt" @load="handleImageLoad" :class="{'fade-in': isImageLoaded }" />
    </div>
    <div class="col col--content">
      <div class="tag">{{ tag }}</div>
      <h1 class="title">{{ title }}</h1>
      <AccordionItem v-if="items" v-for="(item, index) in items" :key="index" :item="item" :index="index" @image-change="handleImageChange" />
    </div>
  </section>
</template>

<script>
export default {
  name: 'SectionAccordion',

  data() {
    return {
      image: {
        src: '',
        alt: ''
      },
      isImageLoaded: false
    }
  },

  methods: {
    handleImageChange(image) {
      this.isImageLoaded = false
      this.image = image
    },
    handleImageLoad() {
      this.isImageLoaded = true
    }
  },

  props: {
    tag: {
      type: String,
      required: true
    },
    title: {
      type: String,
      required: true
    },
    items: {
      type: Array,
      required: true
    }
  }
}
</script>

<style lang="scss" scoped>
.section__accordion {
  display: flex;
  justify-content: space-between;

  .col {

    @media (min-width: 1024px) {
      flex: 0 0 50%;
      max-width: 50%;
    }

    &--image {
      display: none;
      max-width: 650px;
      margin: 34px 0;

      @media (min-width: 1024px) {
        display: block;
      }
    }

    &--content {
      max-width: 400px;
      margin: 0 auto;

      @media (min-width: 1024px) {
        margin: 0;
      }
    }
  }

  .tag {
    color: var(--secondary);
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 25px; /* 178.571% */
    letter-spacing: 2px;
    margin-bottom: 9px;
  }

  .title {
    color: var(--primary);
    font-family: Work Sans;
    margin-bottom: 34px;

    max-width: 305px;
    font-size: 28px;
    font-style: normal;
    font-weight: 600;
    line-height: 41px;

    @media (min-width: 1024px) {
      max-width: none;
      font-size: 40px;
    }
  }
}
</style>
