<template>

  <nav :class="cor">
    <div class="nav-wrapper container">
      <a :href="url || '#'" class="brand-logo">{{logo || 'Site'}}</a>
      <slot></slot>
    </div>
  </nav>

</template>

<script>
  export default {
    name: 'NavBar',
    props:['logo', 'url', 'cor'],
    data () {
      return {

      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
