<template>
  <div class="tab">
    <div class="tab__part">
      <div class="part__list">
        <div class="list__wrapper">
          <div class="list__item" v-for="(item, index) in list" :key="index" @click="changeCheck(index)">
            <div class="item__text">
              <div class="text__wrapper" :class="{checked: index==checked}">{{item}}</div>
            </div>
          </div>
        </div>
      </div>
      <div class="part__btn">
        <div class="btn__img" @click="changeMode">
          <img src="./down.svg">
        </div>
      </div>
    </div>
    <transition name="show">
      <div v-show="show" class="tab__detail">
        <div class="detail__list">
          <div class="list__item" :class="{checked: index==checked}" v-for="(item,index) in list" :key="index"  @click="changeCheck(index)">
            {{item}}
          </div>
        </div>
        <div class="detail__btn">
          <div class="btn__img" @click="changeMode">
            <img src="./up.svg">
          </div>
        </div>
      </div>
    </transition>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    data() {
      return {
        list: ["首页", "动画", "番剧", "国创", "音乐", "舞蹈", "科技", "游戏","娱乐", "鬼畜", "电影", "舞蹈", "科技", "游戏","娱乐", "鬼畜", "电影"],
        show: false,
        checked: 0
      }
    },
    methods: {
      changeMode() {
        this.show = !this.show
      },
      changeCheck(index) {
        this.checked = index
      }
    }
  }
</script>

<style scoped lang="scss">
  .tab {
    display: flex;
    height: 1.87733rem;
    width: 100%;
    // overflow: hidden;
    display: flex;
    flex-direction: column;
    .checked {
      color: #fb7299;
      border-bottom: .08533rem solid #fb7299!important;
    }
    .tab__part {
      position: relative;
      width: 100%;
      display: flex;
      .part__list {
        flex: 0 0 90%;
        padding-top: .256rem;
        overflow: hidden;
        .list__wrapper {
          display: flex;
          padding-left: 1.024rem;
          overflow-x: scroll;
          overflow-y: hidden;
          height: 1.87733rem;
          white-space: nowrap; 
          padding-bottom: .21333rem;
          .list__item {
            display: flex;
            align-items: center;
            background-color: #ffffff;
            margin-right: 1.49333rem;
            font-size: .59733rem;
            color: #757575;
            .item__text {
              display: flex;
              align-items: center;
              width: 1.36533rem;
              .text__wrapper {
                width: 100%;
                height: 1.28rem;
                display: flex;
                justify-content: center;
                align-items: center;
                border-bottom: .08533rem solid #fff;
              }
            }
          }
        }
      }
      .part__btn {
        display: flex;
        justify-content: center;
        position: absolute;
        top: 0;
        width: 1.38667rem;
        height: 1.87733rem;
        right: .256rem;
        .btn__img {
          padding-top: .5rem;
          width: .68267rem;
          height: 1.87733rem;
        }
      }
    }
    .tab__detail {
      box-sizing: border-box;
      position: relative;
      z-index: 5;
      background-color: #fff;
      width: 100%;
      padding-left: .34133rem;
      padding-right: .29867rem;
      .detail__list {
        display: flex;
        width: 100%;
        flex-wrap: wrap;
        .list__item {
          display: flex;
          align-items: center;
          justify-content: center;
          flex: 0 0 16.66666%;
          height: 1.87rem;
          font-size: .59733rem;
          color: #757575;
          border-bottom: .08533rem solid #fff;
        }
      }
      .detail__btn {
        display: flex;
        justify-content: center;
        height: .91733rem;
        margin-top: -0.10667rem;
        .btn__img {
          width: .68267rem;
        }
      }
    }
    .show-enter-active, .show-leave-active {
      transition: all .2s linear;
    }
    .show-enter, .show-leave-to {
      transform: translate3d(0, -100%, 0)
    }
  }
</style>