<script setup></script>

<template>
  <div class="notice">
    <p>1. 계좌이체 안내</p>
    <h1>입금 계좌 정보&nbsp;:&nbsp;대구은행 123-456-78910 가방도 도용달</h1>
    <span
      >입금 시 유의사항&nbsp;:&nbsp;입금자명과 주문자명이 다를 경우 반드시
      고객센터로 연락바랍니다. <br />입금 확인은 최대 1시간 내에
      처리됩니다.</span
    >
    <p>2. 카드 결제 안내</p>
    <span
      >사용 가능한 카드&nbsp;:&nbsp;VISA, Mastercard, AMEX, 국내 신용/체크카드
      전부 가능 <br />할부 안내&nbsp;:&nbsp;5만원 이상 결제 시, 2~3개월 무이자
      할부 가능 (일부 카드사 제외) <br />결제 실패 시 확인 사항&nbsp;:&nbsp;카드
      한도 초과 여부 / 카드사 승인 문자 / 인터넷 결제 차단 여부 확인
    </span>
    <p>3. 카드사 간편앱 결제 안내</p>
    <span
      >지원하는 카드사 간편결제 앱: 삼성페이, 네이버페이, 카카오페이, 페이코,
      L.pay 등 <br />결제 방법&nbsp;:&nbsp;결제 단계에서 원하는 간편결제 앱 선택
      본인 인증 후 결제 진행 결제 완료 후 주문 확인바랍니다.<br />
      유의사항&nbsp;:&nbsp;일부 간편결제 앱은 특정카드사만 지원됩니다. 결제 실패
      시, 앱 내 카드 등록 상태를 확인바랍니다.</span
    >
    <p>4. 기타 결제 관련 문의</p>
    <span
      >고객센터&nbsp;:&nbsp;1234-5678 (운영시간: 평일 09:00~18:00)<br />카카오톡
      상담&nbsp;:&nbsp;@○○○ (고객센터 운영시간내 문의 가능)</span
    >
  </div>
</template>

<style lang="scss" scoped>
@use "sass:color";
@use "@/assets/Main.scss" as *;
@use "@/assets/Variables.scss" as *;

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
  h1 {
    font-size: 18px;
    color: #ff0000;
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
