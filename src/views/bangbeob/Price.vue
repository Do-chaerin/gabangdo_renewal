<script setup></script>

<template>
  <!-- 이용안내 전체 -->
  <div class="pricewrap">
    <!-- 이용안내 요금안내 -->
    <div class="priceinfo">
      <div class="pricetop">
        <div class="pricedetail">
          <ul>
            <li>* 운영시간 : 05시 - 00시</li>
            <li>* 역마다 차이가 있을 수 있습니다.</li>
            <li>* 기차역의 경우 오후 11시에 마감됩니다.</li>
          </ul>
        </div>
      </div>
      <!-- 요금안내 아래 -->
      <div class="pricebottom">
        <table class="infowrap">
          <thead class="pricemenu">
            <tr>
              <th class="left">구분</th>
              <th class="left">
                기본요금<br />
                <p>(시작 - 4시간이내)</p>
              </th>
              <th class="left">
                추가요금<br />
                <p>(4시간이후 12시간마다)</p>
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td class="cell">
                <p>소형</p>
                <span>45cm X 56cm X 30cm</span>
              </td>
              <td class="cell">2,000원</td>
              <td class="cell">2,000원</td>
            </tr>
            <tr>
              <td class="cell">
                <p>중형</p>
                <span>45cm X 56cm X 45cm</span>
              </td>
              <td class="cell">3,000원</td>
              <td class="cell">3,000원</td>
            </tr>
            <tr>
              <td class="cell">
                <p>대형</p>
                <span>45cm X 56cm X 60cm</span>
              </td>
              <td class="cell">4,000원</td>
              <td class="cell">4,000원</td>
            </tr>
            <tr>
              <td class="cell">
                <p>특대형</p>
                <span>45cm X 56cm X 90cm</span>
              </td>
              <td class="cell">5,000원</td>
              <td class="cell">5,000원</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
    <!-- 이용안내 수화물규격 -->
    <div class="luggagewrap">
      <!-- 수화물 S -->
      <div class="luggage">
        <div class="luggaget">소형</div>
        <div class="luggagem">기내용 캐리어, 소형 배낭 등</div>
        <div class="luggageimg">
          <img src="/images/yr/page2/size1.png" class="smaller" />
        </div>
        <div class="luggageb">W 45cm X D 56cm X H 30cm</div>
      </div>
      <!-- 수화물 M -->
      <div class="luggage">
        <div class="luggaget">중형</div>
        <div class="luggagem">화물용 캐리어, 등산가방 등</div>
        <div class="luggageimg">
          <img src="/images/yr/page2/size2.png" class="smaller" />
        </div>
        <div class="luggageb">W 45cm X D 56cm X H 45cm</div>
      </div>
      <!-- 수화물 L -->
      <div class="luggage">
        <div class="luggaget">대형</div>
        <div class="luggagem">대형 캐리어, 골프백, 대형 배낭 등</div>
        <div class="luggageimg">
          <img src="/images/yr/page2/size3.png" class="smaller" />
        </div>
        <div class="luggageb">W 45cm X D 56cm X H 60cm</div>
      </div>
      <!-- 수화물 XL -->
      <div class="luggage">
        <div class="luggaget">특대형</div>
        <div class="luggagem">기타 물품 및 표시 외 사이즈</div>
        <div class="luggageimg">
          <img src="/images/yr/page2/size4.png" class="smaller" />
        </div>
        <div class="luggageb">
          <p>W 45cm X D 56cm X H 90cm</p>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@use "sass:color";
@use "/src/assets/Main.scss" as *;
@use "/src/assets/Variables.scss" as *;

// 전체
.pricewrap {
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 90%;
  max-width: 1000px;
  margin: 0 auto;
}
// 가격안내전체
.priceinfo {
  border-radius: $radius;
  border: $border-line;
  margin-bottom: 30px;
}
// 주의사항
.pricetop {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  text-align: left;
  width: 100%;
  margin: 0 auto;
}
.pricedetail {
  padding: 15px;
  margin: 20px 22px;
  background-color: #e0e0e0;
  border-radius: $radius;
}
// 테이블
.pricebottom {
  display: flex;
  justify-content: center;
  width: 100%;
  margin: 0 auto;
  // 가격안내 테이블
  table.infowrap {
    width: 95%;
    table-layout: fixed;
    border-collapse: separate;
    border-spacing: 0;
    overflow: hidden;
    // 가격안내 헤더
    thead.pricemenu {
      background-color: $sub-color;
      color: #ffffff;
      th {
        display: table-cell;
        align-items: center;
        justify-content: center;
        text-align: center;
        vertical-align: middle;
        padding: 5px 0;
        &:first-child {
          border-top-left-radius: $radius;
          border-bottom-left-radius: $radius;
        }
        &:last-child {
          border-top-right-radius: $radius;
          border-bottom-right-radius: $radius;
        }
      }
    }
    // 가격테이블 3등분
    th,
    td {
      width: 33.33%;
    }
  }
}
// 테이블 내용 제목
.left {
  font-size: 20px;
  font-weight: bold;
  p {
    font-size: 17px;
    font-weight: normal;
  }
}
// 테이블내용 텍스트
td.cell {
  vertical-align: middle;
  padding: 10px 0;
}
.cell {
  font-size: 19px;
  span {
    font-size: 16px;
    color: #666666;
  }
}
// 수하물안내전체
.luggagewrap {
  display: flex;
  justify-content: space-between;
}
// 수하물
.luggage {
  border-radius: $radius;
  border: $border-line;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 24%;
  padding: 5px;
  .luggaget {
    font-size: 25px;
    font-weight: bold;
    margin-top: 10px;
  }
  .luggagem {
    font-size: 15px;
    color: #555555;
  }
  .luggageb {
    font-size: 15px;
    color: #666666;
    margin-bottom: 10px;
  }
  img {
    margin: 5px 0;
  }
}
</style>
