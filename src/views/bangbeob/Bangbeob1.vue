<script setup>
import { ref, onMounted, onUnmounted } from "vue";

import Tab from "./Tab.vue";
import Card from "./Card.vue";
import Price from "./Price.vue";
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
      <div class="container1">
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
      <div class="container2">
        <div ref="step2" id="step2" class="step-container">
          <!-- 제목 -->
          <div class="title_txt">
            <h1>짐보관 요금안내</h1>
            <span>사이즈별 가격책정</span>
          </div>
          <Price />
        </div>
      </div>
      <!-- 구분선 -->
      <div class="divider"></div>
      <!-- 무인보관함 위치안내 -->
      <div class="container3">
        <div ref="step3" id="step3" class="step-container">
          <!-- 타이틀 3 -->
          <!-- 제목 -->
          <div class="title_txt">
            <h1>무인보관함 위치안내</h1>
          </div>
          <!-- 탭버튼 지하철, 기차, 공항 -->
          <Tab />
        </div>
        <!-- 보관안내 유의사항 -->
        <div class="notetotal">
          <!-- 유의사항 왼쪽 -->
          <div class="noteleft">
            <img src="/images/yr/page2/2p_character.png" />
            <p class="sizeControll">확인해주세요!</p>
          </div>
          <!-- 유의사항 오른쪽 -->
          <div class="noteright">
            <!-- 이용약관 -->
            <div class="notetop">
              <ul class="note1">
                <li>
                  •&nbsp;보관 후 7일이 지난 물품은 관리자의 요청에 따라 이동될
                  수 있습니다.
                </li>
                <li>
                  •&nbsp;보관함 이용 시 문이 잘 닫혔는지 꼭 확인해 주십시오.
                  <p>
                    문을 닫지 않아 발생하는 사고에 대한 책임을 지지 않습니다.
                  </p>
                </li>
                <li>
                  •&nbsp;보관함보다 큰 물품, 귀중훔, 위험물, 동식물 등 부패할 수
                  있는 음식물은 보관할 수 없습니다.
                </li>
                <li>
                  •&nbsp;천재지변, 전쟁, 사용자 과실, 기타 불가항력적인 이유로
                  발생하는 손해에 대해서는 책임을 지지 않습니다.<br />
                  <p class="indent">
                    단, 보관함 자체에 결함으로 발생한 과실에 대해서는 검증 후
                    보상해 드립니다.
                  </p>
                </li>
                <li>
                  •&nbsp;유사시 보관함 관리를 위해 보관함을 임시로 열어 점검할
                  수 있습니다.
                </li>
                <li>
                  •&nbsp;보관함 이용중 발생한 문제는 고객센터 또는 현장
                  관리자에게 신고해 주십시오.
                </li>
              </ul>
            </div>
            <!-- 이용약관 상세보기 버튼 -->
            <div class="notebutton">
              <button>이용약관 상세보기</button>
            </div>
            <!-- 유의사항 아래 -->
            <div class="notedown1">
              <h2 class="notetitle">◾&nbsp;보관금지 물품&nbsp;◾</h2>
              <ul class="note2">
                <li>
                  •&nbsp;
                  <p>현금보관금지</p>
                  &nbsp;:&nbsp; 공공기관에서는 보관함에 현금을 넣어두라고
                  요구하지 않습니다.
                </li>
                <li>
                  •&nbsp;
                  <p>음식물보관금지</p>
                  &nbsp;:&nbsp; 음식물 보관 시 부패나 악취로 인해 사전에 경고
                  없이 폐기처분될 수 있습니다.
                </li>
              </ul>
            </div>
            <div class="notedown2">
              <h2 class="notetitle">◾&nbsp;보관함 이용 협조 안내&nbsp;◾</h2>
              <ul class="note2">
                <li>
                  •&nbsp;다른 사용자를 위해 보관된 물품은 꼭 찾아가 주세요.
                </li>
                <li>
                  •&nbsp;
                  <p>30일 이후로는 폐기 예정입니다.</p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <!-- 구분선 -->
      <div class="divider"></div>
      <!-- 유의사항 2 -->
      <div class="container4">
        <div ref="step4" id="step4" class="step-container">
          <!-- 제목 -->
          <div class="title_txt">
            <h1>가방분실 / 파손시 유의사항</h1>
          </div>
          <div class="infobuttom">
            <!-- 유의사항 긴글 -->
            <div class="notice">
              <h3>기본 보상 제공</h3>
              <p>
                서비스 이용 중 가방이 분실되거나 심각한 손상이 발생한 경우,
                <br />최대 30만 원까지 보상됩니다.
              </p>
              <h3>추가 보장 옵션 (선택 사항)</h3>
              <p>
                고객이 추가 보험 옵션을 선택할 경우, 기본 보상 외 추가 금액 보장
                가능<br />
                (상세 조건은 보험 상품에 따라 다름).
              </p>
              <h3>보험 적용 제외 사항</h3>
              <ul>
                <li>• 고객의 부주의로 인해 발생한 분실 또는 손상</li>
                <li>
                  • 가방 내부 물품의 파손, 분실 (가방 자체가 아닌 내용물 손상은
                  보상 불가)
                </li>
              </ul>

              <h3 class="_bbTum">안전한 운송 시스템</h3>
              <p>
                모든 가방은 철저하게 관리되며,<br />
                실시간 추적을 통해 더욱 안전하게 보관 및 배송됩니다.
              </p>
            </div>
          </div>
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
// 유의사항
.notetotal {
  max-width: 1000px;
  width: 90%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 30px auto 0 auto;
}
.noteleft {
  width: 30%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  img {
    width: 90%;
  }
  p {
    font-size: 25px;
    font-weight: bold;
  }
}
.noteright {
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: left;
  .notetop {
    font-size: 16.5px;
    .note1 li {
      line-height: 30px;
      p {
        text-indent: 12px;
      }
    }
  }
}
.notebutton {
  display: flex;
  justify-content: flex-end !important;
  align-items: center;
  align-self: flex-end;
  color: #ffffff;
  font-weight: bold;
  border: color.adjust($main-color, $lightness: 30%);
  border-radius: $radius;
  padding: 10px 15px;
  margin-bottom: 50px;
  background-color: color.adjust($main-color, $lightness: 30%);
  &:hover {
    background-color: color.adjust($sub-color, $lightness: 20%);
  }
}

.notedown1 {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  background-color: #fde0e0;
  border: 1px solid #ff7575;
  border-radius: $radius;
  padding: 10px;
  width: 100%;
  margin-bottom: 15px;
  .notetitle {
    font-weight: bold;
    font-size: 17px;
    padding: 10px;
  }
  .note2 {
    padding-bottom: 10px;
    li {
      display: flex;
    }
    p {
      color: #ff0000;
      font-weight: bolder;
    }
  }
}
.notedown2 {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  background-color: #ffebd2;
  border: 1px solid #ffb04a;
  border-radius: $radius;
  padding: 10px;
  width: 100%;
  .notetitle {
    font-weight: bold;
    font-size: 17px;
    padding: 10px;
  }
  .note2 {
    padding-bottom: 10px;
    li {
      display: flex;
    }
    p {
      color: #ff0000;
    }
  }
}
.infobuttom {
  border-radius: $radius;
  background-color: #def6ff;
}
</style>
