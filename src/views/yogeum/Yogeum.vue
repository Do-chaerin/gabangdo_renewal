<script setup>
import { ref, onMounted, onUnmounted } from "vue";
import Card from "./Card.vue";
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
  <div class="wrap_total">
    <div class="inner_total">
      <ProgressStepper
        v-show="showStepper"
        :steps="['요금안내', '결제/환불', '결제안내']"
        :selectors="['#step1', '#step2', '#step3']"
        :stepIndex="stepIndex"
        @go="scrollToSection"
        class="sticky-stepper hide-controls custom-stepper"
      />

      <div class="container">
        <!-- 제목 스타일 -->
        <div ref="step1" id="step1" class="step-container">
          <div class="title_txt">
            <h1>요금안내</h1>
          </div>
          <Card />
          <!-- 요금 안내 후 알림사항 -->
        </div>
        <!-- 구분선 -->
        <div class="divider"></div>
        <!-- 환불 절차 -->
        <div class="refundProcess">
          <div ref="step2" id="step2" class="step-container">
            <!-- 결제환불제목 -->
            <div class="title1 accoutNrefund">
              <div class="title_txt">
                <h1>결제 및 환불</h1>
              </div>
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
            </div>
          </div>
        </div>
        <!-- 구분선 -->
        <div class="divider"></div>
        <!-- 결제환불 내용 -->
        <div ref="step3" id="step3" class="step-container">
          <div class="title_txt">
            <h1>결제 계좌 및 카드결제 안내</h1>
          </div>
          <div class="accoutNrefundexplain">
            <p>
              <span>1. 계좌이체 안내</span>
              <br />입금 계좌 정보 :<br />
              <span class="accCard">대구은행 123-456-78910 가방도 도용달</span>
              <br />입금 시 유의사항 : <br />입금자명과 주문자명이 다를 경우
              반드시 고객센터로 연락바랍니다. <br />입금 확인은 최대 1시간 내에
              처리됩니다. <br /><br /><span>2. 카드 결제 안내</span> <br />사용
              가능한 카드 : <br />VISA, Mastercard, AMEX, 국내 신용/체크카드
              전부 가능 <br />할부 안내 5만원 이상 결제 시, 2~3개월 무이자 할부
              가능 (일부 카드사 제외) <br />결제 실패 시 확인 사항 : 카드 한도
              초과 여부 / 카드사 승인 문자 / 인터넷 결제 차단 여부 확인

              <br /><br /><span>3. 카드사 간편앱 결제 안내</span> <br />지원하는
              카드사 간편결제 앱:<br />
              삼성페이, 네이버페이, 카카오페이, 페이코, L.pay 등
              <br />결제 방법 결제 단계에서 원하는 간편결제 앱 선택 본인 인증 후
              결제 진행 결제 완료 후 주문 확인바랍니다. <br />유의사항:<br />
              일부 간편결제 앱은 특정카드사만 지원됩니다. <br />결제 실패 시, 앱
              내 카드 등록 상태를 확인바랍니다. <br /><br /><span
                >4. 기타 결제 관련 문의</span
              ><br />
              고객센터: 1234-5678 <br />(운영시간: 평일 09:00~18:00)
              <br />카카오톡 상담: @○○○ <br />(고객센터 운영시간내 문의 가능)
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@use "sass:color";
@use "@/assets/Main.scss" as *;
@use "@/assets/Variables.scss" as *;
@use "/src/assets/Home.scss" as *;

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
// 환불내용
.refunddLi1 {
  width: 20%;
  margin: 0;
  padding: 0;
}
.refunddLi2 {
  width: 68%;
  font-size: 1.2rem;
}
.accoutNrefundexplain {
  width: 100%;
  height: 70%;
  margin-bottom: 50px;
  background-color: rgba(65, 182, 232, 0.09);
  border-radius: $radius;
  p {
    font-size: 18px;
    color: #5a5a5a;
    strong {
      color: #333;
      font-size: 25px;
      line-height: 55px;
      font-weight: bold;
    }
    span {
      line-height: 45px;
      color: #333;
      font-size: 23px;
      font-weight: 500;
    }
  }
}
</style>
