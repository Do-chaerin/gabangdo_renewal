<script setup></script>

<template>
  <!-- 메인 컨텐츠1 전체영역 -->
  <div class="macontent1_wrap">
    <div class="macontent1_down">
      <!-- s사이즈 -->
      <div class="masize">
        <!-- 사이즈 섹션 상단 설명 -->
        <div class="masize_txt">
          <h2>S 사이즈</h2>
          <h4>기내용 캐리어,소형 배낭 등</h4>
          <h5>21인치이하/55cm이하/10kg미만</h5>
        </div>
        <!-- 아이콘 -->
        <div class="masize_icon">
          <img src="/images/gh/ma_content1/s_size.png" alt="S사이즈" />
          <!-- <img src="/images/ma/ma_content1/s_size.png" alt="S사이즈" /> -->
        </div>
        <!-- 당일예약시 -->
        <div class="masize_aftercash">
          <h4>당일예약</h4>
          <h2>12,000원</h2>
        </div>
        <!-- 사전예약시 -->
        <div class="masize_beforecash">
          <h5>사전예약시 10,000원</h5>
        </div>
      </div>
      <!-- m사이즈 -->
      <div class="masize">
        <!-- 사이즈 섹션 상단 설명 -->
        <div class="masize_txt">
          <h2>M 사이즈</h2>
          <h4>화물용 캐리어, 등산 가방 등</h4>
          <h5>25인치이하/65cm이하/20kg미만</h5>
        </div>
        <!-- 아이콘 -->
        <div class="masize_icon">
          <!-- <img src="/images/ma/ma_content1/m_size.png" alt="m사이즈" /> -->
          <img src="/images/gh/ma_content1/m_size.png" alt="m사이즈" />
        </div>
        <!-- 당일예약시 -->
        <div class="masize_aftercash">
          <h4>당일예약</h4>
          <h2>16,000원</h2>
        </div>
        <!-- 사전예약시 -->
        <div class="masize_beforecash">
          <h5>사전예약시 14,000원</h5>
        </div>
      </div>
      <!-- l사이즈 -->
      <div class="masize">
        <!-- 사이즈 섹션 상단 설명 -->
        <div class="masize_txt">
          <h2>L 사이즈</h2>
          <h4>대형 캐리어, 배낭, 골프백 등</h4>
          <h5>26인치이상/66cm이상/30kg미만</h5>
        </div>
        <!-- 아이콘 -->
        <div class="masize_icon">
          <!-- <img src="/images/ma/ma_content1/l-size.png" alt="l사이즈" /> -->
          <img src="/images/gh/ma_content1/l-size.png" alt="l사이즈" />
        </div>
        <!-- 당일예약시 -->
        <div class="masize_aftercash">
          <h4>당일예약</h4>
          <h2>18,000원</h2>
        </div>
        <!-- 사전예약시 -->
        <div class="masize_beforecash">
          <h5>사전예약시 16,000원</h5>
        </div>
      </div>
      <!-- ?사이즈 -->
      <div class="masize">
        <!-- 사이즈 섹션 상단 설명 -->
        <div class="masize_txt">
          <h2>? 사이즈</h2>
          <h4>기타 물품 및 표시 외 사이즈</h4>
          <h5>가방도 문의 후 협의된 물품에 한함</h5>
        </div>
        <!-- 아이콘 -->
        <div class="masize_icon">
          <!-- <img src="/images/ma/ma_content1/size.png" alt="?사이즈" /> -->
          <img src="/images/gh/ma_content1/size.png" alt="?사이즈" />
        </div>
        <!-- 사전예약시 -->
        <div class="masize_beforecash">
          <h5></h5>
        </div>
        <!-- 카카오톡 문의 -->
        <div class="masize_aftercash">
          <h2 class="ma_lastH2">카카오톡 문의</h2>
        </div>
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
</template>

<style lang="scss" scoped>
@use "/src/assets/Variables" as *;
/* 사이즈 섹션 */
.masize,
.masize1 {
  width: 100%;
  max-width: 270px;
  padding: 20px;
  border-radius: $radius;
  background-color: #fff;
}
/* 사이즈 섹션 */
.masize,
.masize1 {
  width: 100%;
  max-width: 250px;
  padding: 20px;
  border-radius: $radius;
  background-color: #fff;
}

/* 사이즈 섹션 상단 설명  */
.masize_txt {
  line-height: 20px;
  h2 {
    font-size: $basic-font-size-L * 1.3;
    line-height: 40px;
    color: $main-color;
  }
  h4 {
    font-size: $basic-font-size-m;
    color: #5a5a5a;
  }

  h5 {
    font-size: $basic-font-size-m - 4px;
    color: #5a5a5a;
  }
}
/* 아이콘 */
.masize_icon {
  padding: 10px 0;
  display: flex;
  text-align: center;
  align-items: center;
  justify-content: center;
}

.masize_icon > img {
  margin: 10px 0;
  width: 50%;
}

/* 사이즈 섹션 하단 설명 */
.masize_beforecash {
  text-align: right;
  min-height: 20px;
  font-size: 18px;
  letter-spacing: -1px;
  color: #ff6b6b;
}

.masize_aftercash {
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 5px;
  font-size: 13px;
  line-height: 20px;
  letter-spacing: -1px;
  color: #162b50;
}
.ma_lastH2 {
  font-size: 18px;
}

/* 사이즈 섹션 상단 설명  */
.masize_txt {
  line-height: 20px;
  h2 {
    font-size: $basic-font-size-L * 1.3;
    line-height: 40px;
    color: $main-color;
  }
  h4 {
    font-size: $basic-font-size-m;
    color: #5a5a5a;
  }

  h5 {
    font-size: $basic-font-size-m - 4px;
    color: #5a5a5a;
  }
}
/* 아이콘 */
.masize_icon {
  padding: 10px 0;
  text-align: center;
}

.masize_icon > img {
  margin: 10px 0;
  width: 50%;
}

/* 사이즈 섹션 하단 설명 */
.masize_beforecash {
  text-align: right;
  min-height: 20px;
  font-size: 18px;
  letter-spacing: -1px;
  color: #ff6b6b;
}

.masize_aftercash {
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 5px;
  font-size: 13px;
  line-height: 20px;
  letter-spacing: -1px;
  color: #162b50;
}
.ma_lastH2 {
  font-size: 18px;
}

/* content1 전체영역 */
.macontent1_wrap,
.macontent1_wrap1 {
  width: 100%;
  background-color: #007bd8;
  margin: auto;
}
.macontent1_wrap .inner {
  max-width: 1300px;
  padding: $padding-s 0px;
  margin: auto;
}
.macontent1_down {
  display: flex;
  justify-content: space-evenly;
  line-height: 20px;
}

/* 위 - txt */
.macontent1_up {
  margin-left: $margin-L - 25px;
  display: flex;
  align-items: flex-end;
  color: #fff;
}

.macontent1_up > h2 {
  margin-left: 5px;
}

/* content2 전체영역 */
.macontent2_wrap,
.macontent2_wrap1 {
  width: 100%;
  // height: $padding-L * 2;
  margin: auto;
}
.macontent2_wrap1 {
  display: none;
}
.macontent2_wrap .inner {
  margin-top: 50px;
  max-width: 1300px;
  margin: auto;
}
/* 아이콘 전체 영역 */
.macontent2_icon {
  display: none;
  height: 170px;
  margin: $margin-m * 2 auto;

  display: flex;
  justify-content: center;
  text-align: center;
}

/* 아이콘 이미지 박스 */
.macontent2_iconimg,
.macontent2_iconimg1 {
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 170px; /* 원하는 크기로 조정 */
  cursor: pointer;
  line-height: 17px;
}

/* 아이콘 이미지 */
.macontent2_iconimg img {
  width: 150px;
  transition: filter 0.5s ease-in-out;
}
/* 항상 보이는 텍스트 */
.macontent2_icontxt h4 {
  margin-top: 8px;
  color: black;
}
.mablue {
  color: #0066b3 !important;
}
// content3 수달3d
.ma3img {
  width: 40%;
  img {
    width: 100%;
  }
  .ma_sudal3img {
    width: 110%;
  }
}
.infoWrapper {
  display: flex;
  justify-content: space-between;
  align-items: center;
  text-align: left;
}
.leftInfo {
  line-height: 25px;
  color: #5a5a5a;
}
.rightInfocaution {
  width: 45%;
  text-align: right;
  a {
    display: block;
    font-weight: bold;
    margin-bottom: 6px;
    color: #5a5a5a;
    text-decoration: underline;
    font-weight: normal;
  }
  p {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    color: #ff6b6b; // 글씨 빨강
    font-size: 14px;
    img {
      width: 18px;
      height: 18px;
      margin-right: 6px;
      filter: brightness(0) saturate(100%) invert(16%) sepia(96%)
        saturate(7484%) hue-rotate(357deg) brightness(93%) contrast(118%);
      // 빨강 필터 효과
    }
  }
}
</style>
