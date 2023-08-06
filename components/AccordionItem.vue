<template>
  <article class="accordion__item" :class="{'is-open': isOpen}">
    <h2 class="title">
      <a :role="!isOpen ? 'button' : 'figure'" :tabindex="!isOpen ? '0' : undefined" :aria-expanded="!isOpen ? 'false' : undefined" :aria-controls="!isOpen ? 'accordion__item__text--'+itemNumber : undefined" @click="toggleOpen($event, item)" @keydown="handleKeyDown($event, item)" :class="{'link': !isOpen}">
        {{ item.title }}
        <svg :role="isOpen ? 'button' : undefined" :tabindex="isOpen ? '0' : undefined" :aria-expanded="isOpen ? true : undefined" :aria-controls="isOpen ? 'accordion__item__text--'+itemNumber : undefined" :aria-label="'Chevron icon pointing '+(isOpen ? 'up' : 'down')" class="icon" width="25" height="25" viewBox="112 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path fill-rule="evenodd" clip-rule="evenodd" d="M117.404 9L124.372 17L131.404 9H117.404Z" fill="#494E6A"/>
        </svg>
      </a>
    </h2>
    <div :id="'accordion__item__text--'+itemNumber" class="text toggleable" :class="{'show': isOpen}">
      <div>
        <p>{{ item.text }}</p>
        <div class="image-wrapper" v-if="isOpen">
          <img :src="item.image" :alt="item.title" />
        </div>
      </div>
    </div>
  </article>
</template>

<script>
export default {
  name: 'AccordionItem',

  data () {
    return {
      isOpen: (this.index === 0 ? true : false),
    }
  },

  created() {
    if (this.index === 0) {
      const image = {
        src: this.item.image,
        alt: this.item.title
      }
      this.$emit('image-change', image)
    }
  },

  methods: {
    toggleOpen(e, item) {
      if (this.isOpen && e.target.nodeName.toLowerCase() == 'a') return

      this.isOpen = !this.isOpen

      if (this.isOpen) {
        const image = {
          src: item.image,
          alt: item.title
        }
        this.emitImageChange(image)
      }

      e.target.blur()
    },

    emitImageChange(image) {
      this.$emit('image-change', image)
    },

    handleKeyDown(e, item) {
      if (e.keyCode === 13 || e.key === "Enter" || e.keyCode === 32 || e.key === " ") {
        this.toggleOpen(e, item)
        e.target.blur()
      }
    },
  },

  computed: {
    itemNumber() {
      return this.index + 1
    }
  },

  props: {
    item: {
      type: Object,
      required: true
    },
    index: {
      type: Number,
      required: true
    }
  }
}
</script>

<style lang="scss" scoped>
.accordion__item {
  border-radius: 4px;
  padding: 18px;
  margin-bottom: 20px;
  background-color: var(--quadrary);
  transition: background-color 0.3s linear;

  &:last-child {
    margin-bottom: 0;
  }

  .link {
    cursor: pointer;
  }

  .title {
    margin-bottom: 0;

    a {
      user-select: none;
      display: flex;
      flex-wrap: nowrap;
      justify-content: space-between;
      align-items: center;
      padding: 18px;
      margin: -18px;
      border-radius: 4px;

      color: var(--heading);
      transition: color 0.3s linear, background-color 0.3s linear;

      &:hover,
      &:focus {
        background-color: var(--quinary);
      }

      font-size: 18px;
      font-style: normal;
      font-weight: 500;
      line-height: 120%;

      @media (min-width: 1024px) {
        font-size: 21px;
      }
    }
  }
  .icon {
    cursor: pointer;
    margin-left: auto;
    margin-right: 0;

    &:active {
      outline: 0;
      border: none;
    }

    transition: transform 0.3s ease-out, scale 0.3s ease-out;
    transform-origin: center center;
    transform: scale(0.88);

    @media (min-width: 1024px) {
      transform: scale(1);
    }
  }

  .text {
    max-width: 339px;

    font-size: 15px;
    font-style: normal;
    font-weight: 400;
    line-height: 26px; /* 173.333% */

    @media (min-width: 1024px) {
      font-size: 16px;
      line-height: 26px; /* 162.5% */
    }

    p {
      margin: 15px 0;
    }
  }

  .image-wrapper {
    display: block;
    text-align: center;

    @media (min-width: 992px) {
      display: none;
    }

    img {
      width: auto;
      max-height: 120px;

      &:hover,
      &:focus {
        max-height: none;
      }
    }
  }

  &.is-open {
    background-color: var(--quinary);

    .title a {
      color: var(--tertiary);
      user-select: auto;
    }

    .icon {
      transform-origin: center center;
      transform: rotate(180deg)  scale(0.88);

      @media (min-width: 1024px) {
        transform: rotate(180deg) scale(1);
      }
    }
  }

  .toggleable {
    display: grid;
    grid-template-rows: 0fr;
    opacity: 0;
    transition: grid-template-rows 0.3s ease-out, opacity 0.3s ease-out;

    & > * {
      overflow: hidden;
    }

    &.show {
      grid-template-rows: 1fr;
      opacity: 1;
    }
  }
}
</style>
