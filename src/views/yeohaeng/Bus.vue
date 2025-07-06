<script setup>
import { ref } from "vue";
// 순환버스 이미지 크기
const imgSrc = ref("/images/geen/city_roundmap_bg.jpg"); // 이미지 경로 바인딩용
</script>

<template>
  <!-- 순환버스 이미지 -->
  <div class="content-box">
    <a
      href="https://www.daegucitytour.com/bbs/page.php?hid=guide_1"
      target="_blank"
    >
      <img v-if="imgSrc" :src="imgSrc" alt="순환버스지도" />
    </a>
  </div>
</template>

<style lang="scss" scoped>
@use "sass:color";
@use "/src/assets/Main.scss" as *;
@use "/src/assets/Variables.scss" as *;

.content-box {
  max-width: 1000px;
  width: 90%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin: 0 auto;
}
</style>
