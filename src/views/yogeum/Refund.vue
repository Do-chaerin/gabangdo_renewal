<script setup>
import { MoveRight } from "lucide-vue-next";
</script>

<template>
  <div class="refund">
    <div class="left">
      <img src="/images/geen/1/announce.png" alt="알림이미지" />
    </div>
    <div class="right">
      <p>환불신청</p>
      <span> > </span>
      <p>환불여부확인</p>
      <span> > </span>
      <p>환불처리</p>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@use "sass:color";
@use "@/assets/Main.scss" as *;
@use "@/assets/Variables.scss" as *;

.refund {
  max-width: 1000px;
  width: 90%;
  margin: 0 auto;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  .left {
    display: flex;
    justify-content: center;
    img {
      width: 80%;
    }
  }
  .right {
    display: flex;
    justify-content: center;
    align-items: center;
    p {
      font-size: 25px;
      padding: 10px 20px;
      border: 2px solid $sub-color;
      border-radius: 50px;
      color: #333333;
    }
    span {
      font-size: 30px;
      padding: 0 20px;
      color: #777777;
    }
  }
}
</style>
