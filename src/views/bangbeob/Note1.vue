<script setup></script>

<template>
  <div class="notetotal">
    <!-- 유의사항 왼쪽 -->
    <div class="noteleft">
      <img src="/images/yr/page2/2p_character.png" />
      <p class="sizeControll">확인해주세요!</p>
    </div>
    <!-- 유의사항 오른쪽 -->
    <div class="noteright">
      <!-- 이용약관 -->
      <div class="notetop">
        <ul class="note1">
          <li>
            •&nbsp;보관 후 7일이 지난 물품은 관리자의 요청에 따라 이동될 수
            있습니다.
          </li>
          <li>
            •&nbsp;보관함 이용 시 문이 잘 닫혔는지 꼭 확인해 주십시오.
            <p>문을 닫지 않아 발생하는 사고에 대한 책임을 지지 않습니다.</p>
          </li>
          <li>
            •&nbsp;보관함보다 큰 물품, 귀중훔, 위험물, 동식물 등 부패할 수 있는
            음식물은 보관할 수 없습니다.
          </li>
          <li>
            •&nbsp;천재지변, 전쟁, 사용자 과실, 기타 불가항력적인 이유로
            발생하는 손해에 대해서는 책임을 지지 않습니다.<br />
            <p class="indent">
              단, 보관함 자체에 결함으로 발생한 과실에 대해서는 검증 후 보상해
              드립니다.
            </p>
          </li>
          <li>
            •&nbsp;유사시 보관함 관리를 위해 보관함을 임시로 열어 점검할 수
            있습니다.
          </li>
          <li>
            •&nbsp;보관함 이용중 발생한 문제는 고객센터 또는 현장 관리자에게
            신고해 주십시오.
          </li>
        </ul>
      </div>
      <!-- 이용약관 상세보기 버튼 -->
      <div class="notebutton">
        <button>이용약관 상세보기</button>
      </div>
      <!-- 유의사항 아래 -->
      <div class="notedown1">
        <h2 class="notetitle">◾&nbsp;보관금지 물품&nbsp;◾</h2>
        <ul class="note2">
          <li>
            •&nbsp;
            <p>현금보관금지</p>
            &nbsp;:&nbsp; 공공기관에서는 보관함에 현금을 넣어두라고 요구하지
            않습니다.
          </li>
          <li>
            •&nbsp;
            <p>음식물보관금지</p>
            &nbsp;:&nbsp; 음식물 보관 시 부패나 악취로 인해 사전에 경고 없이
            폐기처분될 수 있습니다.
          </li>
        </ul>
      </div>
      <div class="notedown2">
        <h2 class="notetitle">◾&nbsp;보관함 이용 협조 안내&nbsp;◾</h2>
        <ul class="note2">
          <li>•&nbsp;다른 사용자를 위해 보관된 물품은 꼭 찾아가 주세요.</li>
          <li>
            •&nbsp;
            <p>30일 이후로는 폐기 예정입니다.</p>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@use "sass:color";
@use "/src/assets/Main.scss" as *;
@use "/src/assets/Variables.scss" as *;

// 유의사항 전체
.notetotal {
  max-width: 1000px;
  width: 90%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 30px auto 0 auto;
}
// 유의사항 왼쪽
.noteleft {
  width: 30%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  img {
    width: 90%;
  }
  p {
    font-size: 25px;
    font-weight: bold;
  }
}
// 유의사항 오른쪽
.noteright {
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: left;
  .notetop {
    font-size: 16.5px;
    .note1 li {
      line-height: 30px;
      p {
        text-indent: 12px;
      }
    }
  }
}
.notebutton {
  display: flex;
  justify-content: flex-end !important;
  align-items: center;
  align-self: flex-end;
  color: #ffffff;
  font-weight: bold;
  border: color.adjust($main-color, $lightness: 30%);
  border-radius: $radius;
  padding: 10px 15px;
  margin-bottom: 50px;
  background-color: color.adjust($main-color, $lightness: 30%);
  &:hover {
    background-color: color.adjust($sub-color, $lightness: 20%);
  }
}
// 오른쪽하단 박스
.notedown1 {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  background-color: #fde0e0;
  border: 1px solid #ff7575;
  border-radius: $radius;
  padding: 10px;
  width: 100%;
  margin-bottom: 15px;
  .notetitle {
    font-weight: bold;
    font-size: 17px;
    padding: 10px;
  }
  .note2 {
    padding-bottom: 10px;
    li {
      display: flex;
    }
    p {
      color: #ff0000;
      font-weight: bolder;
    }
  }
}
.notedown2 {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  background-color: #ffebd2;
  border: 1px solid #ffb04a;
  border-radius: $radius;
  padding: 10px;
  width: 100%;
  .notetitle {
    font-weight: bold;
    font-size: 17px;
    padding: 10px;
  }
  .note2 {
    padding-bottom: 10px;
    li {
      display: flex;
    }
    p {
      color: #ff0000;
    }
  }
}
</style>
