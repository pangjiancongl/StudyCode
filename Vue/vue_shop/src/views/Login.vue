<template>
  <a-layout>
    <a-layout-content>
      <div class="login_container">
        <!--登录卡片-->
        <a-card>
          <!--头像-->
          <a-avatar :size="130" src="/images/logo.png"> </a-avatar>
          <!--登录框-->
          <a-form>
            <!--用户名  wrapperCol设置占比span 和偏移offset-->
            <a-form-item :wrapperCol="{ span: 24 }">
              <a-input placeholder="用户名">
                <!--用户名图标-->
                <template #prefix
                  ><UserOutlined style="color:rgba(0,0,0,.25)" />
                </template>
              </a-input>
            </a-form-item>
            <!--密码-->
            <a-form-item :wrapperCol="{ span: 24 }">
              <a-input type="password" placeholder="密码">
                <!--密码图标-->
                <template #prefix
                  ><LockOutlined style="color:rgba(0,0,0,.25)"
                /></template>
              </a-input>
            </a-form-item>
            <!--按钮-->
            <a-row>
              <!--登录按钮-->
              <a-col :span="4">
                <a-form-item>
                  <a-button type="primary" html-type="submit">
                    登录
                  </a-button>
                </a-form-item>
              </a-col>
              <!--重置按钮  offset设置偏移-->
              <a-col :span="4" :offset="16">
                <a-form-item>
                  <a-button type="primary" html-type="reset">
                    重置
                  </a-button>
                </a-form-item></a-col
              >
            </a-row>
          </a-form>
        </a-card>
      </div>
    </a-layout-content>
  </a-layout>
</template>

<script>
// 引入图标
import { UserOutlined, LockOutlined } from "@ant-design/icons-vue";
export default {
  name: "Login",
  components: {
    UserOutlined,
    LockOutlined
  }
};
</script>

<style lang="less" scoped>
.login_container {
  position: relative;
  background-color: #2b5b6b;
  background-image: url(/images/background.svg);
  background-size: 100%;
  background-repeat: no-repeat;
  height: 100%;
}

.ant-layout {
  height: 100%;
  position: relative;
}
.ant-card {
  width: 450px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
.ant-avatar {
  position: absolute;
  left: 50%;
  top: 0;
  transform: translate(-50%, -50%);
}
.ant-avatar {
  background-color: #eee;
  border: 10px solid #ffffff;
  box-shadow: 0 0 10px #ddd;
  overflow: hidden;
  box-sizing: content-box;
  img {
    width: 100%;
    height: 100%;
    border-radius: 50%;
    background-color: #fff;
  }
}
.ant-form {
  margin-top: 80px;
}
</style>
