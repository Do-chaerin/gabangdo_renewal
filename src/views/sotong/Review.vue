<script setup>
import { ref, computed } from "vue";

// 태그 정보
const tags = ref([{ tag: "⭐⭐⭐⭐⭐" }]);
// 상품 목록
const products = ref([
  {
    name: "김철수",
    image: "/images/cr/st_review01.jpg",
    content: "정말 친절하고 빠른 서비스였습니다.",
  },
  {
    name: "이영희",
    image: "/images/cr/st_review02.jpg",
    content: "사용법도 쉬워서 자주 이용할 것 같아요.",
  },
  {
    name: "박지훈",
    image: "/images/cr/st_review03.jpg",
    content: "기대 이상으로 만족스러웠습니다!",
  },
  {
    name: "최민수",
    image: "/images/cr/st_review04.jpg",
    content: "직원분들이 너무 친절했어요.",
  },
  {
    name: "장서연",
    image: "/images/cr/st_review05.jpg",
    content: "처음 이용해봤는데 좋네요.",
  },
  {
    name: "한가은",
    image: "/images/cr/st_review06.jpg",
    content: "배송이 정확하고 빠릅니다.",
  },
  {
    name: "정우성",
    image: "/images/cr/st_review07.jpg",
    content: "매우 만족합니다. 다음에도 또 이용할게요.",
  },
  {
    name: "손예진",
    image: "/images/cr/st_review08.jpg",
    content: "친구에게도 추천하고 싶을 정도예요.",
  },
  {
    name: "유재석",
    image: "/images/cr/st_review09.jpg",
    content: "정확하고 빠른 서비스에 감동받았습니다.",
  },
  {
    name: "강호동",
    image: "/images/cr/st_review10.jpg",
    content: "간편하게 예약할 수 있어서 좋았어요.",
  },
  {
    name: "신동엽",
    image: "/images/cr/st_review11.jpg",
    content: "전체적으로 만족스러운 경험이었습니다.",
  },
  {
    name: "이효리",
    image: "/images/cr/st_review12.jpg",
    content: "정말 편리하게 이용할 수 있었어요.",
  },
  {
    name: "홍길동",
    image: "/images/cr/st_review13.jpg",
    content: "설명도 자세하고 문의도 잘 응대해주셨어요.",
  },
  {
    name: "이수리",
    image: "/images/cr/st_review14.jpg",
    content: "처음엔 걱정했지만 결과적으로 만족!",
  },
  {
    name: "박정식",
    image: "/images/cr/st_review15.jpg",
    content: "원하는 날짜에 정확히 도착했어요.",
  },
  {
    name: "최가을",
    image: "/images/cr/st_review16.jpg",
    content: "예상보다 빠르게 처리돼서 놀랐어요.",
  },
  {
    name: "장성규",
    image: "/images/cr/st_review17.jpg",
    content: "시스템이 잘 되어 있어서 편리합니다.",
  },
  {
    name: "한동준",
    image: "/images/cr/st_review18.jpg",
    content: "예약부터 수령까지 전혀 불편함이 없었어요.",
  },
  {
    name: "정유리",
    image: "/images/cr/st_review19.jpg",
    content: "간단한 절차로 쉽게 완료할 수 있었습니다.",
  },
  {
    name: "손석구",
    image: "/images/cr/st_review20.jpg",
    content: "기대하지 않았는데 서비스 좋아요!",
  },
  {
    name: "이미정",
    image: "/images/cr/st_review21.jpg",
    content: "직관적인 UI 덕분에 쉽게 예약했습니다.",
  },
  {
    name: "강동식",
    image: "/images/cr/st_review22.jpg",
    content: "자세한 설명과 빠른 피드백이 좋았어요.",
  },
  {
    name: "신나라",
    image: "/images/cr/st_review23.jpg",
    content: "서비스가 너무 좋아서 다음에도 이용할 생각입니다.",
  },
  {
    name: "이아정",
    image: "/images/cr/st_review24.jpg",
    content: "배송이 예상보다 빨라서 기분 좋았어요.",
  },
]);
// 이름 마스킹 (ex: 홍길동 → 홍**)
const maskedName = (name) => name.charAt(0) + "*".repeat(name.length - 1);
// 페이지네이션 상태
const reviewCurrentPage = ref(1);
const reviewItemsPerPage = 6; // 한 페이지당 8개 상품 표시
// 총 페이지 수 계산
const reviewTotalPages = computed(() =>
  Math.ceil(products.value.length / reviewItemsPerPage)
);
// 현재 페이지에 맞는 상품 목록 반환
const paginatedProducts = computed(() => {
  const start = (reviewCurrentPage.value - 1) * reviewItemsPerPage;
  return products.value.slice(start, start + reviewItemsPerPage);
});
// 페이지 이동 함수
const prevReviewPage = () => {
  if (reviewCurrentPage.value > 1) reviewCurrentPage.value--;
};
const nextReviewPage = () => {
  if (reviewCurrentPage.value < reviewTotalPages.value)
    reviewCurrentPage.value++;
};
const showForm = ref(false);
const newReview = ref({
  name: "",
  content: "",
  image: "",
});
const previewImage = ref("");
// 후기 추가
const addReview = () => {
  if (!newReview.value.name || !newReview.value.content) {
    alert("이름과 후기를 작성해주세요.");
    return;
  }
  const newItem = {
    name: newReview.value.name,
    image: newReview.value.image || "/images/default-user.png",
  };
  // products 목록 앞에 추가
  products.value.unshift(newItem);
  cancelForm();
};
// 이미지 업로드 처리
const handleImageUpload = (e) => {
  const file = e.target.files[0];
  if (!file) return;
  const reader = new FileReader();
  reader.onload = () => {
    previewImage.value = reader.result;
    newReview.value.image = reader.result;
  };
  reader.readAsDataURL(file);
};
const cancelForm = () => {
  newReview.value = { name: "", content: "", image: "" };
  previewImage.value = "";
  showForm.value = false;
};
//모달
const showModal = ref(false);
const selectedReview = ref(null);
const openModal = (review) => {
  selectedReview.value = review;
  showModal.value = true;
};
const closeModal = () => {
  selectedReview.value = null;
  showModal.value = false;
};
</script>

<template>
  <!-- 카드이용후기 -->
  <div class="reviewwrap">
    <div class="card-container">
      <div
        class="card"
        v-for="product in paginatedProducts"
        :key="product.image"
        @click="openModal(product)"
      >
        <div class="img-product">
          <img :src="product.image" alt="Product" />
        </div>
        <div class="detail">
          <div class="title">
            <div class="tag">
              <a v-for="tag in tags" :href="tag.link" :key="tag.name">
                <span>{{ tag.tag }}</span>
              </a>
            </div>
            <div class="text">
              <h6>{{ maskedName(product.name) }}님의 이용후기입니다</h6>
              <span>{{ product.content }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- 리뷰작성 -->
    <div class="write-btn-wrapper">
      <!-- 글쓰기 폼 오픈 버튼 -->
      <button @click="showForm = !showForm" class="write-btn">
        {{ showForm ? "취소" : "글쓰기" }}
      </button>
      <!-- 글쓰기 폼 -->
      <form v-if="showForm" class="review-form">
        <input type="text" v-model="newReview.name" placeholder="이름" />
        <textarea v-model="newReview.content" placeholder="후기내용"></textarea>
        <input type="file" @change="handleImageUpload" accept="image/*" />
        <img v-if="previewImage" :src="previewImage" width="120" />
        <!-- 후기 등록·취소버튼 -->
        <div class="form-buttons">
          <button class="form-buttons2" type="button" @click="cancelForm">
            취소
          </button>
          <button class="form-buttons1" type="button" @click="addReview">
            등록
          </button>
        </div>
      </form>
    </div>
    <!-- 페이지네이션 -->
    <div class="pagination">
      <button @click="prevReviewPage" :disabled="reviewCurrentPage === 1">
        이전
      </button>
      <span>{{ reviewCurrentPage }} / {{ reviewTotalPages }}</span>
      <button
        @click="nextReviewPage"
        :disabled="reviewCurrentPage === reviewTotalPages"
      >
        다음
      </button>
    </div>
  </div>

  <!-- 모달창 내용 -->
  <div class="modal">
    <div v-if="showModal" class="modal-overlay" @click.self="closeModal">
      <div class="modal-content">
        <h3>✨{{ maskedName(selectedReview.name) }}님의 이용후기✨</h3>
        <img :src="selectedReview.image" alt="후기 이미지" />
        <p>{{ selectedReview.content || "내용 없음" }}</p>
        <button @click="closeModal">닫기</button>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@use "sass:color";
@use "/src/assets/Main.scss" as *;
@use "/src/assets/Variables.scss" as *;

.reviewwrap {
  max-width: 1000px;
  width: 90%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin: 0 auto;
}

// 이용후기섹션
.view {
  width: 70%;
  max-width: 100%;
  text-align: center;
}

// 리뷰 카드
.card-container {
  display: flex;
  justify-content: center;
  gap: 15px;
  flex-wrap: wrap;
  font-family: none;
  margin-bottom: 30px;
}

.card {
  width: 250px;
  height: 450px;
  background-color: $background-maincolor;
  border: 1px solid $border-gray;
  border-radius: $radius;
  transition: transform 0.3s ease-in-out;
  cursor: pointer;
}

.card:hover {
  transform: scale(1.02);
}

.card .img-product {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 80%;
}

.card .img-product img {
  height: 100%;
  width: 100%;
  padding: 10px;
  border-radius: $radius;
}

.detail {
  height: 20%;
  padding: 0 10px;
}
.title {
  display: flex;
  flex-wrap: wrap;
  text-align: left;
  flex-direction: column;
  gap: 5px;
}
.text {
  display: flex;
  flex-direction: column;
  align-items: baseline;
}
.tag span {
  font-size: 14px;
}
h6 {
  font-size: 14px;
  font-weight: bold;
}
span {
  font-size: 13px;
}
// 글쓰기 폼
input,
textarea,
img,
button {
  border-radius: $radius;
}
.form-buttons2 {
  background-color: #a80311;
}
// 페이지네이션 스타일
.pagination {
  margin-top: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
}
.pagination button {
  padding: 5px 10px;
  margin: 0 5px;
  cursor: pointer;
  border: none;
  border-radius: $radius;
  background-color: color.adjust($main-color, $lightness: 30%);
  color: #fff;
  :hover {
    background-color: color.adjust($sub-color, $lightness: 20%) !important;
  }
}
.pagination button:disabled {
  background: #d4d4d4;
  cursor: not-allowed;
  opacity: 0.6;
}

/* 글쓰기 버튼 */
.write-btn-wrapper {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-content: flex-end;
  align-items: flex-end;
  margin-bottom: 20px;
}

.write-btn {
  width: 150px;
  height: 50px;
  padding: 12px 24px;
  background-color: color.adjust($main-color, $lightness: 30%);
  color: #fff;
  font-size: 16px;
  border-radius: $radius;
  cursor: pointer;
  border: none;
  transition: background 0.3s;
  margin: 15px;
  display: block;
}
.write-btn:hover {
  background-color: color.adjust($sub-color, $lightness: 20%) !important;
}

.review-form {
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 100%;
  max-width: 500px;
  margin-bottom: 30px;
}

.review-form input,
.review-form textarea {
  padding: 10px;
  border: 1px solid $border-gray;
  border-radius: &$radius;
}
button {
  display: flex;
  justify-content: center;
  text-align: center;
  align-items: center;
  padding: 10px;
  background-color: color.adjust($main-color, $lightness: 30%);
  color: white;
  width: 70px;
  height: 44px;
  border: none;
  border-radius: $radius;
  cursor: pointer;
  white-space: nowrap;
  &:hover {
    transition: background 0.2s;
    background-color: #71d575;
  }
}
.form-buttons {
  display: flex;
  gap: 10px;
  justify-content: center;
}
.modal {
  .modal-overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.4);
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .modal-content {
    background: white;
    padding: 20px;
    border-radius: $radius;
    width: 90%;
    max-width: 400px;
    box-shadow: $box-shadow;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    flex-direction: column;

    img {
      width: 100%;
      border-radius: $radius;
      margin: 10px 0;
    }

    button {
      width: 150px;
      height: 50px;
      padding: 12px 24px;
      background-color: color.adjust($main-color, $lightness: 30%);
      color: #fff;
      font-size: 16px;
      border-radius: $radius;
      cursor: pointer;
      border: none;
      transition: background 0.3s;
      margin: 15px;
      display: block;
    }
    :hover {
      background-color: color.adjust($sub-color, $lightness: 20%) !important;
    }
  }
}
</style>
