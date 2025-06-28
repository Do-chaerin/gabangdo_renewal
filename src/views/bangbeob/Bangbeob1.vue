<script setup>
import { ref, onMounted, onUnmounted } from "vue";

import Tab from "./Tab.vue";
import Card from "./Card.vue";
import Price from "./Price.vue";
import Note1 from "./Note1.vue";
import Note2 from "./Note2.vue";
import ProgressStepper from "../yeyak/ProgressStepper.vue";
const showStepper = ref(true);
const stepIndex = ref(1);

//스텝퍼
const headerHeight = document.querySelector(".header")?.offsetHeight || 0;
const offset = 100;
const selectors = ["#step1", "#step2", "#step3", "#step4"];

function scrollToSection(idx) {
  stepIndex.value = idx;
  const sel = selectors[idx - 1];
  const el = document.querySelector(sel);
  if (!el) return;
  const top =
    el.getBoundingClientRect().top + window.scrollY - headerHeight - offset;
  window.scrollTo({ top, behavior: "smooth" });
}
// 스크롤할 때 현재 위치에 맞는 인덱스 계산
function updateActiveOnScroll() {
  const scrollY = window.scrollY + headerHeight + offset + 1;
  let current = 1;
  for (let i = 0; i < selectors.length; i++) {
    const el = document.querySelector(selectors[i]);
    if (!el) continue;
    // 섹션의 실제 문서 상단 위치
    const sectionTop = el.offsetTop;
    if (scrollY >= sectionTop) {
      current = i + 1;
    } else {
      break;
    }
  }
  // 맨 아래에 도달하면 마지막
  if (window.innerHeight + window.scrollY >= document.body.scrollHeight - 5) {
    current = selectors.length;
  }
  stepIndex.value = current;
}
onMounted(() => {
  // 초기값 세팅
  updateActiveOnScroll();
  // 스크롤 리스너 등록
  window.addEventListener("scroll", updateActiveOnScroll, { passive: true });
});
onUnmounted(() => {
  window.removeEventListener("scroll", updateActiveOnScroll);
});
</script>

<template>
  <!-- 전체 -->
  <div class="wrap_total">
    <!-- 이너 -->
    <div class="inner_total">
      <!-- 스텝퍼 네비바 -->
      <ProgressStepper
        v-show="showStepper"
        :steps="['전달방법', '요금안내', '무인보관함', '유의사항']"
        :selectors="['#step1', '#step2', '#step3', '#step4']"
        :stepIndex="stepIndex"
        @go="scrollToSection"
        class="sticky-stepper hide-controls custom-stepper"
      />
      <!-- 가방전달방법 -->
      <div class="container">
        <div ref="step1" id="step1" class="step-container">
          <div class="title_txt">
            <h1>가방전달 방법</h1>
            <span>출발지별 안내사항</span>
          </div>
          <Card />
        </div>
      </div>
      <!-- 구분선 -->
      <div class="divider"></div>
      <!-- 짐보관 이용안내 -->
      <div class="container">
        <div ref="step2" id="step2" class="step-container">
          <div class="title_txt">
            <h1>짐보관 요금안내</h1>
            <span>사이즈별 가격책정</span>
          </div>
          <Price />
        </div>
      </div>
      <!-- 구분선 -->
      <div class="divider"></div>
      <!-- 무인보관함 위치안내 & 유의사항 1 -->
      <div class="container">
        <div ref="step3" id="step3" class="step-container">
          <div class="title_txt">
            <h1>무인보관함 위치안내</h1>
          </div>
          <!-- 슬라이드 탭 -->
          <Tab />
        </div>
        <!-- 유의사항 1 -->
        <Note1 />
      </div>
      <!-- 구분선 -->
      <div class="divider"></div>
      <!-- 유의사항 2 -->
      <div class="container">
        <div ref="step4" id="step4" class="step-container">
          <div class="title_txt">
            <h1>가방분실 / 파손시 유의사항</h1>
          </div>
          <Note2 />
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@use "sass:color";
@use "/src/assets/Main.scss" as *;
@use "/src/assets/Variables.scss" as *;

// 스텝퍼
:deep(.stepper) {
  display: flex;
  flex-direction: column;
  z-index: 6500;
}
.sticky-stepper {
  position: fixed;
  top: 120px;
  left: 0;
  width: 80px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  z-index: 6500;
  padding: 10px;
  color: #555;
  &.custom-stepper {
    // 커스텀스텝퍼적용
    left: calc(47.5% - 600px);
    width: 120px;
    &.hide-controls {
      // 써클숨김
      :deep(.step-nav),
      :deep(.circle) {
        display: none !important;
      }
    }
    // 모든라벨에 적용
    :deep(.label) {
      margin-top: 6px;
      font-size: 17px;
      cursor: pointer;
      padding: 5px 10px;
      transition: background 0.2s;
      &:hover {
        border-bottom: 2px solid rgba($sub-color, 0.3);
        color: #555;
        font-weight: bold;
      }
    }
    // 활성단계스타일
    :deep(.step.active .label) {
      border-bottom: 2px solid rgba($sub-color, 0.3);
      color: #555;
      font-weight: bold;
    }
  }
}
</style>
