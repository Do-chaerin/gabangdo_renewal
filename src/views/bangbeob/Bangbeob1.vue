<script setup>
import { ref, onMounted, onUnmounted } from "vue";

import Tab from "./Tab.vue";
import Card from "./Card.vue";
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
    <div class="inner">
      <!-- 스텝퍼 네비바 -->
      <ProgressStepper
        v-show="showStepper"
        :steps="['전달방법', '요금안내', '무인보관함', '유의사항']"
        :selectors="['#step1', '#step2', '#step3', '#step4']"
        :stepIndex="stepIndex"
        @go="scrollToSection"
        class="sticky-stepper hide-controls custom-stepper"
      />
      <div ref="step1" id="step1" class="step-container">
        <div class="title_txt">
          <h1>가방전달 방법</h1>
          <span>출발지별 안내사항</span>
        </div>
        <Card />
      </div>

      <!-- 구분선 -->
      <div class="divider"></div>
      <!-- 짐보관 이용안내 -->
      <div ref="step2" id="step2" class="step-container">
        <div class="container2">
          <!-- 제목 -->
          <div class="title_txt">
            <h1>짐보관 요금안내</h1>
            <span>사이즈별 가격책정</span>
          </div>
          <!-- 이용안내 전체 -->
          <div class="luggageNotice">
            <!-- 이용안내_요금안내 -->
            <div class="luggagepriceInfo luggagePlusMinus">
              <!-- 요금안내_위 -->
              <div class="priceInfoTop">
                <!-- 운영시간 -->
                <div class="priceInfoTime">
                  <p>운영시간 : 05시 - 00시</p>
                  <div class="priceInfoDetail">
                    <ul>
                      <li>*역마다 차이가 있을 수 있습니다.</li>
                      <li>*기차역의 경우 오후 11시에 마감됩니다.</li>
                    </ul>
                  </div>
                </div>
              </div>
              <!-- 세부사항 -->
              <!-- 요금안내_아래 -->
              <div class="priceInfoBottom">
                <!-- 파란배경글씨 -->
                <div class="priceInfoMenu">
                  <ul>
                    <li class="leftTum">구분</li>
                    <li class="left">
                      기본요금<br />
                      <p class="small">(시작 - 4시간이내)</p>
                    </li>
                    <li class="left">
                      추가요금<br />
                      <p class="small">(4시간이후 12시간마다)</p>
                    </li>
                  </ul>
                </div>
                <!-- 세부글씨 -->
                <div class="priceInfoMenuDetail">
                  <ul class="infowrap">
                    <li class="left">
                      <div class="leftTum1">소형</div>
                      <div class="leftbottum">45cm X 56cm X 30cm</div>
                    </li>
                    <li class="middleTum">2,000원</li>
                    <li class="rightTum">2,000원</li>
                  </ul>
                  <ul class="infowrap">
                    <li class="left">
                      <div class="leftTum1">중형</div>
                      <div class="leftbottum">45cm X 56cm X 45cm</div>
                    </li>
                    <li class="middleTum">3,000원</li>
                    <li class="rightTum">3,000원</li>
                  </ul>
                  <ul class="infowrap">
                    <li class="left">
                      <div class="leftTum1">대형</div>
                      <div class="leftbottum">45cm X 56cm X 60cm</div>
                    </li>
                    <li class="middleTum">4,000원</li>
                    <li class="rightTum">4,000원</li>
                  </ul>
                  <ul class="infowrap">
                    <li class="left">
                      <div class="leftTum1">특대형</div>
                      <div class="leftbottum">45cm X 56cm X 90cm</div>
                    </li>
                    <li class="middleTum">5,000원</li>
                    <li class="rightTum">5,000원</li>
                  </ul>
                </div>
              </div>
            </div>

            <!-- 이용안내_요금안내 / 모바일일때 -->
            <div class="luggagepriceInfo luggagePlus">
              <!-- 요금안내_위 -->
              <div class="priceInfoTop">
                <!-- 운영시간 -->
                <div class="priceInfoTime">
                  <p>운영시간 05시 - 00시</p>
                </div>
                <!-- 세부사항 -->
                <div class="priceInfoDetail">
                  <ul>
                    <li>*역마다 차이가 있을 수 있습니다.</li>
                    <li>*기차역의 경우 오후 11시에 마감됩니다.</li>
                  </ul>
                </div>
              </div>
              <!-- 요금안내_아래 -->
              <div class="priceInfoBottom">
                <!-- 파란배경글씨 -->
                <div class="priceInfoMenu">
                  <ul>
                    <li class="leftTum">구분</li>
                  </ul>
                </div>
                <!-- 세부글씨 -->
                <div class="priceInfoMenuDetail">
                  <ul>
                    <li class="red someMore">소형</li>
                    <li class="blue someMore">중형</li>
                    <li class="green someMore">대형</li>
                    <li class="purple">특대형</li>
                  </ul>
                </div>
                <div class="priceInfoMenu">
                  <ul>
                    <li class="leftTum">요금 (시작 - 4시간이내)</li>
                  </ul>
                </div>
                <!-- 세부글씨 -->
                <div class="priceInfoMenuDetail">
                  <ul>
                    <li class="red">2,000</li>
                    <li class="blue">3,000</li>
                    <li class="green">4,000</li>
                    <li class="purple">5,000</li>
                  </ul>
                </div>
                <div class="priceInfoMenu">
                  <ul>
                    <li class="leftTum">요금(4시간이후 12시간마다)</li>
                  </ul>
                </div>
                <!-- 세부글씨 -->
                <div class="priceInfoMenuDetail">
                  <ul>
                    <li class="red">2,000원</li>
                    <li class="blue">3,000원</li>
                    <li class="green">4,000원</li>
                    <li class="purple">5,000원</li>
                  </ul>
                </div>
              </div>
            </div>

            <!-- 이용안내_수화물규격 -->
            <div class="luggageImgNotice">
              <!-- 수화물 S -->
              <div class="luggage">
                <!-- 큰글씨 -->
                <div class="luggageTitleM">
                  <p>소형</p>
                </div>
                <!-- 소제목 -->
                <div class="luggageTitle">
                  <p>기내용 캐리어, 소형 배낭등</p>
                </div>
                <!-- 그림 -->
                <div class="luggageimg">
                  <img
                    src="/images/yr/page2/size4.png"
                    class="smaller"
                    alt="sSize"
                  />
                </div>
                <!-- 디테일 -->
                <div class="luggagedetail">
                  <p>좌우 45cm X 깊이 56cm X 높이 30cm</p>
                </div>
              </div>
              <!-- 수화물 M -->
              <div class="luggage">
                <!-- 큰글씨 -->
                <div class="luggageTitleM">
                  <p>중형</p>
                </div>
                <!-- 소제목 -->
                <div class="luggageTitle">
                  <p>화물용 캐리어, 등산가방 등</p>
                </div>
                <!-- 그림 -->
                <div class="luggageimg">
                  <img
                    src="/images/yr/page2/size4.png"
                    alt="sSize"
                    class="smaller"
                  />
                </div>
                <!-- 디테일 -->
                <div class="luggagedetail">
                  <p>좌우 45cm X 깊이 56cm X 높이 45cm</p>
                </div>
              </div>
              <!-- 수화물 L -->
              <div class="luggage">
                <!-- 큰글씨 -->
                <div class="luggageTitleM">
                  <p>대형</p>
                </div>
                <!-- 소제목 -->
                <div class="luggageTitle">
                  <p>대형 캐리어, 골프백, 대형배낭 등</p>
                </div>
                <!-- 그림 -->
                <div class="luggageimg">
                  <img
                    src="/images/yr/page2/size4.png"
                    alt="sSize"
                    class="smaller"
                  />
                </div>
                <!-- 디테일 -->
                <div class="luggagedetail">
                  <p>좌우 45cm X 깊이 56cm X 높이 60cm</p>
                </div>
              </div>
              <!-- 수화물 XL -->
              <div class="luggage">
                <!-- 큰글씨 -->
                <div class="luggageTitleM">
                  <p>특대형</p>
                </div>
                <!-- 소제목 -->
                <div class="luggageTitle">
                  <p>기타 물품 및 표시 외 사이즈</p>
                </div>
                <!-- 그림 -->
                <div class="luggageimg">
                  <img
                    src="/images/yr/page2/size4.png"
                    alt="sSize"
                    class="smaller"
                  />
                </div>
                <!-- 디테일 -->
                <div class="luggagedetail">
                  <p>좌우 45cm X 깊이 56cm X 높이 90cm</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- 구분선 -->
      <div class="divider"></div>
      <!-- 무인보관함 위치안내 -->
      <div ref="step3" id="step3" class="step-container">
        <div class="container3">
          <!-- 타이틀 3 -->
          <!-- 제목 -->
          <div class="title_txt">
            <h1>무인보관함 위치안내</h1>
          </div>
          <!-- 탭버튼 지하철, 기차, 공항 -->
          <Tab />
        </div>
        <div class="container4">
          <div class="container3">
            <div class="centerLine">
              <!-- 공지 왼쪽 -->
              <div class="contain3Left">
                <!-- 용달씨 그림 -->
                <div class="yongdal">
                  <img src="/images/yr/page2/2p_character.png" alt="" />
                </div>
                <p class="sizeControll">확인해주세요!</p>
              </div>

              <!-- 공지 오른쪽 -->
              <div class="contain3Right">
                <!-- 유의사항_위 -->
                <div class="noteTop">
                  <ul class="notice1">
                    <li>
                      • 보관 후 7일이 지난 물품은 관리자의 요청에 따라 이동될 수
                      있습니다.
                    </li>
                    <li>
                      • 보관함 이용 시 문이 잘 닫혔는지 꼭 확인해 주십시오. 문을
                      닫지 않아 발생하는 사고에 대한 책임을 지지 않습니다.
                    </li>
                    <li>
                      • 보관함보다 큰 물품, 귀중훔, 위험물, 동식물 등 부패할 수
                      있는 음식물은 보관할 수 없습니다.
                    </li>
                    <li>
                      • 천재지변, 전쟁, 사용자 과실, 기타 불가항력적인 이유로
                      발생하는 손해에 대해서는 책임을 지지 않습니다.
                      <span class="indent"
                        >단, 보관함 자체에 결함으로 발생한 과실에 대해서는 검증
                        후 보상해 드립니다.</span
                      >
                    </li>
                    <li>
                      • 유사시 보관함 관리를 위해 보관함을 임시로 열어 점검할 수
                      있습니다.
                    </li>
                    <li>
                      • 보관함 이용중 발생한 문제는 고객센터 또는 현장
                      관리자에게 신고해 주십시오.
                    </li>
                  </ul>
                  <!-- 이용약관 상세보기 버튼 -->
                  <div class="noticeButton">
                    <button>이용약관 상세보기</button>
                  </div>
                </div>
                <!-- 유의사항_아래 -->
                <div class="noteDown1">
                  <h2 class="noticeSubtitle">보관금지 물품</h2>
                  <ul class="notice2">
                    <li>
                      <p class="stron1">현금보관금지 :</p>
                      공공기관에서는 보관함에 현금을 넣어두라고 요구하지
                      않습니다.
                    </li>
                    <li>
                      <p class="stron1">음식물보관금지 :</p>
                      음식물 보관 시 부패나 악취로 인해 사전에 경고 없이
                      폐기처분될 수 있습니다.
                    </li>
                  </ul>
                </div>
                <div
                  class="noteDown2"
                  style="list-style: none; padding-left: 0"
                >
                  <h2 class="noticeSubtitle">보관함 이용 협조 안내</h2>
                  <ul class="notice2">
                    <li>
                      • 다른 사용자를 위해 보관된 물품은 꼭 찾아가 주세요.<br />
                      <p class="Strong2">30일 이후로는 폐기 예정</p>
                      입니다.
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- 구분선 -->
      <div class="divider"></div>
      <!-- 유의사항2 -->
      <div ref="step4" id="step4" class="step-container">
        <div class="container5">
          <div class="innerBottom">
            <!-- 제목 -->
            <div class="title_txt">
              <h1>가방분실 / 파손시 유의사항</h1>
            </div>
          </div>
          <div class="container4Bg">
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

.plus {
  display: none;
}

// 짐보관 이용안내
.container2 {
  width: 100%;
  // 1. 파란 헤더행 (.priceInfoMenu)
  .priceInfoMenu > ul {
    display: flex;
    width: 100%;
    list-style: none;
    margin: 0;
    padding: 0;
    & > li:nth-child(1) {
      flex: 1;
      text-align: center;
      padding-left: 1rem;
    }
    & > li:nth-child(2),
    & > li:nth-child(3) {
      flex: 1;
      text-align: center;
    }
  }
  // 2. 내용 행들 (.priceInfoMenuDetail)
  .priceInfoMenuDetail > ul.infowrap {
    display: flex;
    width: 100%;
    list-style: none;
    margin: 0;
    padding: 0.5rem 0;
    /* 첫 번째 칸(크기/치수) */
    & > li:nth-child(1) {
      flex: 1;
      text-align: left;
      display: flex;
      flex-direction: column;
      justify-content: center;
      padding-left: 1rem;
    }
    //가운데·오른쪽 칸(요금)
    & > li:nth-child(2),
    & > li:nth-child(3) {
      flex: 1;
      text-align: center;
    }
  }
  // 3. font-size 등 미세 조정용
  .priceInfoMenuDetail li,
  .priceInfoMenu li {
    font-size: 1.1rem; /* 필요하다면 조정 */
  }

  // 이용안내_수화물규격
  .luggageNotice {
    .luggageImgNotice {
      display: flex;
      flex-wrap: wrap; /* 요소가 넘치면 자동 줄바꿈 */
      flex: 1;
      justify-content: space-between;
      align-items: center;
      .luggage {
        padding: 3px;
        width: calc((100% - 4%) / 4);
        background-color: #fff;
        border-radius: $radius;
        border: 2px solid #e5e7eb;
        box-shadow: 0 4px 10px rgba(0, 0, 0, 0.05);
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;

        .luggageTitleM {
          font-size: 25px;
          font-weight: bold;
          padding-bottom: 3%;
        }
        .luggageTitle {
          font-size: 17px;
          font-weight: bold;
          color: #264884;
        }
        .luggageimg {
          width: 60%;
          height: 60%;
          .smaller {
            padding: 40%;
            margin-top: 10%;
            margin-bottom: 10%;
          }
          img {
            width: 100%;
            height: 100%;
            padding: 5%;
          }
          .smaller {
            padding: 10%;
          }
        }
        .luggagedetail {
          font-size: 15px;
          color: #8f8f8f;
          font-weight: bold;
        }
      }
    }
    .luggagepriceInfo {
      border: $border-line;
      box-shadow: 0 4px 10px rgba(0, 0, 0, 0.05);
      width: 100%;
      background-color: #fff;
      border-radius: $radius;
      padding: 2%;
      margin-bottom: 30px;
      .priceInfoTop {
        .priceInfoTime {
          width: 30%;
          height: auto;
          padding: 15px;
          background-color: #d7d7d7;
          border-radius: $radius;
          text-align: center;
          margin-bottom: 40px;
          p {
            font-size: 20px;
          }
        }
      }
      .priceInfoBottom {
        .priceInfoMenu {
          background-color: #279bf4;
          width: 100%;
          padding: 10px;
          border-radius: $radius;
          ul {
            display: flex;
            justify-content: space-between;
            align-items: center;
            text-align: center;
            width: 100%;
            li {
              font-size: 22px;
              color: #fff;
            }
          }
        }
        .priceInfoMenuDetail {
          width: 100%;
          padding: 6px;
          border-radius: $radius;
          ul {
            display: flex;
            justify-content: space-between;
            align-items: center;
            width: 100%;
            padding-top: 2.5%;
            // padding-right: 8%;
            .leftTumMore1 {
              padding-left: 7.2%;
            }
            .leftTumMore2 {
              padding-right: 8.8%;
            }
            .middleTumMore {
              padding-right: 7.8%;
            }
            li {
              font-size: 22px;
            }
          }
        }
      }
    }
    .luggagePlus {
      display: none;
    }
  }
}
.infowrap {
  display: flex;
  text-align: center;
  justify-content: space-between;
  .left {
    display: flex;
    flex-direction: column;
    text-align: center;
    justify-content: center;
    align-items: center;
  }
  .leftTum1 {
    color: #333333;
    font-size: 25px;
  }
  .leftbottum {
    color: #8f8f8f;
    font-size: 18px;
  }
}
.small {
  font-size: 18px;
}
// 무인보관함 위치안내
.container3 {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
}

.container4 {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  // 유의사항 왼쪽
  .contain3Left {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    .yongdal {
      width: 100%;
      img {
        width: 100%;
      }
    }
    p {
      font-size: 20px;
      font-weight: bold;
    }
  }
  // 유의사항 오른쪽
  .contain3Right {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    .noteTop {
      margin-top: 30px;

      .notice1 {
        .indent {
          display: inline-block;
          padding-left: 1em; /* 또는 margin-left: 1em; */
        }
        li {
          line-height: 30px;
          font-size: 17px;
        }
      }
    }
    .noteDown1 {
      width: 70%;
      margin-top: 1%;
      background-color: #fed4d4;
      border-radius: $radius;
      border: #f60000 1px solid;
      padding: 2% 2% 2% 2%;
      .noticeSubtitle {
        font-size: 17px;
        font-weight: bold;
        padding-bottom: 5px;
      }

      .notice2 {
        li {
          line-height: 22px;
          font-size: 15px;
          .stron1 {
            display: inline;
            font-weight: bold;
            color: #ff0000;
          }
        }
      }
    }
    .noticeButton button {
      background-color: #a8a8a8;
      border: none;
      border-radius: $radius;
      padding: 7px 12px 7px 12px;
      color: #fff;
      font-size: 15px;
      margin-top: 30px;
      cursor: pointer;
      font-weight: bold;
    }
    .noteDown2 {
      width: 70%;
      background-color: #fff3cd;
      border-radius: $radius;
      border: $border-line;
      padding: 2% 2% 2% 2%;

      .noticeSubtitle {
        font-size: 17px;
        font-weight: bold;
        padding-bottom: 10px;
        padding-left: 3%;
      }

      .notice2 {
        li {
          line-height: 22px;
          font-size: 15px;
          .Strong2 {
            font-weight: bold;
            display: inline-block;
            color: #f60000;
          }
        }
      }
    }
  }
}

// 유의사항2
/* Step 4 전용 래퍼를 기존 .inner 처럼 동작하게 만들기 */
:deep(.container5 .innerBottom) {
  max-width: 1100px !important;
  margin: 0 auto !important;
  width: 100% !important;
}

/* 그 안의 notice 컨텐츠도 100% 폭으로 */
:deep(.container5 .container4Bg .notice) {
  box-sizing: border-box !important;
  width: 100% !important;
  padding: 20px 40px !important;
  color: #5a5a5a !important;
}
.container5 {
  background-color: #fff;
  padding-bottom: 60px;
  max-width: 1100px !important;
  width: 100% !important;
  .innerBottom {
    max-width: 1100px !important;
    width: 100% !important;
    margin: 0 auto;
  }
  .container4Bg {
    max-width: 1100px !important;
    width: 100% !important;
    background-color: #ffffff;
  }
}
.notice {
  box-sizing: border-box;
  width: 100% !important;
  max-width: 1100px !important;
  color: #5a5a5a;
  padding: 20px 40px;
  h3 {
    font-size: 22px;
    padding-bottom: 12px;
    font-weight: bold;
    color: #000;
  }
  p {
    padding-bottom: 20px;
    font-size: 17.5px;
  }
  li {
    padding-bottom: 15px;
    font-size: 17.5px;
  }
  ._bbTum {
    padding-top: 10px;
  }
}
</style>
