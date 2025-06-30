<script setup></script>

<template>
  <ul>
    <li class="refunddLi1">
      <img src="/images/geen/1/announce.png" alt="알림이미지" />
    </li>
    <li class="refunddLi2">
      <a>환불신청</a><span> > </span> <a>환불여부확인</a>
      <span> > </span>
      <a>환불처리</a>
    </li>
  </ul>
</template>

<style lang="scss" scoped>
@use "sass:color";
@use "@/assets/Main.scss" as *;
@use "@/assets/Variables.scss" as *;

// 환불 절차
.refundProcess {
  ul {
    width: 80%;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0;
    padding: 0;
    li {
      display: flex;
      img {
        width: 60%;
      }
      a {
        width: 50%;
        display: block;
        display: flex;
        text-align: center;
        align-items: center;
        justify-content: center;
        border-radius: $radius;
        border: $border-line;
      }
      span {
        width: 150px;
        font-size: 30px;
        text-align: center;
        color: $sub-color;
      }
    }
  }
}
</style>
