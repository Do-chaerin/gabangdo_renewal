<script setup></script>

<template>
  <div class="infowrap">
    <div class="info">
      <img src="/images/cr/st_notice.png" alt="상담원" class="image" />
      <div class="details">
        <p class="phone">053-123-1234</p>
        <ul class="hours">
          <li>평일&nbsp;:&nbsp;09:00 – 18:00</li>
          <li>토요일&nbsp;:&nbsp;09:00 – 13:00</li>
          <li>일요일&nbsp;:&nbsp;휴무 (예약일정에 따라 변동)</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@use "sass:color";
@use "/src/assets/Main.scss" as *;
@use "/src/assets/Variables.scss" as *;

// 고객센터섹션
.infowrap {
  max-width: 1000px;
  width: 90%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin: 0 auto;
}
.info {
  display: flex;
}
.image {
  width: 200px;
  height: auto;
  object-fit: cover;
  margin-right: 10px;
}
.details {
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: left;
}
.phone {
  font-size: 30px;
  font-weight: bold;
  color: $dark-gray;
  margin-bottom: 20px;
}
.hours {
  list-style: none;
  padding: 0;
  margin: 0;
  color: #888888;
  gap: 20px;
}
.hours li {
  font-weight: bold;
  margin-bottom: 15px;
  font-size: 20px;
}
.hours li:last-child {
  margin-bottom: 0;
}
</style>
