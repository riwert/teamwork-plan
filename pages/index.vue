<template>
  <main>
    <TeamworkPlan :plan="plan" />
  </main>
</template>

<script>
export default {
  name: 'IndexPage',

  async asyncData ({ $content }) {
    const plan = await $content('plan').fetch()
    return { plan }
  }
}
</script>
