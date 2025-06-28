<script setup>
import { ref, watch, nextTick } from "vue";
// 탭키 내용
const activeTab = ref("subway");
const swiperSubway = ref(null);
const swiperTrain = ref(null);
const swiperAirport = ref(null);
// 제목
const sTitle = [
  "대구지하철 1호선",
  "대구지하철 2호선",
  "대구 기차역",
  "대구 국제공항",
];
// 소제목
const sSubTitle = ["장소", "위치", "보관함 수"];
// 내용들
// 지하철1호선 1번째
const storageData1 = ref([
  { station: "반월당역", location: "1호선출구 14-2번", count: 38 },
  { station: "중앙로역 A", location: "1번 출구 방향 지하1층", count: 14 },
  { station: "중앙로역 B", location: "대한프라임빌딩 계단 밑", count: 14 },
  { station: "중앙로역 D", location: "육상사거리 옆", count: 29 },
  { station: "중앙로역 E", location: "지하1층 3번 출구", count: 14 },
  { station: "중앙로역 F", location: "지하1층 반곡 공구", count: 34 },
  { station: "대구역", location: "GS25 옆", count: 14 },
  { station: "봉산시장역", location: "과일 가게 옆 출구", count: 7 },
  { station: "신남역", location: "화장실 옆 1,2번 출구", count: 14 },
  { station: "동대구역 A", location: "다이소 옆벽면", count: 14 },
]);
// 지하철1호선 2번째
const storageData2 = ref([
  { station: "동대구역 B", location: "다이소 오픈편", count: 14 },
  { station: "동대구역쇼룸 A", location: "1번출구방향", count: 29 },
  { station: "동대구역쇼룸 B", location: "1번출구방향", count: 26 },
  { station: "중구청역", location: "쓰리야삼겹 옆 2,3번출구", count: 36 },
  { station: "이월드역", location: "육삼냉면 1,4번 출구", count: 38 },
  { station: "반고개역", location: "육삼냉면 2,3번 출구", count: 38 },
  { station: "한성미술학원", location: "1,2번 출구 방향", count: 38 },
]);
// 지하철2호선 1번째
const storageData3 = ref([
  { station: "범어네거리 A", location: "지하3층 만남의 광장", count: 34 },
  { station: "범어네거리 B", location: "A에 보이면", count: 36 },
  { station: "범어네거리 C", location: "지하3층 14-1번 방향", count: 47 },
  { station: "경대병원역", location: "2,3 이마트 2층", count: 14 },
  { station: "대구은행역", location: "1,4번 출구 방향", count: 14 },
  { station: "범어역", location: "에스에스패션 앞", count: 14 },
  { station: "수성구청역", location: "1,4번 출구 방향", count: 14 },
  { station: "만촌역", location: "1,4번 출구 방향", count: 14 },
  { station: "대공원역", location: "2,3번 출구 방향", count: 41 },
  { station: "신매역", location: "1,7번 출구 방향", count: 14 },
]);
// 지하철2호선 2번째
const storageData4 = ref([
  { station: "사월역", location: "2번 출구 방향", count: 14 },
  { station: "염산역(임시칭)", location: "3,4번 출구 방향", count: 7 },
  { station: "범어역 C", location: "지하3층 14-1번 방향", count: 47 },
  { station: "경대병원역", location: "2,3 이마트 2층", count: 14 },
  { station: "대구은행역", location: "1,4번 출구 방향", count: 14 },
  { station: "범어역", location: "역시그렇게 나와있음", count: 14 },
  { station: "수성구청역", location: "1,4번 출구 방향", count: 14 },
  { station: "만촌역", location: "1,4번 출구 방향", count: 14 },
  { station: "대공원역", location: "2,3번 출구 방향", count: 14 },
  { station: "신매역", location: "1,7번 출구 방향", count: 14 },
]);
// 대구 기차역
const storageData5 = ref([
  { station: "대구역", location: "1층 화장실 옆", count: 40 },
  { station: "동대구역", location: "마트소 앞", count: 40 },
  { station: "서대구역", location: "편의점 맞은편", count: 30 },
]);
// 대구 공항
const storageData6 = ref([
  {
    station: "대구 국제공항",
    location: `대구국제공항 입국장
근처 사물함<br/>(도착층)`,
    count: 60,
  },
]);

// 스와이퍼 사용
import { Swiper, SwiperSlide } from "swiper/vue";
import { Pagination } from "swiper/modules";

// Swiper 스타일
import "swiper/css";
import "swiper/css/pagination";
// 탭 전환 시 해당 Swiper만 업데이트 & 맨 앞으로
watch(activeTab, () => {
  nextTick(() => {
    let inst;
    if (activeTab.value === "subway") inst = swiperSubway.value?.swiper;
    if (activeTab.value === "train") inst = swiperTrain.value?.swiper;
    if (activeTab.value === "airport") inst = swiperAirport.value?.swiper;
    inst?.update();
    inst?.slideTo(0);
  });
});
</script>

<template>
  <div class="tabwrap">
    <div class="slideTable">
      <!-- 탭키 -->
      <div class="Stores">
        <div class="buttonBorder">
          <!-- 지하철버튼 -->
          <button
            @click="activeTab = 'subway'"
            :class="{ active: activeTab === 'subway' }"
          >
            지하철
          </button>
          <!-- 기차역버튼 -->
          <button
            @click="activeTab = 'train'"
            :class="{ active: activeTab === 'train' }"
          >
            기차역
          </button>
          <!-- 공항버튼 -->
          <button
            @click="activeTab = 'airport'"
            :class="{ active: activeTab === 'airport' }"
          >
            공항
          </button>
        </div>
      </div>
      <!-- 테이블 내용 -->
      <div class="StoreContents">
        <!-- 탭1 / 자하철 -->
        <div class="subwayContent" v-show="activeTab === `subway`">
          <Swiper
            ref="swiperSubway"
            :modules="[Pagination]"
            :pagination="{ clickable: true }"
            :slides-per-view="1"
            :space-between="30"
            class="mySwiper"
          >
            <!-- 슬라이드1 / 지하철1호선 -->
            <SwiperSlide>
              <div class="slide">
                <h1 class="tabTitle1">{{ sTitle[0] }}</h1>
                <table class="tabContent">
                  <thead class="subtitle">
                    <tr>
                      <th
                        v-for="(subtitle, idx) in sSubTitle"
                        :key="idx"
                        class="contentTitle"
                      >
                        {{ subtitle }}
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr
                      class="contentS"
                      v-for="(item, i) in storageData1"
                      :key="i"
                    >
                      <td>
                        <div class="cell">{{ item.station }}</div>
                      </td>
                      <td>
                        <div class="cell">{{ item.location }}</div>
                      </td>
                      <td>
                        <div class="cell">{{ item.count }}</div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </SwiperSlide>
            <!-- 슬라이드2 / 지하철1호선 -->
            <SwiperSlide>
              <div class="slide">
                <h1 class="tabTitle1">{{ sTitle[0] }}</h1>
                <table class="tabContent">
                  <thead class="subtitle">
                    <tr>
                      <th
                        v-for="(subtitle, idx) in sSubTitle"
                        :key="idx"
                        class="contentTitle"
                      >
                        {{ subtitle }}
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr
                      class="contentS"
                      v-for="(item, i) in storageData2"
                      :key="i"
                    >
                      <td>
                        <div class="cell">{{ item.station }}</div>
                      </td>
                      <td>
                        <div class="cell">{{ item.location }}</div>
                      </td>
                      <td>
                        <div class="cell">{{ item.count }}</div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </SwiperSlide>
            <!-- 슬라이드3 / 지하철2호선 -->
            <SwiperSlide>
              <div class="slide">
                <h1 class="tabTitle2">{{ sTitle[1] }}</h1>
                <table class="tabContent">
                  <thead class="subtitle">
                    <tr>
                      <th
                        v-for="(subtitle, idx) in sSubTitle"
                        :key="idx"
                        class="contentTitle"
                      >
                        {{ subtitle }}
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr
                      class="contentS"
                      v-for="(item, i) in storageData3"
                      :key="i"
                    >
                      <td>
                        <div class="cell">{{ item.station }}</div>
                      </td>
                      <td>
                        <div class="cell">{{ item.location }}</div>
                      </td>
                      <td>
                        <div class="cell">{{ item.count }}</div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </SwiperSlide>
            <!-- 슬라이드4 / 지하철2호선 -->
            <SwiperSlide>
              <div class="slide">
                <h1 class="tabTitle2">{{ sTitle[1] }}</h1>
                <table class="tabContent">
                  <thead class="subtitle">
                    <tr>
                      <th
                        v-for="(subtitle, idx) in sSubTitle"
                        :key="idx"
                        class="contentTitle"
                      >
                        {{ subtitle }}
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr
                      class="contentS"
                      v-for="(item, i) in storageData4"
                      :key="i"
                    >
                      <td>
                        <div class="cell">{{ item.station }}</div>
                      </td>
                      <td>
                        <div class="cell">{{ item.location }}</div>
                      </td>
                      <td>
                        <div class="cell">{{ item.count }}</div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
        <!-- 탭2 / 기차 -->
        <div class="trainContent" v-show="activeTab === `train`">
          <Swiper
            ref="swiperTrain"
            :modules="[Pagination]"
            :pagination="{ clickable: true }"
            :slides-per-view="1"
            :space-between="30"
            class="mySwiper"
          >
            <!-- 슬라이드1 / 기차-->
            <SwiperSlide>
              <div class="slide">
                <h1 class="tabTitle3">{{ sTitle[2] }}</h1>
                <table class="tabContent">
                  <thead class="subtitle">
                    <tr>
                      <th
                        v-for="(subtitle, idx) in sSubTitle"
                        :key="idx"
                        class="contentTitle"
                      >
                        {{ subtitle }}
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr
                      class="contentS"
                      v-for="(item, i) in storageData5"
                      :key="i"
                    >
                      <td>
                        <div class="cell">{{ item.station }}</div>
                      </td>
                      <td>
                        <div class="cell">{{ item.location }}</div>
                      </td>
                      <td>
                        <div class="cell">{{ item.count }}</div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
        <!-- 탭3 / 공항 -->
        <div class="trainContent" v-show="activeTab === `airport`">
          <Swiper
            ref="swiperAirport"
            :modules="[Pagination]"
            :pagination="{ clickable: true }"
            :slides-per-view="1"
            :space-between="30"
            class="mySwiper"
          >
            <!-- 슬라이드1 / 공항-->
            <SwiperSlide>
              <div class="slide">
                <h1 class="tabTitle4">{{ sTitle[3] }}</h1>
                <table class="tabContent">
                  <thead class="subtitle">
                    <tr>
                      <th
                        v-for="(subtitle, idx) in sSubTitle"
                        :key="idx"
                        class="contentTitle"
                      >
                        {{ subtitle }}
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr
                      class="contentS"
                      v-for="(item, i) in storageData6"
                      :key="i"
                    >
                      <td>
                        <div class="cell">{{ item.station }}</div>
                      </td>
                      <td>
                        <div class="cell" v-html="item.location"></div>
                      </td>
                      <td>
                        <div class="cell">{{ item.count }}</div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@use "sass:color";
@use "/src/assets/Main.scss" as *;
@use "/src/assets/Variables.scss" as *;

// 전체
.tabwrap {
  display: flex;
  justify-content: center;
  width: 90%;
  max-width: 1000px;
  margin: 0 auto;
}
.StoreContents {
  width: 100% !important; // 내부 컨텐츠 영역도 100%
}
// 테이블
.slideTable {
  position: relative;
  background-color: #fff;
  border: $border-line;
  border-radius: $radius;
  overflow: hidden;
  width: 100%;
}
// 탭키
.Stores {
  position: relative;
  width: 100%;
  background-color: $main-color;
  border-radius: $radius 0 0;
  padding: 15px;
  display: flex;
  text-align: center;
  justify-content: center;
  .buttonBorder {
    background-color: #fff;
    height: auto;
    width: 30%;
    padding: 5px;
    border-radius: 50px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    button {
      background-color: #fff;
      color: #000000;
      border-radius: 25px;
      text-align: center;
      border: none;
      padding: 10px 15px;
      cursor: pointer;
      font-size: 20px;
      font-weight: bold;
    }
    button.active {
      background-color: $main-color;
      color: #fff;
    }
    button.hover {
      background-color: $main-color;
      color: #fff;
    }
  }
}
// 슬라이드 내용
.slide {
  display: flex;
  flex-direction: column;
  text-align: center;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: 25px 20px;
  // 슬라이드 타이틀
  .tabTitle1 {
    font-size: 26px;
    color: #ff5c00;
    font-weight: bold;
  }
  .tabTitle2 {
    font-size: 26px;
    color: #159817;
    font-weight: bold;
  }
  .tabTitle3 {
    font-size: 26px;
    color: #0066b3;
    font-weight: bold;
  }
  .tabTitle4 {
    font-size: 26px;
    color: #2aaae2;
    font-weight: bold;
  }
  // 슬라이드 컨텐츠
  .tabContent {
    width: 100%;
    border-collapse: separate;
    border-spacing: 0 15px;
    table-layout: fixed;
    .contentTitle {
      font-size: 20px;
      font-weight: bold;
      padding: 10px 0;
    }
    // 3등분
    td {
      width: 33.33%;
    }
    th {
      width: 33.33%;
    }
  }
}

// 스와이퍼css
#app {
  height: 100%;
}
html,
body {
  position: relative;
  height: 100%;
}
body {
  background: #eee;
  font-family: Helvetica Neue, Helvetica, Arial, sans-serif;
  font-size: 14px;
  color: #000;
  margin: 0;
  padding: 0;
}
.swiper {
  width: 100%;
  height: 100%;
}
.swiper-slide {
  font-size: 18px;
  background: #fff;
}
.swiper-slide img {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.mySwiper {
  .swiper-wrapper {
    width: 100% !important;
    .swiper-slide {
      width: 100% !important;
    }
  }
}
</style>
