<script setup></script>

<template>
  <!-- 이용안내 전체 -->
  <div class="luggageNotice">
    <!-- 이용안내_요금안내 -->
    <div class="luggagepriceInfo luggagePlusMinus">
      <!-- 요금안내_위 -->
      <div class="priceInfoTop">
        <!-- 운영시간 -->
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
      <!-- // 요금안내_위 -->

      <!-- 요금안내_아래 -->
      <div class="priceInfoBottom">
        <!-- 파란배경글씨 -->
        <div class="priceInfoMenu">
          <ul>
            <li class="leftTum">구분</li>
            <li class="left">
              기본요금<br />
              <p class="small">(시작 - 4시간이내)</p>
            </li>
            <li class="left">
              추가요금<br />
              <p class="small">(4시간이후 12시간마다)</p>
            </li>
          </ul>
        </div>

        <!-- 세부글씨 -->
        <div class="priceInfoMenuDetail">
          <ul class="infowrap">
            <li class="left">
              <div class="leftTum1">소형</div>
              <div class="leftbottum">45cm X 56cm X 30cm</div>
            </li>
            <li class="middleTum">2,000원</li>
            <li class="rightTum">2,000원</li>
          </ul>
          <ul class="infowrap">
            <li class="left">
              <div class="leftTum1">중형</div>
              <div class="leftbottum">45cm X 56cm X 45cm</div>
            </li>
            <li class="middleTum">3,000원</li>
            <li class="rightTum">3,000원</li>
          </ul>
          <ul class="infowrap">
            <li class="left">
              <div class="leftTum1">대형</div>
              <div class="leftbottum">45cm X 56cm X 60cm</div>
            </li>
            <li class="middleTum">4,000원</li>
            <li class="rightTum">4,000원</li>
          </ul>
          <ul class="infowrap">
            <li class="left">
              <div class="leftTum1">특대형</div>
              <div class="leftbottum">45cm X 56cm X 90cm</div>
            </li>
            <li class="middleTum">5,000원</li>
            <li class="rightTum">5,000원</li>
          </ul>
        </div>
        <!-- // 세부글씨 -->
      </div>
      <!-- // 요금안내_아래 -->
    </div>
    <!-- // 이용안내_요금안내 -->

    <!-- 이용안내_수화물규격 -->
    <div class="luggageImgNotice">
      <!-- 수화물 S -->
      <div class="luggage">
        <div class="luggageTitleM"><p>소형</p></div>
        <div class="luggageTitle"><p>기내용 캐리어, 소형 배낭 등</p></div>
        <div class="luggageimg">
          <img src="/images/yr/page2/size1.png" class="smaller" alt="sSize" />
        </div>
        <div class="luggagedetail">
          <p>좌우 45cm X 깊이 56cm X 높이 30cm</p>
        </div>
      </div>

      <!-- 수화물 M -->
      <div class="luggage">
        <div class="luggageTitleM"><p>중형</p></div>
        <div class="luggageTitle"><p>화물용 캐리어, 등산가방 등</p></div>
        <div class="luggageimg">
          <img src="/images/yr/page2/size2.png" class="smaller" alt="mSize" />
        </div>
        <div class="luggagedetail">
          <p>좌우 45cm X 깊이 56cm X 높이 45cm</p>
        </div>
      </div>

      <!-- 수화물 L -->
      <div class="luggage">
        <div class="luggageTitleM"><p>대형</p></div>
        <div class="luggageTitle"><p>대형 캐리어, 골프백, 대형 배낭 등</p></div>
        <div class="luggageimg">
          <img src="/images/yr/page2/size3.png" class="smaller" alt="lSize" />
        </div>
        <div class="luggagedetail">
          <p>좌우 45cm X 깊이 56cm X 높이 60cm</p>
        </div>
      </div>

      <!-- 수화물 XL -->
      <div class="luggage">
        <div class="luggageTitleM"><p>특대형</p></div>
        <div class="luggageTitle"><p>기타 물품 및 표시 외 사이즈</p></div>
        <div class="luggageimg">
          <img src="/images/yr/page2/size4.png" class="smaller" alt="xlSize" />
        </div>
        <div class="luggagedetail">
          <p>좌우 45cm X 깊이 56cm X 높이 90cm</p>
        </div>
      </div>
    </div>
    <!-- // 이용안내_수화물규격 -->
  </div>
</template>
<!-- // 이용안내 전체 -->
<style lang="scss" scoped></style>
