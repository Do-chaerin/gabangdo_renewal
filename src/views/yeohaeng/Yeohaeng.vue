<script setup>
import { ref, onMounted, onBeforeUnmount } from "vue";
import Festival from "./Festival.vue";
import Bus from "./Bus.vue";
import Citytour from "./Citytour.vue";
import ProgressStepper from "../yeyak/ProgressStepper.vue";
const showStepper = ref(true);
const stepIndex = ref(1);

//스텝퍼
const headerHeight = document.querySelector(".header")?.offsetHeight || 0;
const offset = 100;
const selectors = ["#step1", "#step2", "#step3"];

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
  updateActiveOnScroll();
  window.addEventListener("resize", updateImage);
  window.addEventListener("scroll", updateActiveOnScroll, { passive: true });
});
onBeforeUnmount(() => {
  window.removeEventListener("resize", updateImage);
  window.removeEventListener("scroll", updateActiveOnScroll);
});
const imgSrc = ref(null); // 이미지 경로 바인딩용

const updateImage = () => {
  const width = window.innerWidth;
  if (width <= 390) {
    imgSrc.value = "/images/geen/1/cititour-round2.jpg";
  } else if (width <= 500) {
    imgSrc.value = "/images/geen/1/cititour-round1.jpg";
  } else if (width <= 768) {
    imgSrc.value = "/images/geen/1/cititour-round0.jpg";
  } else {
    imgSrc.value = "/images/geen/1/cititour-round.jpg";
  }
};
onMounted(() => {
  updateImage();
});
</script>

<template>
  <div class="wrap_total">
    <div class="inner_total">
      <!-- 스텝퍼 네비바 -->
      <ProgressStepper
        v-show="showStepper"
        :steps="['대구축제', '순환버스', '테마버스']"
        :selectors="['#step1', '#step2', '#step3']"
        :stepIndex="stepIndex"
        @go="scrollToSection"
        class="sticky-stepper hide-controls custom-stepper"
      />
      <div class="container">
        <div ref="step1" id="step1" class="step-container">
          <transition name="fade">
            <!-- 대구축제  -->
            <Festival />
          </transition>
        </div>
      </div>
      <!-- 구분선 -->
      <div class="divider"></div>
      <!-- 순환버스 -->
      <div class="container">
        <div ref="step2" id="step2" class="step-container">
          <!-- 순환버스 제목 -->
          <div class="title_txt">
            <h1>순환버스</h1>
          </div>
          <Bus />
        </div>
      </div>
      <!-- 구분선 -->
      <div class="divider"></div>
      <!-- 테마버스 -->
      <div class="container">
        <div ref="step3" id="step3" class="step-container">
          <!-- 테마버스 제목 -->
          <div class="title_txt">
            <h1>테마버스</h1>
          </div>
          <!-- 테마버스 이미지 -->
          <Citytour />
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
