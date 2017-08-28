<template lang="pug">
md-card
  md-card-media
    img(src="../../img/pic1.png" alt="People")

  md-card-header
    .md-title Title goes here
    .md-subhead Subtitle here

  md-card-actions
    md-button
      nuxt-link(to='/about') Go to about
    md-button Action

  md-card-content
    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio itaque ea, nostrum odio. Dolores, sed accusantium quasi non, voluptas eius illo quas, saepe voluptate pariatur in deleniti minus sint. Excepturi.
</template>

<script>
export default {
}
</script>

<style lang="css">
</style>
