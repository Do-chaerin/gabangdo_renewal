<script setup>
import { ref } from "vue";

// 포맷 함수: YYYY.MM.DD HH:mm
function formatDate(date) {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0"); // 0~11이니까 +1
  const day = String(date.getDate()).padStart(2, "0");
  const hour = String(date.getHours()).padStart(2, "0"); // 24시간제
  const minute = String(date.getMinutes()).padStart(2, "0");

  return `${year}.${month}.${day} ${hour}:${minute}`;
}

const now = new Date();

// 현재 시간
const currentTime = ref(formatDate(now));

// 1시간 전
const oneHourAgo = new Date(now);
oneHourAgo.setHours(now.getHours() - 1);
const timeOneHourAgo = ref(formatDate(oneHourAgo));

// 하루 전
const oneDayAgo = new Date(now);
oneDayAgo.setDate(now.getDate() - 1);
const timeOneDayAgo = ref(formatDate(oneDayAgo));
</script>

<template>
  <div class="wrap_total">
    <div class="bb_tracking-container">
      <div class="bb_title1">
        <!-- 제목 -->
        <div class="bb_title_txt1">
          <h1>가방도 한눈에</h1>
        </div>
      </div>

      <!-- 상단 프로그레스 -->
      <div class="bb_progress-bar">
        <div class="bb_progress-present">
          <!-- 1번쨰 -->
          <div class="bb_step bb_completed">
            <div class="bb_circle">✓</div>
          </div>
          <div class="bb_line bb_completed">
            <div class="bb_realLine"></div>
          </div>

          <!-- 2번째 -->
          <div class="bb_step bb_completed">
            <div class="bb_circle">✓</div>
          </div>
          <div class="bb_line bb_completed">
            <div class="bb_realLine"></div>
          </div>

          <!-- 3번째 -->
          <div class="bb_step bb_current">
            <div class="bb_circle bb_someMore">✓</div>
          </div>
          <div class="bb_line">
            <div class="bb_realLine bb_changColorLine"></div>
          </div>

          <!-- 4번째 -->
          <div class="bb_step">
            <div class="bb_line"></div>
            <div class="bb_circle"></div>
          </div>
        </div>
        <!-- 프로세스 글씨 -->
        <div class="bb_progress-letter">
          <div class="bb_more">예약 완료</div>
          <div class="bb_more bb_moremore">직원 만남</div>
          <div class="bb_more">짐전달 완료</div>
          <div class="">수령 확인</div>
        </div>
      </div>

      <!-- 하단 시간표시 -->
      <div class="bb_log">
        <!-- 왼쪽 -->
        <div class="bb_logleft">
          <!-- 동글뱅이 -->
          <div class="bb_loglist">
            <!-- 첫번째 -->
            <div class="bb_logCircle"></div>
            <div class="bb_logLineTray">
              <div class="bb_logLine"></div>
            </div>
            <!-- 두번째 -->
            <div class="bb_logCircle"></div>
            <div class="bb_logLineTray">
              <div class="bb_logLine"></div>
            </div>
            <!-- 세번째 -->
            <div class="bb_logCircle bb_logCircleMore"></div>
            <div class="bb_logLineTray">
              <div class="bb_logLine bb_logLinegray"></div>
            </div>
            <!-- 네번째 -->
            <div class="bb_logCircle bb_logCirclegray"></div>
            <div class="bb_logLineTray"></div>
          </div>
          <!-- 동글뱅이 옆글씨 -->
          <div class="bb_logLetter">
            <div class="bb_logLetterP">예약완료</div>
            <div class="bb_logLetterP">직원만남</div>
            <div class="bb_logLetterP bb_plus">짐전달 완료</div>
            <div class="bb_logLetterP">수령 완료</div>
          </div>
        </div>
        <!-- 시간표시 -->
        <div class="bb_logTime">
          <div class="bb_logTime1">{{ currentTime }}</div>
          <div class="bb_logTime1">{{ timeOneHourAgo }}</div>
          <div class="bb_logTime1">{{ timeOneDayAgo }}</div>
          <div class="bb_logTime1"></div>
        </div>
      </div>
    </div>
    <div class="bb_allBg">
      <div class="bb_kakao-banner">
        <p>카카오톡으로 조회하고 싶다면?</p>
        <button class="bb_kakao-btn">
          <img src="/images/yr/loginpage/loginKT.png" alt="카카오 아이콘" />
          <span>가방도</span>
        </button>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@use "sass:color";
@use "/src/assets/Main.scss" as *;
@use "/src/assets/Variables.scss" as *;

.bb_tracking-container {
  width: 80%;
  position: relative;
  max-width: 800px;
  margin: 0 auto;
  margin-top: 50px;
  margin-bottom: 100px;
  font-family: $font-family;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
  border-radius: 20px;
  padding: 4% 0 2% 0;
  .bb_title1 {
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    padding-bottom: 30px;
    .bb_title_txt1 h1 {
      font-size: 40px;
      font-family: $font-ownglyph;
    }
  }

  .bb_progress-bar {
    background-color: #f0f4fa;
    justify-content: space-between;
    align-items: center;
    .bb_progress-present {
      display: flex;
      text-align: center;
      justify-content: center;
      padding: 4% 10% 1% 10%;
      .bb_step {
        display: flex;
        align-items: center;

        .bb_circle {
          width: 35px;
          height: 35px;
          border-radius: 50%;
          border: 3px solid #ccc;
          background-color: #ccc;
          color: white;
          font-weight: bold;
          font-size: 20px;
          display: flex;
          justify-content: center;
          align-items: center;
        }

        &.bb_completed .bb_circle {
          background-color: #00aaff;
          border-color: #00aaff;
        }

        &.bb_current .bb_circle {
          background-color: white;
          border-color: #0070c0;
          color: #0070c0;
        }
        .bb_someMore {
          width: 50px;
          height: 50px;
          font-size: 35px;
        }
      }

      .bb_line {
        flex: 1;
        height: 50px;
        display: flex;
        justify-content: center;
        align-items: center;
        .bb_changColorLine {
          background-color: #ccc !important;
          width: 100%; // 선 길이
          height: 4px; // 선 두께 ← 이거 없으면 안 보여요!
        }

        .bb_realLine {
          background-color: #00aaff;
          width: 100%; // 선 길이
          height: 4px; // 선 두께 ← 이거 없으면 안 보여요!
        }
      }
    }
    .bb_progress-letter {
      display: flex;
      text-align: center;
      padding-bottom: 4%;
      font-size: 14px;
      div {
        flex: 1;
      }
    }
  }
  // 하단 시간표시
  .bb_log {
    display: flex;
    justify-content: space-between;
    padding: 8% 10% 1% 10%;
    .bb_logleft {
      display: flex;
      justify-content: space-between;
      width: 20%;
    }
    .bb_loglist {
      width: 10%;
      display: flex;
      flex-direction: column;
      align-items: center;
    }
  }

  .bb_logCircle,
  .bb_logLineTray {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .bb_logCircle {
    width: 17px;
    height: 17px;
    background-color: $sub-color;
    border-radius: 50%;
  }

  .bb_logCircleMore {
    width: 20px;
    height: 20px;
    background-color: $main-color;
  }
  .bb_logCirclegray {
    background-color: #ccc;
  }
  .bb_logLinegray {
    background-color: #ccc !important;
  }

  .bb_logLineTray {
    width: 15px;
    height: 50px;
  }

  .bb_logLine {
    width: 4px; // 선의 두께
    height: 100%;
    background-color: $sub-color;
  }
  // 동글뱅이 옆글씨
  .bb_logLetter {
    display: flex;
    flex-direction: column;
  }
  .bb_logLetterP {
    width: 74px;
    flex: 1;
  }
}

// 시간표시
.bb_logTime {
  display: flex;
  flex-direction: column;
  .bb_logTime1 {
    flex: 1;
    width: 101px;
    font-size: 13px;
    color: #9c9c9c;
  }
}

.bb_allBg {
  background-color: $main-color;

  .bb_kakao-banner {
    padding: 2% 25%;
    max-width: 1100px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 16px 24px;
    color: white;
    font-size: 14px;
    padding: 1%;
    margin-bottom: 4%;
    p {
      font-size: 25px;
      font-weight: bold;
    }
    .bb_kakao-btn {
      display: flex;
      align-items: center;
      background-color: #fff;
      border: none;
      border-radius: 50px;
      padding: 1%;
      font-weight: bold;
      cursor: pointer;
      font-size: 14px;
      color: black;
      span {
        font-size: 20px;
        padding-right: 5px;
      }
      img {
        width: 40px;
        height: 40px;
        margin-right: 15px;
      }
    }
  }
}

@media screen and (max-width: 940px) {
  .bb_logleft {
    width: 30% !important;
  }
}

@media screen and (max-width: 520px) {
  .bb_logleft {
    width: 40% !important;
  }
}
</style>
