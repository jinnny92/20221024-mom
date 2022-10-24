<template>
  <div class="bg">
    <!-- <Header_Part /> -->
    <Mom_Header />
    <!-- <div class="main_text_container">
      <ul class="">
        <div class="">
          <div class="" style="opacity: 1; width: 1036px">
            <div
              class=""
              style="
                width: 1036px;
                position: relative;
                left: 0px;
                top: 0px;
                z-index: 999;
                opacity: 1;
              "
            >
              <div>
                <li class="slide01" style="width: 100%; display: inline-block">
                  <div class="txt">
                    <h1 class="title">
                      <span>당신이 생각하는</span>
                      <span>최고의 선수를 뽑아주세요</span>
                    </h1>
                    <h2 class="subtitle">
                      <span>이번 경기 중</span>
                      <span
                        >대중들의 사랑을 가장 많이 받은 가수를 선정하여
                        시상하는</span
                      >
                      <span
                        >한류의 대표 어워즈, 제31회 하이원 서울가요대상!</span
                      >
                      <span>2022년 1월 23일 여러분을 찾아갑니다.</span>
                    </h2>
                  </div>
                  <div class="img"></div>
                </li>
              </div>
            </div>
          </div>
        </div>
      </ul>
    </div> -->

    <weeklyTeamComponents />
    <allTeamComponents />
  </div>
</template>

<script>
// import headerComponents from "../components/Mom_Header.vue";
import weeklyTeamComponents from "../components/Mom_WeeklyTeam.vue";
import allTeamComponents from "../components/Mom_All_Team_Select.vue";
// import Header_Part from "@/components/Header_Part.vue";
import Mom_Header from "@/components/Mom_Header.vue";
export default {
  components: {
    // headerComponents,
    weeklyTeamComponents,
    allTeamComponents,
    // Header_Part,
    Mom_Header,
  },
  swiperOption: {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  },
};
</script>

<style>
span {
  display: block;
}
.bg {
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -1;
  content: "";
  /* background: url(../assets/main_big_bg.png) no-repeat center top; */
  background-size: cover;
}
.main_text_container {
  padding: 0 72px;
  width: 1180px;
  max-width: 1180px;
  min-width: 1180px;
  height: inherit;
  margin: 0 auto;
  position: relative;
  overflow: hidden;
}
.title {
  font-size: 2.8em;
  margin-top: 8px;
  text-align: left;
  letter-spacing: -0.8px;
}
.subtitle {
  font-size: 1.1em;
  text-align: left;
  margin-top: 24px;
  font-weight: normal;
}
.txt {
  color: white;
}
.slide01 {
  display: flex !important;
  flex-wrap: nowrap;
  flex-direction: row;
  justify-content: flex-start;
}
.img {
  flex: 0 0 500px;
  height: 400px;
  background: url("../assets/Logo/Pick Your Best Player2.png") no-repeat center
    center;
  background-size: contain;
}
</style>
