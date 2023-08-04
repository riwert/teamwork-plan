<template>
  <section class="section__plan">
    <SectionAccordion :tag="plan.tag" :title="plan.title" :items="plan.items" />
  </section>
</template>

<script>
export default {
  name: 'SectionPlan',

  props: {
    plan: {
      type: Object,
      required: true
    }
  }
}
</script>

<style lang="scss" scoped>
.section__plan {
  padding: 40px 29px 13px 28px; 

  @media (min-width: 1200px) {
    padding: 81px 116px 80px 91px;
  }
}
</style>
