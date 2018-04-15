<template>
  <div class="topbar">
    <div class="topbar__logo">
      <img class="logo__img" src="//s1.hdslb.com/bfs/static/mult/images/logo.png">
    </div>
    <div class="topbar__search">
      <img src="./search.svg">
    </div>
    <div class="topbar__avatar">
      <img src="//i0.hdslb.com/bfs/face/6d628d10d1dbefbd17556d388cfa02e5ce351f06.jpg@53w_53h.webp" width="100%">
    </div>
    <div class="topbar__download">
      下载 App
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
 
  }
</script>

<style scoped lang="scss">
.topbar {
  position: relative;
  z-index: 20;
  display: flex;
  align-items: center;
  width: 100%;
  height: 1.32267rem;
  padding: .27733rem 0;
  background: #fff;
  .topbar__logo {
    width: 2.64533rem;
    margin-left: .768rem;
    .logo__img {
      width: 100%;
      // height: 100%;
    }
  }
  .topbar__search {
    width: .896rem;
    height: .896rem;
    margin-left: auto;
    margin-right: .93867rem
  }
  .topbar__avatar {
    width: 1.024rem;
    height: 1.024rem;
    margin-right: .512rem;
    border-radius: 50%;
  }
  .topbar__download {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-right: .512rem;
    width: 3.41333rem;
    height: 1.024rem;
    border: .02133rem solid #fb7299;
    border-radius: .17067rem;
    background-color: #fb7299;
    font-size: .55467rem;
    color: #fff;
  }
}
</style>