<template>
  <!-- 메인 컨텐츠1 전체영역 -->
  <div class="macontent1_wrap">
    <div class="inner">
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
  </div>
</template>
<script setup></script>
<style lang="scss" scoped>
@use "/src/assets/Variables" as *;
/* 공통: 가로 4열 */
.macontent1_down {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 30px;
}

/* 카드 내부 기본 스타일 (필요 시 기존 값 추가) */
.masize {
  background: #fff;
  border: 1px solid #e5e7eb;
  border-radius: 16px;
  padding: 24px;
  text-align: center;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.05);
}

/* --- 태블릿 (max-width: 768px) --- */
@media screen and (max-width: 768px) {
  .macontent1_down {
    grid-template-columns: repeat(2, 1fr);
    gap: 20px;
  }

  .masize {
    padding: 20px;
  }

  .masize_txt {
    h2 {
      font-size: 22px;
    }
    h4 {
      font-size: 16px;
    }
    h5 {
      font-size: 14px;
    }
  }

  .masize_icon img {
    width: 100px;
    height: auto;
  }

  .masize_aftercash {
    h4 {
      font-size: 16px;
    }
    h2 {
      font-size: 26px;
    }
  }

  .masize_beforecash h5 {
    font-size: 14px;
  }
}

/* --- 모바일 (max-width: 390px) --- */
@media screen and (max-width: 390px) {
  .macontent1_down {
    grid-template-columns: 1fr;
    gap: 15px;
  }

  .masize {
    padding: 16px;
  }

  .masize_txt {
    h2 {
      font-size: 20px;
    }
    h4 {
      font-size: 14px;
    }
    h5 {
      font-size: 12px;
    }
  }

  .masize_icon img {
    width: 80px;
  }

  .masize_aftercash {
    h4 {
      font-size: 14px;
    }
    h2 {
      font-size: 22px;
    }
  }

  .masize_beforecash h5 {
    font-size: 12px;
  }

  /* 마지막 카카오톡 문의 버튼 글자 크기 조금 더 키우기 */
  .ma_lastH2 {
    font-size: 18px;
  }
}
</style>
