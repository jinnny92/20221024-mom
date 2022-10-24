<template>
  <div class="arsenal_total_div">
    <HeaderHe />
    <div class="logoImg">
      <img src="@/assets/Logo/ever.png" alt="" class="evertonLogo" />
      <div class="teamName-kr">
        <router-link to="/arsenal/player"
          ><span>{{ teamName }} (선수 선택 하러가기) </span></router-link
        >
      </div>
      <div class="teamName-en" style="border-bottom: 1px solid #ddd">
        <span>{{ teamName_en }}</span>
      </div>

      <table
        v-for="teamdata in team"
        :key="teamdata.identifier"
        style="width: 100%"
      >
        <tbody>
          <!-- 정식명칭 section -->
          <tr>
            <td class="td_style">
              <div>
                <strong
                  ><p class="first">
                    <span> 정식명칭</span>
                  </p></strong
                >
              </div>
            </td>
            <td class="underLine">
              <div>{{ teamdata.team_name }}</div>
            </td>
          </tr>

          <!-- 별칭 section -->
          <tr>
            <td class="td_style">
              <div>
                <strong
                  ><p class="first">
                    <span> 정식명칭</span>
                  </p></strong
                >
              </div>
            </td>
            <td class="underLine">
              <div>{{ teamdata.nickname }}</div>
            </td>
          </tr>

          <!-- 창단일 section -->
          <tr>
            <td class="td_style">
              <div>
                <strong
                  ><p class="first">
                    <span> 창단일</span>
                  </p></strong
                >
              </div>
            </td>
            <td class="underLine">
              <div>{{ teamdata.establish }}</div>
            </td>
          </tr>

          <!-- 창단일 section -->
          <tr>
            <td class="td_style">
              <div>
                <strong
                  ><p class="first">
                    <span> 창단일</span>
                  </p></strong
                >
              </div>
            </td>
            <td class="underLine">
              <div>{{ teamdata.establish }}</div>
            </td>
          </tr>

          <!-- 소속리그 section -->
          <tr>
            <td class="td_style">
              <div>
                <strong
                  ><p class="first">
                    <span> 소속리그</span>
                  </p></strong
                >
              </div>
            </td>
            <td class="underLine">
              <div>{{ teamdata.league }}</div>
            </td>
          </tr>

          <!-- 연고지 section -->
          <tr>
            <td class="td_style">
              <div>
                <strong
                  ><p class="first">
                    <span> 연고지</span>
                  </p></strong
                >
              </div>
            </td>
            <td class="underLine">
              <div>{{ teamdata.hometown }}</div>
            </td>
          </tr>

          <!-- 홈구장 section -->
          <tr>
            <td class="td_style">
              <div>
                <strong
                  ><p class="first">
                    <span> 홈 구장</span>
                  </p></strong
                >
              </div>
            </td>
            <td class="underLine">
              <div>{{ teamdata.homestadium }}</div>
            </td>
          </tr>

          <!-- 라이벌 section -->
          <tr>
            <td class="td_style">
              <div>
                <strong
                  ><p class="first">
                    <span> 라이벌</span>
                  </p></strong
                >
              </div>
            </td>
            <td class="underLine">
              <div>
                <p>{{ teamdata.rival }}</p>
                <p>{{ teamdata.rival2 }}</p>
              </div>
            </td>
          </tr>

          <!-- 코치 section -->
          <tr>
            <td class="td_style">
              <div>
                <strong
                  ><p class="first">
                    <span>감독</span>
                  </p></strong
                >
              </div>
            </td>
            <td class="underLine">
              <div>{{ teamdata.coach }}</div>
            </td>
          </tr>

          <!-- 주장 section -->
          <tr>
            <td class="td_style">
              <div>
                <strong
                  ><p class="first">
                    <span>주장</span>
                  </p></strong
                >
              </div>
            </td>
            <td class="underLine">
              <div>{{ teamdata.captin }}</div>
            </td>
          </tr>

          <!-- 부주장 section -->
          <tr>
            <td class="td_style">
              <div>
                <strong
                  ><p class="first">
                    <span>부주장</span>
                  </p></strong
                >
              </div>
            </td>
            <td class="underLine">
              <div>{{ teamdata.subCaptin }}</div>
            </td>
          </tr>
        </tbody>
      </table>
      <swiper class="swiper" :options="swiperOption">
        <swiper-slide
          ><img
            src="@/components/asenal/img/[크기변환]arsWin2.jpg"
            alt=""
            class="arsenalWin"
        /></swiper-slide>
        <swiper-slide
          ><img
            src="@/components/asenal/img/arsWin4.jpg"
            alt=""
            class="arsenalWin"
        /></swiper-slide>
        <swiper-slide>Slide 3</swiper-slide>
        <swiper-slide>Slide 4</swiper-slide>
        <swiper-slide>Slide 5</swiper-slide>
        <div class="swiper-pagination" slot="pagination"></div>
        <div class="swiper-button-prev" slot="button-prev"></div>
        <div class="swiper-button-next" slot="button-next"></div>
      </swiper>
    </div>
  </div>
</template>

<script>
import teamDataJson from "@/assets/TeamJsonFile/Arsenal_Detail.json";

import "swiper/dist/css/swiper.css";
import { swiper, swiperSlide } from "vue-awesome-swiper";
import HeaderHe from "../HeaderHe.vue";
const teamData = teamDataJson;
const arsenalPart = teamData[0].Arsenal;
export default {
  data() {
    return {
      team: arsenalPart,
      teamName: "아스널 FC",
      teamName_en: "Arsenal FC",
      swiperOption: {
        slidesPerView: 1,
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
  },
  components: {
    swiper,
    swiperSlide,

    HeaderHe,
  },
};
</script>

<style>
* {
  list-style-type: none;
}
a {
  text-decoration: none;
  color: white;
}
.arsenal_total_div {
  background-image: linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)),
    url(@/components/asenal/img/arsBack.png);
  color: white;
  background-size: contain;
  margin: 6.7% 6% 1% 6%;
}
.logoImg {
  border: 2px solid rgb(255, 3, 3);
}
.evertonLogo {
  width: 10%;
  margin: 0 45%;
}
.teamName-kr {
  background-image: linear-gradient(
    to right,
    #023474 4%,
    #fff 4%,
    #fff 5%,
    #f00000 5%,
    #f00000 95%,
    #fff 95%,
    #fff 96%,
    #023474 96%
  );

  padding: 1%;
  text-align: center;
  cursor: pointer;
}
a:hover {
  color: white;
}
.teamName-en {
  padding: 1%;
  text-align: center;
}
li {
  text-align: left;
}
.desc_title {
  width: 10%;
  border: 1px solid;
}
.td_style {
  width: 25%;
  text-align: center;
  border-bottom: 1px solid white;
  background-color: red;
}
.underLine {
  border-bottom: 1px solid #ddd;
  text-align: left;
  padding-left: 1%;
}
.swiper-slide {
  width: auto;
  min-width: 56px;
  padding: 0px 14px;
  font-size: 14px;
  line-height: 36px;
  text-align: center;
  color: #84868c;
  border: 0;
  border-radius: 18px;
  appearance: none;
  cursor: pointer;
}
.arsenalWin {
  width: 50%;
}
</style>
