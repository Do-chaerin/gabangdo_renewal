<script setup>
import { useAuthStore } from "@/stores/auth";

import { ref } from "vue";
import { useRouter } from "vue-router";
const authStore = useAuthStore();
const router = useRouter();
const showPassword = ref(false);
const togglePassword = () => {
  showPassword.value = !showPassword.value;
};
const role = ref("customer");
const formData = ref({
  email: "",
  password: "",
  role: role.value,
  rememberMe: false,
});
const handleLogin = () => {
  // 1.로컬스토리지레서 사용자 데이터 가져오기
  const users = JSON.parse(localStorage.getItem("users") || "[]");
  // 2.입력된 이메일과 비밀번호로 사용자 찾기
  // find메서드를 이용하여 일치하는 사용자 검색
  // 이메일과 비밀번호가 모두 일치해야 함
  const user = users.find(
    (u) =>
      u.email === formData.value.email &&
      u.password === formData.value.password &&
      u.role === formData.value.role
  );
  if (user) {
    authStore.login(user);
    if (user.role === "worker") {
      router.push("/worker");
    } else {
      router.push("/");
    }
  } else {
    alert("이메일 또는 비밀번호가 일치하기 않습니다.");
  }
};
</script>

<template>
  <div class="wrap_total">
    <div class="inner_total">
      <div class="login-container">
        <div class="login-box">
          <div class="loginImg">
            <img src="/images/yr/loginpage/newLogo.png" alt="" />
          </div>
          <form @submit.prevent="handleLogin" class="login-form">
            <div class="form-group">
              <input
                type="email"
                id="email"
                name="email"
                v-model="formData.email"
                placeholder="이메일을 입력하세요."
                autocomplete="username"
                required
              />
            </div>
            <div class="form-group">
              <div class="password-input">
                <input
                  id="password"
                  name="password"
                  :type="showPassword ? 'text' : 'password'"
                  v-model="formData.password"
                  placeholder="비밀번호를 입력하세요."
                  autocomplete="current-password"
                  required
                />
                <button
                  @click="togglePassword"
                  type="button"
                  class="toggle-password"
                >
                  <img
                    :src="
                      showPassword
                        ? '/images/yr/loginpage/eye-off.png'
                        : '/images/yr/loginpage/eye.png'
                    "
                    alt="비밀번호 보기 토글"
                    class="eye-icon"
                  />
                </button>
              </div>
            </div>
            <button type="submit" class="login-btn">로그인</button>
          </form>

          <div class="signup-link">
            아직 회원이 아니신가요?&nbsp;
            <router-link to="/signup">회원가입</router-link>
          </div>
        </div>
        <div class="sns-login">
          <div class="grayline"></div>
          <p>간편 로그인</p>
          <div class="grayline"></div>
        </div>
        <div class="sns-icons">
          <a
            href="https://accounts.kakao.com/login/?continue=https%3A%2F%2Faccounts.kakao.com%2Fweblogin%2Faccount#login"
            ><img src="/images/yr/loginpage/loginKT.png" alt="카카오톡"
          /></a>
          <a
            href="https://nid.naver.com/nidlogin.login?mode=form&url=https://www.naver.com/"
            ><img src="/images/yr/loginpage/loginN.png" alt="네이버"
          /></a>

          <a
            href="https://accounts.google.com/InteractiveLogin/signinchooser?continue=https%3A%2F%2Ftakeout.google.com%2F%3Fhl%3Dko&followup=https%3A%2F%2Ftakeout.google.com%2F%3Fhl%3Dko&hl=ko&osid=1&passive=1209600&ifkv=AXH0vVudToPB1oXfNyrRstCJ2S8_6MGsxrjKMEimiqpbXowYURSOX1dz9tFsLIFhTsRW8skj6ngVQw&ddm=1&flowName=GlifWebSignIn&flowEntry=ServiceLogin"
            ><img src="/images/yr/loginpage/loginG.png" alt="구글"
          /></a>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@use "sass:color";
@use "/src/assets/Main.scss" as *;
@use "/src/assets/Variables.scss" as *;

// 로그인 박스
.login-container {
  background: white;
  border-radius: $radius;
  width: 100%;
  max-width: 400px;
  text-align: center;
  .loginImg {
    img {
      width: 30%;
      margin-bottom: 30px;
    }
  }
  p {
    color: #a5a5a5;
    font-weight: bold;
  }
}
// 입력 그룹
.form-group {
  margin-bottom: 12px;
}
// 공통 입력 스타일
input {
  width: 100%;
  height: 40px;
  padding: 10px;
  font-size: 15px;
  border: 1px solid $border-gray;
  border-radius: $radius;
  box-sizing: border-box;
  color: $dark-gray;
  &:focus {
    outline: 3px solid $blue-sky;
    outline-offset: -2px;
  }
}
// 비밀번호 입력 + 토글 버튼
.password-input {
  position: relative;
  .toggle-password {
    position: absolute;
    right: 16px;
    top: 50%;
    transform: translateY(-50%);
    background: none;
    border: none;
    cursor: pointer;
    font-size: 20px;
  }
  .eye-icon {
    display: block;
    width: 20px;
    height: auto;
    opacity: 0.5;
    &:hover {
      opacity: 0.7;
    }
  }
}
// 로그인 버튼
.login-btn {
  width: 100%;
  height: 40px;
  background-color: color.adjust($main-color, $lightness: 30%);
  color: #fff;
  font-size: 16px;
  border-radius: $radius;
  cursor: pointer;
  border: none;
  transition: background 0.3s;
  display: block;
  margin: 15px 0 30px 0;
  &:hover {
    background-color: color.adjust($sub-color, $lightness: 20%) !important;
  }
}
// 회원가입 링크
.signup-link {
  text-align: center;
  color: #666;
  margin-bottom: 30px;
  a {
    color: #279bf3;
    text-decoration: none;
    &:hover {
      text-decoration: underline;
      font-weight: bold;
      color: color.adjust($sub-color, $lightness: 20%) !important;
    }
  }
}
// 간편 로그인 구분선
.sns-login {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  margin-bottom: 20px;
  .grayline {
    flex: 1;
    height: 1px;
    background-color: #ccc;
  }
  p {
    color: #279bf3;
    font-size: 14px;
    font-weight: bold;
  }
}
// SNS 아이콘 영역
.sns-icons {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20%;
  a {
    width: 13%;
    height: 13%;
    img {
      width: 100%;
      height: 100%;
    }
  }
}
</style>
