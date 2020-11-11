import { createStore } from "vuex";

// 引入axios
import axios from "axios";

export default createStore({
  state() {
    return {
      // 活动周数
      level: "第一周",
      // 题号
      itemNum: 1,
      // 用户所选答案id的数组
      anwserId: [],
      //数据
      questions: []
    };
  },
  mutations: {
    // 初始化数据
    initData(state, payload) {
      state.questions = payload.data;
    },
    //添加用户答案的id到anwserId里面
    remberId(state, payload) {
      state.anwserId.push(payload);
    },
    //每次点击人扩展题目索引数加一跳转到下一题
    addItemNum(state) {
      state.itemNum++;
    },
    // 把itemNum改为出始值清空anwserId
    again(state) {
      state.itemNum = 1;
      state.anwserId = [];
    }
  },
  actions: {
    // 获取数据
    async getData(context) {
      let res = await axios.get("/data/question.json");
      context.commit("initData", res);
    },
    addNum(context, payload) {
      // 把id存储到anwserId这个数组中
      context.commit("remberId", payload);
      // console.log(context.state.questions.length)
      //解决数组跨域问题第二种方法
      if (context.state.questions.length > context.state.itemNum) {
        context.commit("addItemNum");
      }

      // 如果itemNum小于questions.length的话 让num自增
    }
  },
  modules: {}
});
