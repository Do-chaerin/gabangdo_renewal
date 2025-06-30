<script setup></script>

<template>
  <div class="accoutNrefundexplain">
    <p>
      <span>1. 계좌이체 안내</span>
      <br />입금 계좌 정보 :<br />
      <span class="accCard">대구은행 123-456-78910 가방도 도용달</span>
      <br />입금 시 유의사항 : <br />입금자명과 주문자명이 다를 경우 반드시
      고객센터로 연락바랍니다. <br />입금 확인은 최대 1시간 내에 처리됩니다.
      <br /><br /><span>2. 카드 결제 안내</span> <br />사용 가능한 카드 :
      <br />VISA, Mastercard, AMEX, 국내 신용/체크카드 전부 가능 <br />할부 안내
      5만원 이상 결제 시, 2~3개월 무이자 할부 가능 (일부 카드사 제외) <br />결제
      실패 시 확인 사항 : 카드 한도 초과 여부 / 카드사 승인 문자 / 인터넷 결제
      차단 여부 확인

      <br /><br /><span>3. 카드사 간편앱 결제 안내</span> <br />지원하는 카드사
      간편결제 앱:<br />
      삼성페이, 네이버페이, 카카오페이, 페이코, L.pay 등
      <br />결제 방법 결제 단계에서 원하는 간편결제 앱 선택 본인 인증 후 결제
      진행 결제 완료 후 주문 확인바랍니다. <br />유의사항:<br />
      일부 간편결제 앱은 특정카드사만 지원됩니다. <br />결제 실패 시, 앱 내 카드
      등록 상태를 확인바랍니다. <br /><br /><span>4. 기타 결제 관련 문의</span
      ><br />
      고객센터: 1234-5678 <br />(운영시간: 평일 09:00~18:00) <br />카카오톡
      상담: @○○○ <br />(고객센터 운영시간내 문의 가능)
    </p>
  </div>
</template>

<style lang="scss" scoped>
@use "sass:color";
@use "@/assets/Main.scss" as *;
@use "@/assets/Variables.scss" as *;

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
