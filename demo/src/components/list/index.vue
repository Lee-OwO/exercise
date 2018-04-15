<template>
  <div class="list">
    <div class="list-wrapper">
      <div class="list__item" v-for="(item, index) in list" :key="index">
        <div class="item__imgContainer">
          <img class="img__index" src="//i1.hdslb.com/bfs/archive/59615a44d4dd35be6cfe3422f0e6cd84f7c7f1c4.jpg@320w_200h.webp">
          <div class="img__info">
            <div class="info__playIcon">
              <img width="100%" src="./paly.svg">
            </div>
            <div class="info__play">
              145.8万
            </div>
            <div class="info__danmuIcon">
              <img src="./danmu.svg">
            </div>
            <div class="info__danmu">
              7663
            </div>
          </div>
        </div>
        <div class="item__title">
          <p>【敖厂长】贪玩蓝月真的有人玩吗?</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    data() {
      return {
        list: ["", "", "", "", "", "", "", "", "", "", "", ""]
      }
    }
  }
</script>

<style scoped lang="scss">
  .list {
    padding-top: .512rem;
    width: 100vw;
    .list-wrapper {
      display: flex;
      flex-wrap: wrap;
      padding: 0 .256rem;
      .list__item {
        flex: 0 0 50%;
        box-sizing: border-box;
        margin-bottom: .68267rem;
        .item__imgContainer {
          position: relative;
          width: 7.232rem;
          height: 4.52267rem;
          margin: auto;
          border-radius: .256rem;
          overflow: hidden;
          .img__index {
            width: 100%;
          }
          .img__info {
            position: absolute;
            z-index: 10;
            left: 0;
            width: 100%;
            bottom: 0;
            height: .68267rem;
            padding-left: .34133rem;
            display: flex;
            font-size: .46933rem;
            color: #ffffff;
            .info__playIcon {
              width: .68267rem;
              margin-top: -0.14rem;
            }
            .info__play {
              margin-left: .256rem;
              width: 2.048rem;
            }
            .info__danmuIcon {
              width: .68267rem;
              margin-top: -0.14rem;
              margin-left: .61867rem;
            }
            .info__danmu {
              width:2.048rem;
              margin-left: .256rem;
            }
          }
        }
        .item__title {
          height: 1.36533rem;
          width: 7.232rem;
          margin: auto;
          margin-top: .21333rem;
          font-size: .55467rem;
        }
      }
    }
  }
</style>