<script setup></script>

<template>
  <div class="cardtotal">
    <!-- 메인 컨텐츠1 전체영역 -->
    <div class="card_wrap">
      <!-- S사이즈 -->
      <div class="card">
        <div class="cardtop">
          <h2>S 사이즈</h2>
          <h4>기내용 캐리어,소형 배낭 등</h4>
          <h5>21인치이하/55cm이하/10kg미만</h5>
        </div>
        <img src="/images/gh/ma_content1/s_size.png" />
        <div class="cardbottum1">
          <h4>당일예약시</h4>
          &nbsp;
          <h2>12,000원</h2>
          &nbsp;
        </div>
        <div class="cardbottum2">
          <h4>사전예약시</h4>
          &nbsp;
          <h2>10,000원</h2>
          &nbsp;
        </div>
      </div>
      <!-- M사이즈 -->
      <div class="card">
        <div class="cardtop">
          <h2>M 사이즈</h2>
          <h4>화물용 캐리어, 등산 가방 등</h4>
          <h5>25인치이하/65cm이하/20kg미만</h5>
        </div>
        <img src="/images/gh/ma_content1/m_size.png" />
        <div class="cardbottum1">
          <h4>당일예약시</h4>
          &nbsp;
          <h2>16,000원</h2>
          &nbsp;
        </div>
        <div class="cardbottum2">
          <h4>사전예약시</h4>
          &nbsp;
          <h2>14,000원</h2>
          &nbsp;
        </div>
      </div>
      <!-- L사이즈 -->
      <div class="card">
        <div class="cardtop">
          <h2>L 사이즈</h2>
          <h4>대형 캐리어, 배낭, 골프백 등</h4>
          <h5>26인치이상/66cm이상/30kg미만</h5>
        </div>
        <img src="/images/gh/ma_content1/l-size.png" />
        <div class="cardbottum1">
          <h4>당일예약시</h4>
          &nbsp;
          <h2>18,000원</h2>
        </div>
        <div class="cardbottum2">
          <h4>사전예약시</h4>
          &nbsp;
          <h2>16,000원</h2>
        </div>
      </div>
      <!-- ?사이즈 -->
      <div class="card">
        <div class="cardtop">
          <h2>? 사이즈</h2>
          <h4>기타 물품 및 표시 외 사이즈</h4>
          <h5>가방도 문의 후 협의된 물품에 한함</h5>
        </div>
        <img src="/images/gh/ma_content1/size.png" />
        <div class="cardbottum3">
          <h4>협의 후 가능</h4>
          <h2>가방도 문의</h2>
        </div>
      </div>
    </div>
    <div class="infowrapper">
      <!-- 알림 왼쪽(할인) -->
      <div class="leftinfo">
        <p>•&nbsp;2개 이상 예약시부터 1,000원씩 추가할인 무한적용</p>
        <p>(3개 예약시 2,000원 / 4개 예약시 3,000원 할인)</p>
      </div>
      <!-- 알림 오른쪽(주의사항) -->
      <div class="rightinfo">
        <p>추가요금 발생지역 ></p>
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
  padding: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  img {
    width: 75%;
    display: flex;
    justify-content: center;
    margin: 0 auto;
    padding: 20px 0;
  }
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
    color: #333333;
  }
  h5 {
    font-size: 14px;
    color: #666666;
  }
}
.cardbottum1 {
  display: flex;
  justify-content: flex-end;
  h4 {
    font-size: 18px;
    color: #555555;
  }
  h2 {
    font-size: 18px;
    color: #ff0000;
    font-weight: bold;
  }
}
.cardbottum2 {
  display: flex;
  justify-content: flex-end;
  h4 {
    font-size: 16px;
    color: #555555;
  }
  h2 {
    font-size: 16px;
    color: #0000ff;
    font-weight: bold;
  }
}
.cardbottum3 {
  display: flex;
  align-items: flex-end;
  flex-direction: column;
  h4 {
    font-size: 18px;
    color: #ff0000;
    font-weight: bold;
  }
  h2 {
    font-size: 16px;
    color: #0000ff;
    font-weight: bold;
  }
}
.infowrapper {
  max-width: 1000px;
  width: 90%;
  display: flex;
  justify-content: space-between;
  margin: 0 auto;
  padding-top: 10px;
  .leftinfo {
    color: #666666;
  }
  .rightinfo {
    p {
      display: flex;
      color: #1e6dff;
      font-weight: bolder;
    }
    img {
      width: 15%;
    }
  }
}
</style>
