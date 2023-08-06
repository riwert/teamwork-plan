<template>
  <div class="teamwork__plan">
    <SectionAccordion :tag="plan.tag" :title="plan.title" :items="plan.items" />
  </div>
</template>

<script>
export default {
  name: 'TeamworkPlan',

  props: {
    plan: {
      type: Object,
      required: true
    }
  }
}
</script>

<style lang="scss" scoped>
.teamwork__plan {
  max-width: 1440px;
  margin: 0 auto;
  padding: 40px 29px 13px 28px;

  @media (min-width: 1200px) {
    padding: 81px 116px 80px 91px;
  }
}
</style>
