<template>
  <div class="arsenal_total_div">
    <HeaderHe />
    <div class="logoImg">
      <img src="@/assets/Logo/mancity.png" alt="" class="mancityLogo" />
      <div class="mancityteamName-kr">
        <router-link to="/mancity/player"
          ><span>{{ teamName }} (선수 선택 하러가기) </span></router-link
        >
      </div>
      <div class="mancityteamName-en" style="border-bottom: 1px solid #ddd">
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
          ><img src="@/components/mancity/img/a.jpg" alt="" class="arsenalWin"
        /></swiper-slide>
        <swiper-slide
          ><img src="@/components/mancity/img/b.jpg" alt="" class="arsenalWin"
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
const mancityPart = teamData[13].Mancity;
export default {
  data() {
    return {
      team: mancityPart,
      teamName: "맨체스터 시티 FC",
      teamName_en: "Manchester City FC",
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
    url(@/components/mancity/img/home.jpg);
  color: white;
  background-size: cover;
  margin: 6.7% 6% 1% 6%;
}
.logoImg {
  border: 2px solid #00285e;
}
.mancityLogo {
  width: 10%;
  margin: 0 45%;
}
.mancityteamName-kr {
  background-image: linear-gradient(to bottom, #98c5e9 0%, #b7d9f5);

  padding: 1%;
  text-align: center;
  cursor: pointer;
}
a:hover {
  color: white;
}
.mancityteamName-en {
  padding: 1%;
  text-align: center;
  background-color: #00285e;
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
  background-color: #98c5e9;
}
.td_style span {
  color: #00285e;
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
