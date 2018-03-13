<template>
  <div class="scroll-container">
    <div class="scrollBar" ref="scrollBar">
      <ul class="clearfix">
        <li class="liElem clearfix" v-for="(item, index) in 10" :key="index">
          loop
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import BScroll from 'better-scroll'
export default{
  name: 'scrollRefreshTest',
  created () {},
  mounted () {
    this.createScroller()
    this.bindEvents()
  },
  methods: {
    createScroller () {
      // 如果没有设置 probeType 该值，其默认值为 0，即不派发 scroll 事件
      // 值填的越大越耗费性能,取值范围 0/1/2/3
      this.scroll = new BScroll(this.$refs.scrollBar, {
        probeType: 3
      })
    },

    bindEvents () {
      this.scroll.on('scroll', this.handleScroll.bind(this))
    },

    handleScroll (e) {
      console.log(e.y)
    }
  },
  watch: {
    // 有可能 Ajax获取的 数据 没有过来(监听 v-for 循环用的数据scrollerDate)
    // scroll无法计算滚动高度,所以 在 nextTick 中 用下 refresh() 刷新一下
    // (这里我没有用Ajax获取数据,所以我注释掉了)
    /* scrollerDate () {
      this.$nextTick(() => {
        this.scroll.refresh()
      })
    } */
  }
}
</script>

<style scoped>
  /* 最外围的盒子必须有高度, 并设置overflow:hidden*/
  .scroll-container {
    height: 13.34rem;
    overflow: hidden;
  }
  /* 需要有滚动弹性的盒子,也必须有高度 */
    .scrollBar {
      height: 100%;
    }
      .scrollBar ul {
        min-height: 1.5rem;
      }
      .liElem {
        height: 2.16rem;
        background-color: red;
      }
</style>
