<script setup></script>

<template>
  <!-- 이용안내 전체 -->
  <div class="pricewrap">
    <!-- 이용안내_요금안내 -->
    <div class="priceinfo">
      <div class="priceInfoTop">
        <div class="priceInfoTime">
          <p>운영시간 : 05시 - 00시</p>
          <div class="priceInfoDetail">
            <ul>
              <li>*역마다 차이가 있을 수 있습니다.</li>
              <li>*기차역의 경우 오후 11시에 마감됩니다.</li>
            </ul>
          </div>
        </div>
      </div>
      <!-- 요금안내_위 -->

      <!-- 요금안내_아래 -->
      <div class="priceInfoBottom">
        <div class="priceMenu">
          <table class="infowrap">
            <thead class="priceInfoMenu">
              <tr>
                <th class="leftTum">구분</th>
                <th class="left">
                  기본요금<br />
                  <p class="small">(시작 - 4시간이내)</p>
                </th>
                <th class="left">
                  추가요금<br />
                  <p class="small">(4시간이후 12시간마다)</p>
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td class="left">
                  <div class="leftTum1">소형</div>
                  <div class="leftbottum">45cm X 56cm X 30cm</div>
                </td>
                <td class="middleTum">2,000원</td>
                <td class="rightTum">2,000원</td>
              </tr>
              <tr>
                <td class="left">
                  <div class="leftTum1">중형</div>
                  <div class="leftbottum">45cm X 56cm X 45cm</div>
                </td>
                <td class="middleTum">3,000원</td>
                <td class="rightTum">3,000원</td>
              </tr>
              <tr>
                <td class="left">
                  <div class="leftTum1">대형</div>
                  <div class="leftbottum">45cm X 56cm X 60cm</div>
                </td>
                <td class="middleTum">4,000원</td>
                <td class="rightTum">4,000원</td>
              </tr>
              <tr>
                <td class="left">
                  <div class="leftTum1">특대형</div>
                  <div class="leftbottum">45cm X 56cm X 90cm</div>
                </td>
                <td class="middleTum">5,000원</td>
                <td class="rightTum">5,000원</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
    <!-- 이용안내 수화물규격 -->
    <div class="luggagewrap">
      <!-- 수화물 S -->
      <div class="luggage">
        <div class="luggageTitleM">소형</div>
        <div class="luggageTitle">기내용 캐리어, 소형 배낭 등</div>
        <div class="luggageimg">
          <img src="/images/yr/page2/size1.png" class="smaller" />
        </div>
        <div class="luggagedetail">좌우 45cm X 깊이 56cm X 높이 30cm</div>
      </div>
      <!-- 수화물 M -->
      <div class="luggage">
        <div class="luggageTitleM">중형</div>
        <div class="luggageTitle">화물용 캐리어, 등산가방 등</div>
        <div class="luggageimg">
          <img src="/images/yr/page2/size2.png" class="smaller" />
        </div>
        <div class="luggagedetail">좌우 45cm X 깊이 56cm X 높이 45cm</div>
      </div>
      <!-- 수화물 L -->
      <div class="luggage">
        <div class="luggageTitleM">대형</div>
        <div class="luggageTitle">대형 캐리어, 골프백, 대형 배낭 등</div>
        <div class="luggageimg">
          <img src="/images/yr/page2/size3.png" class="smaller" />
        </div>
        <div class="luggagedetail">좌우 45cm X 깊이 56cm X 높이 60cm</div>
      </div>
      <!-- 수화물 XL -->
      <div class="luggage">
        <div class="luggageTitleM">특대형</div>
        <div class="luggageTitle">기타 물품 및 표시 외 사이즈</div>
        <div class="luggageimg">
          <img src="/images/yr/page2/size4.png" class="smaller" />
        </div>
        <div class="luggagedetail">
          <p>좌우 45cm X 깊이 56cm X 높이 90cm</p>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@use "sass:color";
@use "/src/assets/Main.scss" as *;
@use "/src/assets/Variables.scss" as *;
//
.pricewrap {
  max-width: 1000px;
  width: 90%;
}
// 가격안내전체
.priceinfo {
  border-radius: $radius;
  border: $border-line;
}
.priceInfoMenu {
  background-color: $sub-color;
  border-radius: $radius;
  padding: 15px;
}
table {
  width: 90%;
  tr {
    width: 33.33%;
  }
}
// 수하물안내전체
.luggagewrap {
  display: flex;
}
// 수하물전체
.luggage {
  border-radius: $radius;
  border: $border-line;
}
</style>
