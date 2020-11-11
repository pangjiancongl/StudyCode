<template>
  <!-- 解决数组跨越问题  v-if="questions.length > 0"-->
  <div class="home_container" v-if="questions.length > 0">
    <section>
      <!-- 头部标签 -->
      <header class="top_tips">
        <span class="num_tip">题目{{ itemNum }}</span>
      </header>
      <!-- 题目内容 -->
      <div class="item_back item_container_style">
        <div class="item_list_container">
          <!-- 题干 -->
          <header class="item_title">
            {{ questions[itemNum - 1].topic_name }}
          </header>
          <!-- 选项 -->
          <ul>
            <!-- 每个选项整体 -->
            <li
              class="item_list"
              v-for="(item, index) in questions[itemNum - 1].topic_answer"
              :key="item.topic_answer_id"
              @click="choosed(index, item.topic_answer_id)"
            >
              <!-- 选项--A B C D 控制点击那个选项让那个选项变色-->
              <span
                class="option_style"
                :class="{ has_choosed: chooseNum == index }"
                >{{ String.fromCharCode(65 + index) }}</span
              >
              <!-- 选项内容 -->
              <span class="option_detail">{{ item.answer_name }}</span>
            </li>
          </ul>
        </div>
      </div>
      <!-- 下一题按钮 itemNum小于数据个数时显示 -->
      <span
        class="next_item button_style"
        v-if="itemNum < questions.length"
        @click="nextItem"
      ></span>
      <!-- 提交按钮 itemNum等于大于数据个数时显示 -->
      <span
        class="submit_item button_style"
        v-else
        @click="nextItem('submit')"
      ></span>
    </section>
  </div>
</template>

<script>
// import { mapState } from "vuex";
import { useStore } from "vuex";
import { computed, ref } from "vue";
import { useRouter } from "vue-router";
export default {
  setup() {
    let store = useStore();
    store.dispatch("getData");
    //#region 渲染标题 获取数据
    let questions = computed(() => store.state.questions);
    let itemNum = computed(() => store.state.itemNum);
    //#endregion
    //#region 点击那个让那个显示
    let chooseNum = ref(null);
    let chooseId = ref(null);
    function choosed(index, id) {
      // 把记录选择题目的索引和ID
      chooseNum.value = index;
      chooseId.value = id;
    }
    //#endregion
    //#region 提交和下一题按钮
    // 点击 下一个题目
    let router = useRouter();
    function nextItem(pattern) {
      // 判断用户是否选择 如果选择 那么就把选择的id传递到vuex
      if (chooseNum.value != null) {
        chooseNum.value = null;
        // 把chooseId传给addNum
        store.dispatch("addNum", chooseId.value);
        //判断点击的是不是提交按钮
        if (pattern == "submit") {
          //如果是提交按钮就跳转到分数页面
          router.push("/score");
        }
      } else {
        // 如果没有选择 提示用户  你还没有选择答案
        alert("你还没有选择答案");
      }
    }
    //#endregion
    return {
      itemNum,
      questions,
      choosed,
      chooseNum,
      nextItem
    };
  }
};
</script>

<style lang="scss">
.next_item {
  background-image: url("/images/2-2.png");
}

.submit_item {
  background-image: url("/images/3-1.png");
}

.item_back {
  background-image: url("/images/2-1.png");
  background-size: 100% 100%;
}

.item_title {
  font-size: 0.65rem;
  color: #fff;
  line-height: 0.7rem;
}

.item_list_container {
  margin: 2.5rem;
  padding: 0;
}

.item_list {
  font-size: 0;
  margin-top: 0.4rem;
  width: 10rem;
  span {
    display: inline-block;
    font-size: 0.6rem;
    color: #fff;
    vertical-align: middle;
  }
  .option_style {
    height: 0.725rem;
    width: 0.725rem;
    border: 1px solid #fff;
    border-radius: 50%;
    line-height: 0.725rem;
    text-align: center;
    margin-right: 0.3rem;
    font-size: 0.5rem;
    font-family: "Arial";
  }
  .has_choosed {
    background-color: #ffd400;
    color: #575757;
    border-color: #ffd400;
  }
  .option_detail {
    width: 7.5rem;
    padding-top: 0.11rem;
  }
}
</style>
