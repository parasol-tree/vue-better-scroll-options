<template>
  <div>
    <div>测试scrollRefresh</div>
    <app-scroll></app-scroll>
  </div>
</template>

<script>
export default{
  name: 'scrollRefreshIndex',
  components: {
    AppScroll: () => import('./Scroll.vue')
  }
}
</script>

<style scoped>

</style>
