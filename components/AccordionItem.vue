<template>
  <div class="accordion__item" :class="{'is-open': isOpen}">
    <h2 :role="!isOpen ? 'button' : undefined" :tabindex="!isOpen ? '0' : undefined" :aria-expanded="isOpen" :aria-controls="'accordion__item__text--'+index" @click="toggleOpen($event, item)" @keydown="handleKeyDown($event, item)" :class="{'link': !isOpen}" class="title">
      {{ item.title }}
      <svg :role="isOpen ? 'button' : undefined" :tabindex="isOpen ? '0' : undefined" :aria-label="'Chevron icon pointing '+(isOpen ? 'up' : 'down')" class="icon" width="25" height="25" viewBox="112 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M117.404 9L124.372 17L131.404 9H117.404Z" fill="#494E6A"/>
      </svg>
    </h2>
    <div :id="'accordion__item__text--'+index" class="text toggleable" :class="{'show': isOpen}">
      <div>
        <p>{{ item.text }}</p>
        <div class="image-wrapper">
          <img :src="item.image" :alt="'Image of '+item.title" />
        </div>
      </div>
    </div>
  </div>
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
        alt: 'Image of '+this.item.title
      }
      this.$emit('image-change', image)
    }
  },

  methods: {
    toggleOpen(e, item) {
      if (this.isOpen && e.target.nodeName.toLowerCase() == 'h2') return

      this.isOpen = !this.isOpen

      if (this.isOpen) {
        const image = {
          src: item.image,
          alt: 'Image of '+item.title
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
  background-color: var(--quadrary);
  border-radius: 4px; 
  padding: 18px;
  margin-bottom: 20px;

  &:last-child {
    margin-bottom: 0;
  }

  .link {
    cursor: pointer;
  }

  .title {
    display: flex;
    flex-wrap: nowrap;
    justify-content: space-between;
    align-items: center;
    color: var(--heading);
    margin-bottom: 0;
    user-select: none;

    font-size: 18px;
    font-style: normal;
    font-weight: 500;
    line-height: 120%; /* 21.6px */ 

    @media (min-width: 1024px) {
      font-size: 21px;
      line-height: 120%; /* 25.2px */
    }
  }
  
  .icon {
    cursor: pointer;
    margin-left: auto;
    margin-right: 0;
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

    @media (min-width: 1024px) {
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

    .title {
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
