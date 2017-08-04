<template lang='pug'>
  md-layout(md-gutter)
    md-layout.pages(md-flex-medium='50' md-flex-large='100')
      md-tabs(md-fixed)
        md-tab(md-label='day1')
          h2 Day1
        md-tab(md-label='day2')
          h2 Day2
    md-layout(md-flex-medium='50')
</template>

<script>
export default {
}
</script>

<style lang='scss'>
.pages {
  margin-top: 50px;
}
</style>
