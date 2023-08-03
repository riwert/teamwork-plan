<template>
  <SectionAccordion :items="plan.items" />
</template>

<script>
export default {
  name: 'Plan',

  props: {
    plan: {
      type: Object,
      required: true
    }
  }
}
</script>
