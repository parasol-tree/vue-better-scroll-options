<template>
  <div>
    <div>home page</div><br>
    <router-link to="/scrollRefresh">
      跳转scrollRefresh页
    </router-link>
    <app-scroll></app-scroll>
  </div>
</template>

<script>
export default{
  name: 'homeIndex',
  components: {
    AppScroll: () => import('./Scroll.vue')
  }
}
</script>

<style scoped>

</style>
