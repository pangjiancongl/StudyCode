<template>
  <div class="score_container">
    <div class="your_scores_container">
      <header class="your_scores">
        <!-- 分数 -->
        <span class="score_num">{{ score * 20 }}</span>
        <span class="fenshu">分!</span>
      </header>
      <!-- 提示语 -->
      <div class="result_tip">{{ scoreTips }}</div>
    </div>
    <!-- 分享按钮 -->
    <div class="share_button" @click="showCover">再来一次</div>
    <div class="share_code">
      <header class="share_header">关注葡萄之家,获取答案.</header>
      <img src="/images/4-4.png" height="212" class="code_img" alt="" />
    </div>
    <div class="share_cover" v-show="false" @click="showCover">
      <img src="/images/5-2.png" alt="" />
    </div>
  </div>
</template>

<script>
// import { mapState } from "vuex";
import { useStore } from "vuex";
import { ref, reactive, computed } from "vue";
import { useRouter } from "vue-router";
export default {
  setup() {
    let store = useStore();
    //#region 显示分数和提示语
    let score = ref(0);
    let scoreTips = ref("");
    let rightAnswer = reactive([4, 7, 12, 13, 18]);
    let scoreTipsArr = reactive([
      "你说，是不是把知识都还给小学老师了？",
      "还不错，但还需要继续加油哦！",
      "不要嘚瑟还有进步的空间！",
      "智商离爆表只差一步了！",
      "你也太聪明啦，葡萄之家欢迎你！"
    ]);
    let anwserId = computed(() => store.state.anwserId);
    function computedScore() {
      anwserId.value.forEach((item, index) => {
        if (item == rightAnswer[index]) {
          score.value += 1;
        }
      });
    }
    computedScore();
    //根据对的题数显示对应的提示语
    function getScoreTip() {
      // 获取分数对应的索引
      let index = Math.max(0, score.value - 1);
      //显示对应的文本
      scoreTips.value = scoreTipsArr[index];
    }
    getScoreTip();
    // #endregion
    //#region 再来一次
    //再来一次
    let router = useRouter();
    function showCover() {
      //跳转到首页
      router.push("/");
      store.commit("again");
    }
    //#endregion
    return {
      score,
      scoreTips,
      showCover
    };
  }
};
</script>
<style lang="scss" scoped>
.score_container {
  height: 100%;
  background-image: url("/images/4-1.jpg");
}
.your_scores_container {
  width: 9.7rem;
  height: 9.1rem;
  background: url("/images/4-2.png") no-repeat;
  background-size: 100% 100%;
  margin: 0 auto 0;
  position: relative;
  .your_scores {
    position: absolute;
    width: 100%;
    text-indent: 3.3rem;
    top: 4.7rem;
    font-size: 1.4rem;
    font-weight: 900;
    -webkit-text-stroke: 0.05rem #412318;
    font-family: "Microsoft YaHei";
    .score_num {
      font-family: Tahoma, Helvetica, Arial;
      color: #a51d31;
    }
    .fenshu {
      color: #a51d31;
    }
  }
  .result_tip {
    position: absolute;
    top: 7rem;
    width: 9rem;
    left: 0.6rem;
    color: #3e2415;
    font-size: 0.65rem;
    text-align: center;
  }
}
.share_button {
  width: 6.025rem;
  height: 2.4rem;
  margin: 0.8rem auto 0;
  text-align: center;
  line-height: 2.4rem;
  background-color: #967300;
  // background: url("/images/4-3.png") no-repeat 0.4rem 0;
  background-size: 5.825rem 100%;
}
.share_code {
  width: 5.3rem;
  margin: 1.5rem auto 0;
  .share_header {
    color: #664718;
    font-size: 0.475rem;
    font-family: "Microsoft YaHei";
    width: 7rem;
    font-weight: 500;
  }
  .code_img {
    height: 5.3rem;
    width: 5.3rem;
    margin-top: 0.5rem;
  }
}
.share_cover {
  position: fixed;
  bottom: 0;
  right: 0;
  top: 0;
  left: 0;
  background: url("/images/5-1.png") no-repeat;
  background-size: 100% 100%;
  opacity: 0.92;
}
.share_img {
  height: 10.975rem;
  width: 11.95rem;
  position: fixed;
  top: 0.5rem;
  left: 50%;
  margin-left: -5.975rem;
}
</style>
