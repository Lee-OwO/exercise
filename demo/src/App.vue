<template>
  <div id="app">
    <top-bar></top-bar>
    <tab></tab>
    <contents></contents>
  </div>
</template>

<script>
import topBar from '@/components/topBar/index'
import tab from '@/components/tab/index'
import contents from '@/components/contents/index'

export default {
  name: 'App',
  components: {
    topBar,
    tab,
    contents
  }
}
</script>

<style>

</style>
