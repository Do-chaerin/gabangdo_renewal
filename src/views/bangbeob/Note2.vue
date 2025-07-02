<script setup></script>

<template>
  <!-- 유의사항 -->
  <div class="notice">
    <p>◾&nbsp;기본 보상 제공&nbsp;◾</p>
    <span>
      서비스 이용 중 가방이 분실되거나 심각한 손상이 발생한 경우, 최대 30만
      원까지 보상됩니다.
    </span>
    <p>◾&nbsp;추가 보장 옵션 (선택 사항)&nbsp;◾</p>
    <span>
      고객이 추가 보험 옵션을 선택할 경우, 기본 보상 외 추가 금액 보장
      가능합니다. (상세 조건은 보험 상품에 따라 다름)
    </span>
    <p>◾&nbsp;보험 적용 제외 사항&nbsp;◾</p>
    <span
      >고객의 부주의로 인해 발생한 분실 또는 손상<br />
      가방 내부 물품의 파손, 분실 (가방 자체가 아닌 내용물 손상은 보상 불가)
    </span>
    <p>◾&nbsp;안전한 운송 시스템&nbsp;◾</p>
    <span>
      모든 가방은 철저하게 관리되며, 실시간 추적을 통해 더욱 안전하게 보관 및
      배송됩니다.
    </span>
  </div>
</template>

<style lang="scss" scoped>
@use "sass:color";
@use "/src/assets/Main.scss" as *;
@use "/src/assets/Variables.scss" as *;

// 유의사항
.notice {
  max-width: 1000px;
  width: 90%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  background-color: #def6ff;
  border-radius: $radius;
  padding: 50px;
  p {
    font-weight: bold;
    font-size: 20px;
    padding-bottom: 10px;
  }
  span {
    font-size: 17px;
    padding-bottom: 20px;
  }
  span:last-child {
    padding: 0px;
  }
}
</style>
