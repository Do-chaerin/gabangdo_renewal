<template>
  <div class="storage-table">
    <!-- 탭 버튼들 -->
    <div class="storage-tabs">
      <div class="button-border">
        <button
          @click="switchTab('subway')"
          :class="{ active: activeTab === 'subway' }">
          지하철
        </button>
        <button
          @click="switchTab('train')"
          :class="{ active: activeTab === 'train' }">
          기차역
        </button>
        <button
          @click="switchTab('airport')"
          :class="{ active: activeTab === 'airport' }">
          공항
        </button>
      </div>
    </div>

    <!-- 테이블 내용 -->
    <div class="storage-contents">
      <!-- 지하철 탭 -->
      <div v-show="activeTab === 'subway'" class="content-section">
        <Swiper
          ref="swiperRef"
          :modules="[Pagination]"
          :pagination="{ clickable: true }"
          :slides-per-view="1"
          :space-between="30"
          :observer="true"
          :observe-parents="true"
          class="custom-swiper">
          <SwiperSlide>
            <div class="slide-content">
              <h1 class="tab-title tab-title-1">{{ tabsTitle[0] }}</h1>
              <table class="content-table">
                <thead class="table-header">
                  <tr>
                    <th v-for="(subtitle, idx) in tabsSubTitle" :key="idx">
                      {{ subtitle }}
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr
                    v-for="(item, i) in storageData"
                    :key="i"
                    class="table-row">
                    <td>
                      <div class="table-cell">{{ item.station }}</div>
                    </td>
                    <td>
                      <div class="table-cell">{{ item.location }}</div>
                    </td>
                    <td>
                      <div class="table-cell">{{ item.count }}</div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div class="slide-content">
              <h1 class="tab-title tab-title-1">{{ tabsTitle[0] }}</h1>
              <table class="content-table">
                <thead class="table-header">
                  <tr>
                    <th v-for="(subtitle, idx) in tabsSubTitle" :key="idx">
                      {{ subtitle }}
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr
                    v-for="(item, i) in storageData2"
                    :key="i"
                    class="table-row">
                    <td>
                      <div class="table-cell">{{ item.station }}</div>
                    </td>
                    <td>
                      <div class="table-cell">{{ item.location }}</div>
                    </td>
                    <td>
                      <div class="table-cell">{{ item.count }}</div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div class="slide-content">
              <h1 class="tab-title tab-title-2">{{ tabsTitle[1] }}</h1>
              <table class="content-table">
                <thead class="table-header">
                  <tr>
                    <th v-for="(subtitle, idx) in tabsSubTitle" :key="idx">
                      {{ subtitle }}
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr
                    v-for="(item, i) in storageData3"
                    :key="i"
                    class="table-row">
                    <td>
                      <div class="table-cell">{{ item.station }}</div>
                    </td>
                    <td>
                      <div class="table-cell">{{ item.location }}</div>
                    </td>
                    <td>
                      <div class="table-cell">{{ item.count }}</div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div class="slide-content">
              <h1 class="tab-title tab-title-2">{{ tabsTitle[1] }}</h1>
              <table class="content-table">
                <thead class="table-header">
                  <tr>
                    <th v-for="(subtitle, idx) in tabsSubTitle" :key="idx">
                      {{ subtitle }}
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr
                    v-for="(item, i) in storageData4"
                    :key="i"
                    class="table-row">
                    <td>
                      <div class="table-cell">{{ item.station }}</div>
                    </td>
                    <td>
                      <div class="table-cell">{{ item.location }}</div>
                    </td>
                    <td>
                      <div class="table-cell">{{ item.count }}</div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>

      <!-- 기차역 탭 -->
      <div v-show="activeTab === 'train'" class="content-section">
        <Swiper
          :modules="[Pagination]"
          :pagination="{ clickable: true }"
          :slides-per-view="1"
          :space-between="30"
          class="custom-swiper">
          <SwiperSlide>
            <div class="slide-content">
              <h1 class="tab-title tab-title-3">{{ tabsTitle[2] }}</h1>
              <table class="content-table">
                <thead class="table-header">
                  <tr>
                    <th v-for="(subtitle, idx) in tabsSubTitle" :key="idx">
                      {{ subtitle }}
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr
                    v-for="(item, i) in storageData5"
                    :key="i"
                    class="table-row">
                    <td>
                      <div class="table-cell">{{ item.station }}</div>
                    </td>
                    <td>
                      <div class="table-cell">{{ item.location }}</div>
                    </td>
                    <td>
                      <div class="table-cell">{{ item.count }}</div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>

      <!-- 공항 탭 -->
      <div v-show="activeTab === 'airport'" class="content-section">
        <Swiper
          :modules="[Pagination]"
          :pagination="{ clickable: true }"
          :slides-per-view="1"
          :space-between="30"
          class="custom-swiper">
          <SwiperSlide>
            <div class="slide-content">
              <h1 class="tab-title tab-title-4">{{ tabsTitle[3] }}</h1>
              <table class="content-table">
                <thead class="table-header">
                  <tr>
                    <th v-for="(subtitle, idx) in tabsSubTitle" :key="idx">
                      {{ subtitle }}
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr
                    v-for="(item, i) in storageData6"
                    :key="i"
                    class="table-row">
                    <td>
                      <div class="table-cell">{{ item.station }}</div>
                    </td>
                    <td>
                      <div class="table-cell">{{ item.location }}</div>
                    </td>
                    <td>
                      <div class="table-cell">{{ item.count }}</div>
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
</template>

<script setup>
import { ref, nextTick } from "vue";
import { Swiper, SwiperSlide } from "swiper/vue";
import { Pagination } from "swiper/modules";

// Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// 반응형 상태
const activeTab = ref("subway");
const swiperRef = ref(null);

// 탭 제목
const tabsTitle = [
  "대구지하철 1호선",
  "대구지하철 2호선",
  "대구기차역",
  "대구국제공항",
];

// 소제목
const tabsSubTitle = ["장소", "위치", "보관함 수"];

// 데이터들
const storageData = ref([
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

const storageData2 = ref([
  { station: "동대구역 B", location: "다이소 오픈편", count: 14 },
  { station: "동대구역쇼룸 A", location: "1번출구방향", count: 29 },
  { station: "동대구역쇼룸 B", location: "1번출구방향", count: 26 },
  { station: "중구청역", location: "쓰리야삼겹 옆 2,3번출구", count: 36 },
  { station: "이월드역", location: "육삼냉면 1,4번 출구", count: 38 },
  { station: "반고역", location: "육삼냉면 2,3번 출구", count: 38 },
  { station: "한성미술학원", location: "1,2번 출구 방향", count: 38 },
]);

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

const storageData5 = ref([
  { station: "대구역", location: "1층 화장실 옆", count: 40 },
  { station: "동대구역", location: "마트소 앞", count: 40 },
  { station: "서대구역", location: "편의점 맞은편", count: 30 },
]);

const storageData6 = ref([
  {
    station: "대구 국제공항",
    location: "대구국제공항 입국장\n근처 사물함 (도착층)",
    count: 60,
  },
]);

// 탭 전환 함수
const switchTab = (tab) => {
  activeTab.value = tab;
  // Swiper 업데이트는 다음 렌더링 사이클에서 실행
  nextTick(() => {
    if (swiperRef.value && swiperRef.value.swiper) {
      swiperRef.value.swiper.update();
    }
  });
};
</script>

<style lang="scss" scoped>
@use "/src/assets/_Variables.scss" as *;

/* 커스텀 스타일 */
.storage-table {
  position: relative;
  width: 100%;
  min-width: 1000px; /* 최소 너비 고정 */
  background-color: #fff;
  border: $main-color 1px solid;
  border-radius: 20px;
  overflow: hidden;
}

.storage-tabs {
  position: relative;
  width: 100%;
  background-color: $main-color;
  border-radius: 20px 20px 0 0;
  padding: 1% 0;
  display: flex;
  text-align: center;
  justify-content: center;
  line-height: 30px;
  padding-left: 30%;
  justify-content: space-between;
}

.button-border {
  background-color: #fff;
  height: 60px;
  width: 65%;
  min-width: 400px; /* 버튼 컨테이너 최소 너비 고정 */
  border-radius: 50px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 10px;
}

.button-border button {
  background-color: #fff;
  color: #000000;
  border-radius: 50px;
  line-height: 30px;
  text-align: center;
  border: none;
  padding: 2% 10% 2% 10%;
  margin-top: 2%;
  margin-bottom: 2%;
  cursor: pointer;
  font-size: 18px;
  font-weight: bold;
  flex: 1; /* 버튼들이 동일한 크기를 가지도록 */
  margin: 0 5px;
  transition: all 0.2s ease;
}

.button-border button.active {
  background-color: $main-color;
  color: #fff;
}

.storage-contents {
  width: 100%;
  max-width: 1000px;
  min-height: 500px; /* 최소 높이 고정 */
  height: auto;
  text-align: center;
}

.content-section {
  width: 100%;
  height: 100%;
}

.slide-content {
  width: 100%;
  height: auto;
  padding: 15px;
  text-align: center;
}

.tab-title-1 {
  font-size: 26px;
  color: #ff5c00;
  font-weight: bold;
  padding-bottom: 5px;
  text-align: center;
}

.tab-title-2 {
  font-size: 26px;
  color: #159817;
  font-weight: bold;
  padding-bottom: 5px;
  text-align: center;
}

.tab-title-3 {
  font-size: 26px;
  color: #0066b3;
  font-weight: bold;
  padding-bottom: 5px;
  text-align: center;
}

.tab-title-4 {
  font-size: 26px;
  color: #2aaae2;
  font-weight: bold;
  padding-bottom: 5px;
  text-align: center;
}

.content-table {
  width: 100%;
  border-collapse: separate;
  border-spacing: 0 12px;
  text-align: center;
}

.table-header {
  font-size: 20px;
  font-weight: bold;
  padding-bottom: 5px;
  text-align: center;
}

.table-row {
  padding: 10px;
  text-align: center;
  border-radius: 5px;
}
tr,
th,
td {
  text-align: center;
}
.table-cell {
  display: flex;
  align-items: center; /* 수직 중앙 정렬 */
  justify-content: center; /* 가로 중앙 정렬 */
  height: 100%; /* td 높이에 꽉 차도록 */
}
.custom-swiper {
  width: 100%;
  height: 100%;
  min-height: 400px; /* Swiper 최소 높이 고정 */
}

:deep(.swiper-slide) {
  font-size: 18px;
  background: #fff;
  display: flex;
  justify-content: center;
  align-items: flex-start;
}
</style>
