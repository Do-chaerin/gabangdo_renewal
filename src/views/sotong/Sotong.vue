<script setup>
import { ref, onMounted, onUnmounted, onBeforeUnmount } from "vue";
import ProgressStepper from "../yeyak/ProgressStepper.vue";
import Consumer from "./Consumer.vue";
import Faq from "./Faq.vue";
import Review from "./Review.vue";
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
  // 초기값 세팅
  updateActiveOnScroll();
  // 스크롤 리스너 등록
  window.addEventListener("scroll", updateActiveOnScroll, { passive: true });
});
onUnmounted(() => {
  window.removeEventListener("scroll", updateActiveOnScroll);
});

// 토글 함수: 파라미터 i 로 비교
function toggleNotice(idx) {
  if (activeIndex.value === idx) {
    activeIndex.value = null;
    document.body.style.overflow = "";
  } else {
    activeIndex.value = idx;
    document.body.style.overflow = "hidden";
  }
}
onBeforeUnmount(() => {
  document.body.style.overflow = "";
});

//이용후기
</script>

<template>
  <div class="wrap_total">
    <div class="inner_total">
      <!-- 스텝퍼 네비바 -->
      <ProgressStepper
        v-show="showStepper"
        :steps="['고객센터', 'FAQ', '이용후기']"
        :selectors="['#step1', '#step2', '#step3']"
        :stepIndex="stepIndex"
        @go="scrollToSection"
        class="sticky-stepper hide-controls custom-stepper"
      />
      <!-- 고객센터 섹션 -->
      <div class="customer">
        <div ref="step1" id="step1" class="step-container">
          <!-- 타이틀 -->
          <div class="title_txt">
            <h1>고객센터</h1>
          </div>
          <Consumer />
        </div>
      </div>
      <!-- 구분선 -->
      <div class="divider"></div>
      <!-- 공지사항 섹션 -->
      <div class="notice">
        <div ref="step2" id="step2" class="step-container">
          <!-- 타이틀 -->
          <div class="title_txt">
            <h1>FAQ</h1>
          </div>
          <!-- 검색어입력 -->
          <Faq />
        </div>
      </div>
      <!-- 구분선 -->
      <div class="divider"></div>
      <!-- 이용후기 섹션 -->
      <div class="review">
        <div ref="step3" id="step3" class="step-container">
          <!-- 타이틀 -->
          <div class="title_txt">
            <h1>이용후기</h1>
          </div>
          <Review />
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

// 공지사항섹션
.notice {
  width: 90%;
  max-width: 100%;
  text-align: center;
}

// 검색어
.search-wrapper {
  width: 70%;
  max-width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  margin: 0 auto;
  margin-bottom: 15px;

  .search {
    flex: 1;
    height: 44px;
    padding: 10px;
    font-size: 15px;
    border: 1px solid $border-gray;
    border-radius: $radius;
    background: #fff;
    box-sizing: border-box;
    color: $dark-gray;

    &:focus {
      outline: 3px solid $blue-sky;
      outline-offset: -2px;
    }
  }
  .search-btn {
    height: 44px;
    width: 60px;
    padding: 10px;
    background-color: color.adjust($main-color, $lightness: 30%);
    color: #fff;
    border: none;
    border-radius: $radius;
    font-size: 15px;
    cursor: pointer;

    &:hover {
      background-color: color.adjust($sub-color, $lightness: 20%) !important;
    }
  }
}
// 카테고리 버튼
.category-buttons {
  width: 80%;
  display: flex;
  gap: 10px;
  justify-content: center;
  text-align: center;
  align-items: center;
  margin: 0 auto;
  margin-bottom: 50px;
}

.category-btn {
  font-size: 15px;
  display: flex;
  justify-content: center;
  text-align: center;
  align-items: center;
  height: 40px; // 평상시 높이
  width: auto;
  padding: 10px; // 좌우 패딩
  border: 1px solid $border-gray;
  border-radius: $radius;
  background: #fff;
  color: $dark-gray;
  cursor: pointer;
  transition: background 0.2s, color 0.2s;

  &.active {
    background-color: color.adjust($main-color, $lightness: 30%);
    color: #fff;
    border-color: color.adjust($main-color, $lightness: 30%);
  }

  &:hover:not(.active):not(:disabled) {
    background: color.adjust($sub-color, $lightness: 20%);
  }
}

//공지사항
.scrollable-body {
  background-color: #ffffff;
  display: block;
  max-height: auto; // 리스트 최대 높이(화면 높이의 60%)
  overflow-y: auto; // 내부에서만 스크롤
  scrollbar-gutter: stable; // 스크롤바 공간 항상 확보
}
.scrollable-body tr {
  display: table;
  width: 100%;
  table-layout: fixed;
}

.notice-table {
  width: 90%;
  max-width: 100%;
  border-collapse: collapse;
  margin: 20px auto;
  color: $dark-gray;
}

.notice-table td {
  border: none;
  border-top: 1px solid $border-gray;
  padding: 13px;
  box-sizing: border-box;
}

.notice-table tr:last-child td {
  border-bottom: 1px solid $border-gray;
}

.notice-row_title {
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
  color: $dark-gray;
  margin: 0 5px;
}

.notice-row_content {
  width: 100%;
  display: flex;
  text-align: left;
  background: #f0f0f0;
  color: $dark-gray;
  line-height: 1.5;
}
.toggle-icon {
  width: 13px;
  height: 13px;
  margin-left: 8px;
  filter: invert(60%) brightness(100%);
}

// 페이지네이션 스타일
.pagination {
  margin-top: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
}
.pagination button {
  padding: 5px 10px;
  margin: 0 5px;
  cursor: pointer;
  border: none;
  border-radius: $radius;
  background-color: color.adjust($main-color, $lightness: 30%);
  color: #fff;
  :hover {
    background-color: color.adjust($sub-color, $lightness: 20%) !important;
  }
}
.pagination button:disabled {
  background: #d4d4d4;
  cursor: not-allowed;
  opacity: 0.6;
}

.number {
  background-color: #fff;
  color: $dark-gray;
}

// 이용후기섹션
.view {
  width: 70%;
  max-width: 100%;
  text-align: center;
}

// 리뷰 카드
.card-container {
  display: flex;
  justify-content: center;
  gap: 15px;
  flex-wrap: wrap;
  font-family: none;
  margin-bottom: 30px;
}

.card {
  width: 250px;
  height: 450px;
  background-color: $background-maincolor;
  border: 1px solid $border-gray;
  border-radius: $radius;
  transition: transform 0.3s ease-in-out;
  cursor: pointer;
}

.card:hover {
  transform: scale(1.02);
}

.card .img-product {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 80%;
}

.card .img-product img {
  height: 100%;
  width: 100%;
  padding: 10px;
  border-radius: $radius;
}

.detail {
  height: 20%;
  padding: 0 10px;
}
.title {
  display: flex;
  flex-wrap: wrap;
  text-align: left;
  flex-direction: column;
  gap: 5px;
}
.text {
  display: flex;
  flex-direction: column;
  align-items: baseline;
}
.tag span {
  font-size: 14px;
}
h6 {
  font-size: 14px;
  font-weight: bold;
}
span {
  font-size: 13px;
}
// 글쓰기 폼
input,
textarea,
img,
button {
  border-radius: $radius;
}
.form-buttons2 {
  background-color: #a80311;
}
// 페이지네이션 스타일
.pagination {
  margin-top: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
}
.pagination button {
  padding: 5px 10px;
  margin: 0 5px;
  cursor: pointer;
  border: none;
  border-radius: $radius;
  background-color: color.adjust($main-color, $lightness: 30%);
  color: #fff;
  :hover {
    background-color: color.adjust($sub-color, $lightness: 20%) !important;
  }
}
.pagination button:disabled {
  background: #d4d4d4;
  cursor: not-allowed;
  opacity: 0.6;
}

/* 글쓰기 버튼 */
.write-btn-wrapper {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-content: flex-end;
  align-items: flex-end;
  margin-bottom: 20px;
}

.write-btn {
  width: 150px;
  height: 50px;
  padding: 12px 24px;
  background-color: color.adjust($main-color, $lightness: 30%);
  color: #fff;
  font-size: 16px;
  border-radius: $radius;
  cursor: pointer;
  border: none;
  transition: background 0.3s;
  margin: 15px;
  display: block;
}
.write-btn:hover {
  background-color: color.adjust($sub-color, $lightness: 20%) !important;
}

.review-form {
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 100%;
  max-width: 500px;
  margin-bottom: 30px;
}

.review-form input,
.review-form textarea {
  padding: 10px;
  border: 1px solid $border-gray;
  border-radius: &$radius;
}
button {
  display: flex;
  justify-content: center;
  text-align: center;
  align-items: center;
  padding: 10px;
  background-color: color.adjust($main-color, $lightness: 30%);
  color: white;
  width: 70px;
  height: 44px;
  border: none;
  border-radius: $radius;
  cursor: pointer;
  white-space: nowrap;
  &:hover {
    transition: background 0.2s;
    background-color: #71d575;
  }
}
.form-buttons {
  display: flex;
  gap: 10px;
  justify-content: center;
}
.modal {
  .modal-overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.4);
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .modal-content {
    background: white;
    padding: 20px;
    border-radius: $radius;
    width: 90%;
    max-width: 400px;
    box-shadow: $box-shadow;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    flex-direction: column;

    img {
      width: 100%;
      border-radius: $radius;
      margin: 10px 0;
    }

    button {
      width: 150px;
      height: 50px;
      padding: 12px 24px;
      background-color: color.adjust($main-color, $lightness: 30%);
      color: #fff;
      font-size: 16px;
      border-radius: $radius;
      cursor: pointer;
      border: none;
      transition: background 0.3s;
      margin: 15px;
      display: block;
    }
    :hover {
      background-color: color.adjust($sub-color, $lightness: 20%) !important;
    }
  }
}
</style>
