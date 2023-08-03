<template>
  <div>
    <h1>Teamwork Plan</h1>
    <div>
      <img src="ogimage.png" alt="Workload with Overview and Planner tabs and search users field" />
    </div>
    <div>
      <Accordion v-for="(item, index) in items" :key="index" :item="item" />
    </div>
  </div>
</template>

<script>
export default {
  name: 'SectionAccordion',
  props: {
    items: {
      type: Array,
      required: true
    }
  }
}
</script>
