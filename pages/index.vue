<template>
  <Plan :plan="plan" />
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
