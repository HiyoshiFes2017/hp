<template lang='pug'>
  div
    Header
    main
      md-layout(md-gutter)
        md-layout(
          md-flex-xsmall="100"
          md-flex-small="50"
          md-flex-medium="33"
          md-flex-large='20'
        )
          GoToAbout
        md-layout(
          md-flex-xsmall="100"
          md-flex-small="50"
          md-flex-medium="33"
          md-flex-large='20'
        )
          p 50
        md-layout(
          md-flex-xsmall="100"
          md-flex-small="50"
          md-flex-medium="33"
          md-flex-large='20'
        )
          p 50
        md-layout(
          md-flex-xsmall="100"
          md-flex-small="50"
          md-flex-medium="33"
          md-flex-large='20'
        )
          p 50
        md-layout(
          md-flex-xsmall="100"
          md-flex-small="50"
          md-flex-medium="33"
          md-flex-large='20'
        )
          p 50
        md-layout(
          md-flex-xsmall="100"
          md-flex-small="50"
          md-flex-medium="33"
          md-flex-large='20'
        )
          p 50
</template>

<script>

import Header from '../components/header.vue'
import Main from '../components/main.vue'
import GoToAbout from '../components/index/goto_about.vue'
export default {
  components: {
    Header,
    Main,
    GoToAbout
  }
}
</script>

<style lang='scss'>
.pages {
  margin-top: 50px;
}

main {
  margin: 0 20px;

  md-layout {
    margin-top: 10px;
  }
}
</style>
