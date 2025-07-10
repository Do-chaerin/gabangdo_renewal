<script>
import { ref } from "vue";
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from "swiper/vue";

// Import Swiper styles
import "swiper/css";
import "swiper/css/scrollbar";
import "swiper/css/navigation";

// import required modules
import { Autoplay, Pagination, Navigation, Scrollbar } from "swiper/modules";

const modules = [Autoplay, Pagination, Navigation, Scrollbar];

export default {
  components: {
    Swiper,
    SwiperSlide,
  },
  setup() {
    const progressCircle = ref(null);
    const progressContent = ref(null);
    const onAutoplayTimeLeft = (s, time, progress) => {
      progressCircle.value.style.setProperty("--progress", 1 - progress);
      progressContent.value.textContent = `${Math.ceil(time / 1000)}s`;
    };
    return {
      onAutoplayTimeLeft,
      progressCircle,
      progressContent,
      modules: [Autoplay, Pagination, Navigation, Scrollbar],
    };
  },
};
</script>

<template>
  <div class="yh_wrap">
    <swiper
      :loop="true"
      :scrollbar="{
        hide: true,
      }"
      :slides-Per-View="'auto'"
      :spaceBetween="10"
      :centeredSlides="true"
      :autoplay="{
        delay: 5000,
        disableOnInteraction: false,
      }"
      :pagination="{
        clickable: true,
      }"
      :navigation="true"
      :modules="modules"
      @autoplayTimeLeft="onAutoplayTimeLeft"
      class="mySwiper"
    >
      <swiper-slide
        ><h4>군위시장투어</h4>
        <a
          href="https://www.daegucitytour.com/bbs/page.php?hid=tour_5_1"
          target="_blank"
          ><img
            src="/images/geen/1/KakaoTalk_20250410_194237551_02.jpg"
            alt="군위전통시장투어" /></a
      ></swiper-slide>
      <swiper-slide
        ><h4>현풍도깨비시장투어</h4>
        <a
          href="https://www.daegucitytour.com/bbs/page.php?hid=tour_5_1"
          target="_blank"
          ><img
            src="/images/geen/1/KakaoTalk_20250410_194237551_03.jpg"
            alt="현풍전통시장투어" /></a
      ></swiper-slide>
      <swiper-slide
        ><h4>사시사철투어</h4>
        <a
          href="https://www.daegucitytour.com/bbs/page.php?hid=tour_4"
          target="_blank"
          ><img
            src="/images/geen/1/KakaoTalk_20250410_194237551_04.jpg"
            alt="사시사철투어" /></a
      ></swiper-slide>
      <swiper-slide
        ><h4>낙동강투어</h4>
        <a
          href="https://www.daegucitytour.com/bbs/page.php?hid=tour_3"
          target="_blank"
          ><img
            src="/images/geen/1/KakaoTalk_20250410_194237551_05.jpg"
            alt="낙동강투어" /></a
      ></swiper-slide>
      <swiper-slide
        ><h4>군위군돋보기투어</h4>
        <a
          href="https://www.daegucitytour.com/bbs/page.php?hid=tour_2"
          target="_blank"
          ><img
            src="/images/geen/1/KakaoTalk_20250410_194237551_06.jpg"
            alt="군위군돋보기투어" /></a
      ></swiper-slide>
      <swiper-slide
        ><h4>팔공산투어</h4>
        <a
          href="https://www.daegucitytour.com/bbs/page.php?hid=tour_1"
          target="_blank"
          ><img
            src="/images/geen/1/KakaoTalk_20250410_194237551_07.jpg"
            alt="팔공산투어" /></a
      ></swiper-slide>
      <swiper-slide
        ><h4>야경투어</h4>
        <a href="https://www.daegucitytour.com/bbs/page.php?hid=tour_6"
          ><img
            src="/images/geen/1/KakaoTalk_20250410_194237551_01.jpg"
            alt="야경투어" /></a
      ></swiper-slide>
      <template #container-end>
        <div class="autoplay-progress">
          <svg viewBox="0 0 48 48" ref="progressCircle">
            <circle cx="24" cy="24" r="20"></circle>
          </svg>
          <span ref="progressContent"></span>
        </div>
      </template>
    </swiper>
  </div>
</template>

<style lang="scss" scoped>
@use "sass:color";
@use "/src/assets/Main.scss" as *;
@use "/src/assets/Variables.scss" as *;

.yh_wrap {
  max-width: 1000px;
  width: 90%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin: 0 auto;
}
h4 {
  margin: 10px 0;
  font-family: $font-ownglyph;
  font-size: 25px;
  color: $main-color;
}
.swiper-slide {
  width: 100% !important;
  height: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  a {
    width: 90%;
    max-width: 1000px;
    height: 100%;
  }
  img {
    height: auto;
    object-fit: cover; // 또는 contain
    border-radius: $radius;
    margin-top: 20px;
    margin-bottom: 20px;
  }
}
:deep(.swiper-slide) {
  width: auto !important;
}
:deep(.swiper),
:deep(.swiper-wrapper) {
  overflow: visible !important;
}
.autoplay-progress {
  display: none;
}
:deep(.swiper-pagination) {
  display: none !important ;
}
:deep(.swiper-slide > img) {
  margin: 0 !important;
}
:deep(.swiper-button-prev) {
  color: #ee2b2b;
}
:deep(.swiper-button-prev::after) {
  font-size: 25px;
}
:deep(.swiper-button-next) {
  color: #ee2b2b;
}
:deep(.swiper-button-next::after) {
  font-size: 25px;
}
:deep(.swiper-button-next),
:deep(.swiper-button-prev) {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  width: 50px;
  height: 50px;
  background-color: rgba(255, 255, 255, 0.5);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 10;
}
:deep(.swiper-button-next) {
  right: 50px;
}
:deep(.swiper-button-prev) {
  left: 50px;
}
:deep(.swiper-scrollbar) {
  width: 50% !important;
  margin: 0 auto !important;
  position: relative;
  box-sizing: content-box;
}
:deep(.swiper-scrollbar-drag) {
  background-color: #ee2b2b !important;
  max-width: 100% !important;
  box-sizing: border-box;
}
</style>
