<template>
  <div class="accordion__item" :class="{'is-open': isOpen}">
    <h2 :role="!isOpen ? 'button' : undefined" @click="toggleOpen" :class="{'link': !isOpen}" class="title">
      {{ item.title }}
      <svg :aria-label="'Chevron icon pointing '+(isOpen ? 'up' : 'down')" class="icon" width="132" height="25" viewBox="0 0 132 25" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M117.404 9L124.372 17L131.404 9H117.404Z" fill="#494E6A"/>
      </svg> 
    </h2>
    <div v-if="isOpen">
      <p>{{ item.text }}</p>
      <img :src="item.image" :alt="item.title+' image'" />
    </div>
  </div>
</template>

<script>
export default {
  name: 'AccordionItem',

  data () {
    return {
      isOpen: (this.isFirst ? true : false),
    }
  },

  methods: {
    toggleOpen: function () {
      this.isOpen = !this.isOpen
    }
  },

  props: {
    item: {
      type: Object,
      required: true
    },
    isFirst: {
      type: Boolean,
      required: true
    }
  }
}
</script>

<style lang="scss">
.accordion__item {
  background-color: var(--quadrary);
  padding: 18px;

  .link {
    cursor: pointer;
  }

  .title {
    display: flex;
  }

  .icon {
    margin-left: auto;
    margin-right: 0;
    transition: rotate 0.3s;
  }

  &.is-open {

    .title {
      color: var(--tertiary);
    }

    .icon {
      transform: rotate(180deg);
      transition: rotate 0.3s;
    }
  }
}
</style>
