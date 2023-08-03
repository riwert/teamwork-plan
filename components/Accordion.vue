<template>
  <div>
    <h2>{{ item.title }}</h2>
    <p>{{ item.text }}</p>
    <div>
      <img :src="item.image" :alt="item.title+' image'" />
    </div>
  </div>
</template>

<script>
export default {
  name: 'Accordion',

  props: {
    item: {
      type: Object,
      required: true
    }
  }
}
</script>
