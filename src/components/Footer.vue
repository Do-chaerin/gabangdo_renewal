<script setup></script>

<template>
  <div class="ft_footer">
    <div class="inner">
      <!-- 풋터 상단 -->
      <div class="ft_footerTop">
        <!-- 풋터 상단 왼쪽 : 회사정보 -->
        <div class="ft_topLeft">
          <div class="ft_serviceInfo">
            <a
              href="https://www.kakao.com/policy/privacy?lang=ko"
              target="_blank"
              >개인정보취급방침</a
            >|
            <a
              href="https://www.kakao.com/policy/terms?type=a&lang=ko"
              target="_blank"
              >이용약관</a
            >
          </div>
          <div class="ft_accountAddress">
            <p>
              결&nbsp;제&nbsp;계&nbsp;좌 : 대구은행 123-456-78910
              <strong>가방도 도용달 </strong><br />
              택&nbsp;배&nbsp;주&nbsp;소 : 대구광역시 신천구 신천동로 888
              (우:45023)
            </p>
          </div>
          <div class="ft_corpInfo">
            <p>
              대표자 : 도용달 | 사업자등록번호 053-123-4567 <br />
              주&nbsp;&nbsp;&nbsp;소 : 대구광역시 신천구 신천동로 888
              (대구광역시 신천구 신천동33-3)
              <br />
              이메일 : yongdaldo@email.com | 팩스번호 : 053-123-5678
            </p>
            <p class="copyP">Copyright 2025. 가방도 Co. All rights reserved.</p>
          </div>
        </div>
        <!-- 풋터 상단 오른쪽 : 고객센터 -->
        <div class="ft_contactUs">
          <h1>고객센터</h1>
          <h2>123-456-7891</h2>
          <p>평&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;일 : 09:00 - 18:00</p>
          <p>토&nbsp;요&nbsp;일 : 09:00 - 13:00</p>
          <p>
            일&nbsp;요&nbsp;일 , 공&nbsp;휴&nbsp;일 : 휴 무(&nbsp; 예약일정에
            따라 변동&nbsp; )
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@use "sass:color";
@use "/src/assets/Main.scss" as *;
@use "/src/assets/Variables.scss" as *;

.ft_footer {
  width: 100%;
  background-color: #f5f5f5;
  padding: 30px 0;
  position: relative;
}

.inner {
  width: 100%;
  max-width: 1300px;
  margin: 0 auto;
  padding: 0 20px;
}

.ft_footerTop {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: 40px;
}

.ft_topLeft {
  flex: 1;
}

.ft_contactUs {
  flex: 1;
  padding-left: 40px;
  border-left: 1px solid #ddd;
  min-width: 0;
  letter-spacing: 1.2px;
  h1 {
    font-size: 18px;
    color: #333;
    margin-bottom: 8px;
    font-weight: 600;
  }

  h2 {
    font-size: 24px;
    color: #0066b3;
    margin-bottom: 12px;
    font-weight: 700;
  }

  p {
    color: #666;
    line-height: 1.6;
    font-size: 14px;
    margin-bottom: 16px;
  }
}

.ft_serviceInfo {
  margin-bottom: 15px;
  letter-spacing: 1.2px;
  a {
    color: #333;
    text-decoration: none;
    // margin: 0 10px;

    &:hover {
      color: #0066b3;
    }
  }
}

.ft_corpInfo,
.ft_accountAddress {
  margin-bottom: 10px;
  letter-spacing: 1.1px;
  p {
    color: #666;
    line-height: 1.5;
    font-size: 13px;
    strong {
      font-size: 15px;
    }
  }
}
/* footer 전체영역 */
// 풋터 상단
// 풋터 상단 왼쪽
.ft_footer {
  width: 100%;
  display: flex;
  flex-direction: column;
  color: $main-color;
  background-color: $notice-1stcolor;
}
.ft_footer .inner {
  width: 100%;
  max-width: 1300px;
  margin: auto;
}
.ft_footerTop {
  display: flex;
  justify-content: space-between;
  line-height: 27px;
  // letter-spacing: 1.1px;
}
.ft_serviceInfo {
  margin-top: 5px;
  display: flex;
  gap: 5px;
  font-size: 16.5px;
}
.ft_corpInfo {
  margin: 5px 0;
}
.ft_accountAddress {
  font-weight: bold;
}

// 풋터 하단(고정)
.ft_footerbottomFixed {
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  margin: 0 auto;
  width: 100%;
  color: #fff;
  z-index: 9999;
  display: flex;
  flex-direction: column;
  background-color: $main-color;
}
// 풋터 하단 위 간편문의
.ft_ftbottomUp {
  width: 100%;
  height: 60px;

  h2 {
    width: 100px;
    text-align: center;
    font-size: 23px;
  }
  input {
    width: 250px;
    height: 28px;
    margin-left: 2px;
    font-size: 16.5px;
    color: #333;
    border-radius: 2px;
    border: 0;
    background-color: #fff;
  }
  img {
    width: 40px;
    height: 40px;
    margin-bottom: 4px;
    cursor: pointer;
  }
}
.ft_ftbottomUp > .inner {
  height: 110%;
  line-height: 30px;
  display: flex !important;
  justify-content: space-evenly;
  align-items: center;
  font-size: 18px;
  padding: 10px;
}
.quickQuestion {
  max-width: 52%;
  display: flex;
}
// 풋터 하단 아래
.ft_ftbottomDown {
  display: flex;
  background-color: #003366;
  padding: 10px 0;
}
.ft_ftbottomDown .inner {
  max-width: 900px;
  text-align: right;
}
strong {
  font-size: 16.5px;
}

@media screen and (max-width: 1024px) {
  .ft_footerTop {
    flex-direction: column;
    gap: 30px;
  }

  .ft_contactUs {
    flex: none;
    width: 100%;
    padding-left: 0;
    border-left: none;
    border-top: 1px solid #ddd;
    padding-top: 30px;
  }
}

@media screen and (max-width: 768px) {
  .ft_footer {
    padding: 20px 0;
  }

  .inner {
    padding: 0 15px;
  }
  .fas {
    width: 50px !important;
  }
  .ft_contactUs {
    h1 {
      font-size: 16px;
      letter-spacing: 1.4px;
    }

    h2 {
      font-size: 20px;
    }

    p {
      font-size: 13px;
    }
  }
}

@media screen and (max-width: 480px) {
  .ft_footer {
    padding: 15px 0;
  }

  .inner {
    padding: 0 10px;
  }

  .ft_footerTop {
    gap: 15px;
  }

  .ft_contactUs {
    padding-top: 15px;
  }
  .ft_contactUs {
    h1 {
      font-size: 15px;
    }

    h2 {
      font-size: 18px;
    }

    p {
      font-size: 12px;
    }
  }
}
</style>
