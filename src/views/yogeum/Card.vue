<script setup></script>

<template>
  <div class="cardtotal">
    <!-- 메인 컨텐츠1 전체영역 -->
    <div class="card_wrap">
      <!-- s사이즈 -->
      <div class="card">
        <!-- 사이즈 섹션 상단 설명 -->
        <div class="cardtop">
          <h2>S 사이즈</h2>
          <h4>기내용 캐리어,소형 배낭 등</h4>
          <h5>21인치이하/55cm이하/10kg미만</h5>
        </div>
        <img src="/images/gh/ma_content1/s_size.png" />
        <!-- 당일예약시 -->
        <div class="carbottum1">
          <h4>당일예약</h4>
          <h2>12,000원</h2>
        </div>
        <!-- 사전예약시 -->
        <div class="cardbottum2">
          <h5>사전예약시 10,000원</h5>
        </div>
      </div>
      <!-- m사이즈 -->
      <div class="card">
        <!-- 사이즈 섹션 상단 설명 -->
        <div class="cardtop">
          <h2>M 사이즈</h2>
          <h4>화물용 캐리어, 등산 가방 등</h4>
          <h5>25인치이하/65cm이하/20kg미만</h5>
        </div>
        <!-- 아이콘 -->
        <img src="/images/gh/ma_content1/m_size.png" />
        <!-- 당일예약시 -->
        <div class="cardbottum1">
          <h4>당일예약</h4>
          <h2>16,000원</h2>
        </div>
        <!-- 사전예약시 -->
        <div class="cardbottum2">
          <h5>사전예약시 14,000원</h5>
        </div>
      </div>
      <!-- l사이즈 -->
      <div class="card">
        <!-- 사이즈 섹션 상단 설명 -->
        <div class="cardtop">
          <h2>L 사이즈</h2>
          <h4>대형 캐리어, 배낭, 골프백 등</h4>
          <h5>26인치이상/66cm이상/30kg미만</h5>
        </div>
        <img src="/images/gh/ma_content1/l-size.png" />
        <!-- 당일예약시 -->
        <div class="cardbottum1">
          <h4>당일예약</h4>
          <h2>18,000원</h2>
        </div>
        <!-- 사전예약시 -->
        <div class="cardbottum2">
          <h5>사전예약시 16,000원</h5>
        </div>
      </div>
      <!-- ?사이즈 -->
      <div class="card">
        <!-- 사이즈 섹션 상단 설명 -->
        <div class="cardtop">
          <h2>? 사이즈</h2>
          <h4>기타 물품 및 표시 외 사이즈</h4>
          <h5>가방도 문의 후 협의된 물품에 한함</h5>
        </div>
        <img src="/images/gh/ma_content1/size.png" />
        <!-- 카카오톡 문의 -->
        <div class="cardbottum3">
          <h2>카카오톡 문의</h2>
        </div>
      </div>
    </div>
    <div class="infoWrapper">
      <!-- 알림 왼쪽(할인) -->
      <div class="leftInfo">
        <p>2개 이상 예약시부터 1,000원씩 추가할인 무한적용</p>
        <p>(3개 예약시 2,000원 / 4개 예약시 3,000원 할인)</p>
      </div>
      <!-- 알림 오른쪽(주의사항) -->
      <div class="rightInfocaution">
        <a href="#">추가요금 발생지역 > </a>
        <p>
          <img src="/images/geen/caution_icon.png" alt="주의표시" />수하물
          개당요금
        </p>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@use "sass:color";
@use "@/assets/Main.scss" as *;
@use "@/assets/Variables.scss" as *;

.card_wrap {
  max-width: 1000px;
  width: 90%;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  gap: 15px;
}
// 카드테두리
.card {
  border: $border-line;
  border-radius: $radius;
  width: 215px;
  padding: 15px;
  display: flex;
  flex-direction: column;
  justify-content: center;
}
.cardtop {
  display: flex;
  flex-direction: column;
  text-align: center;
  h2 {
    font-size: 23px;
    font-weight: bold;
    color: $main-color;
  }
  h4 {
    font-size: 16px;
  }
  h5 {
    font-size: 13px;
  }
}
</style>
