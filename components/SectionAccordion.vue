<template>
  <section class="section__accordion">
    <div class="col">
      <img src="ogimage.png" alt="Workload with Overview and Planner tabs and search users field" />
    </div>
    <div class="col">
      <div class="tag">{{ tag }}</div>
      <h1 class="title">{{ title }}</h1>
      <AccordionItem v-if="items" v-for="(item, index) in items" :key="index" :item="item" :is-first="index === 0" />
    </div>
  </section>
</template>

<script>
export default {
  name: 'SectionAccordion',
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

<style lang="scss">
.section__accordion {
  display: flex;

  .col {
    flex: 0 0 50%;
    max-width: 50%;
  }

  .tag {
    color: var(--secondary);
  }

  .title {
    color: var(--primary);
  }
}
</style>
