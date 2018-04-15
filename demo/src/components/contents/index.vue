<template>
  <div class="content">
    <slider></slider>
    <list></list>
    <bottom></bottom>
  </div>
</template>

<script type="text/ecmascript-6">
  import slider from '@/components/slider/index'
  import list from '@/components/list/index'
  import bottom from '@/components/bottom/index'

  export default {
    components: {
      slider,
      list,
      bottom
    }
  }
</script>

<style scoped lang="scss">
 .content {
   position: fixed;
   top: 3.9rem;
   bottom: 0;
   overflow: scroll;
 }
</style>