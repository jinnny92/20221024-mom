<template>
  <div class="arsenal_total_div">
    <HeaderHe />
    <div class="logoImg">
      <!-- 상단에 로고를 표시 하기 위해 image 출력 -->
      <img
        src="@/assets/Logo/liverpoolfc_crest.png"
        alt=""
        class="arsenalLogo"
      />

      <!-- 본문에 표시 되는 것이 아닌 로고 바로 밑에 보이기 위해 JSON파일에서 내용을 불러오는 것이 아닌 DATA를 따로 생성 하여 불러옴(본문에 넣으면 TABLE 형식으로 출력 함으로 의도 한 형식과 조금 다름)  -->
      <div class="liverpoolteamName-kr">
        <router-link to="/liverpool/player"
          ><span>{{ teamName }} (선수 선택 하러가기) </span></router-link
        >
      </div>
      <div class="liverpoolteamName-en" style="border-bottom: 1px solid #ddd">
        <span>{{ teamName_en }}</span>
      </div>

      <!-- v-for를 사용하여 JSON파일에 있는 내용을 불러오며 TABLE 형식에 맞게 출력 함 -->
      <!-- 팀에 따라 색상을 다르게 표시함 -->
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
            <!-- underLine이라는 클래스를 생성 후 Table를 구분 하게 해줌 -->
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

      <!-- swiper js 를 사용하여 swiper를 구현 하였고 내용은 해당 팀의 역사적인 사진들을 정보 제공의 형태로 보여짐 -->
      <!-- 이미지는 각 파일에 저장함 -->
      <swiper class="swiper" :options="swiperOption">
        <swiper-slide
          ><img
            src="@/components/liverpool/img/a.jpg"
            alt=""
            class="arsenalWin"
        /></swiper-slide>
        <swiper-slide
          ><img
            src="@/components/liverpool/img/b.jpg"
            alt=""
            class="arsenalWin"
        /></swiper-slide>

        <div class="swiper-pagination" slot="pagination"></div>
        <div class="swiper-button-prev" slot="button-prev"></div>
        <div class="swiper-button-next" slot="button-next"></div>
      </swiper>
    </div>
  </div>
</template>

<script>
// Arsenal_DetailVue.json 파일에 20개의 팀의 정보를 저장 하였고 그 파일을 teamDataJson이라는 이름으로 import 함

// 처음 json파일을 작성 시에는 팀마다 json파일을 생성 할 예정이였지만 시간과 편리함을 위해 한 파일에 모두 작성 하는 것으로 변경 함
import teamDataJson from "@/assets/TeamJsonFile/Arsenal_Detail.json";

// swiper js 라이브러리에서 제공하는 css를 사용하기 위해 별도로 import 시켜줌
import "swiper/dist/css/swiper.css";

// swiper와 swiperSlide를 사용하기 위해 VueAwesomeSwiper에서 제공 하는 swiper와 swiperSlide를 import함
import { swiper, swiperSlide } from "vue-awesome-swiper";

// 각 페이지 마다 Header를 사용하기 때문에 컴포넌트화를 시켜 사용 하였음
import HeaderHe from "../HeaderHe.vue";

// teamData라는 변수에 teamDataJson파일을 저장 함
const teamData = teamDataJson;

// teamDataJson파일에 있는 각각의 팀의 정보를 가져오기 위해 teamData[].TeamName를 사용하여 해당 번째의 정보를 가져옴
const liverpoolPart = teamData[12].Liverpool;
export default {
  data() {
    return {
      team: liverpoolPart, //teamData Json파일을 사용하기 위해 data로 변경
      teamName: "리버풀 FC", // 상단 로고다음에 보여질 data
      teamName_en: "LiverPool FC", // 상단 로고다음에 보여질 data
      swiperOption: {
        slidesPerView: 1, // 페이지당 보여질 사진의 갯수 설정
        loop: true, // 슬라이드가 끝이 나도 반복적으로 보여지기 위해 loop를 true시킴

        //swiper 하단에 페이지네이션을 주어 몇개의 슬라이드가 있는 확인 할 수 있음
        pagination: {
          el: ".swiper-pagination",
          clickable: true, //clickable를 true 하여 클릭으로도 슬라이드를 넘길 수 있게 함
        },

        //네비게이션을 사용하여 화살표를 눌러도 다음과 이전 사진을 볼수 있게 함
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
    url(@/components/liverpool/img/home.jpg);
  color: white;
  background-size: cover;
  margin: 6.7% 6% 1% 6%;
}
.logoImg {
  border: 2px solid #d00027;
}
.arsenalLogo {
  width: 10%;
  margin: 0 45%;
}
.liverpoolteamName-kr {
  background-color: #d00027;

  padding: 1%;
  text-align: center;
  cursor: pointer;
}
a:hover {
  color: white;
}
.liverpoolteamName-en {
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
  background-color: #d00027;
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
