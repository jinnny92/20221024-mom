<template>
  <div class="selectTeam">
    <!-- Modal Section -->
    <div class="" v-for="playerList in playerList" :key="playerList.identifier">
      <div class="black-bg" v-if="modalOpen == true">
        <div class="white-bg">
          <div style="text-align: center" data-v-a6551caf="">
            <div class="upwzFoAB" data-v-a6551caf="">
              <div>
                Name: {{ playerList.first_name }} {{ playerList.last_name }}
              </div>
              <div>Nationality: {{ playerList.Nationality }}</div>
              <div>Appearances: {{ playerList.Appearances }}</div>
              <div>Goals: {{ playerList.Goals }}</div>
              <div>Assists: {{ playerList.Assists }}</div>
            </div>
          </div>
          <button class="custom-btn btn-6" @click="modalOpen = false">
            <span>Close</span>
          </button>
        </div>
      </div>
    </div>
    <div class="brentfordtitle">
      <span class="title_detail">브렌트포드 FC 2022-23 시즌 스쿼드 </span>
    </div>
    <div class="container">
      <headerComponents />
      <!--player-->
      <div class="players">
        <div class="player">
          <div class="heart1" @click="clicked"></div>
          <div class="heart1-1" @click="clicked" :class="{ show: Hshow }"></div>
          <div class="image" @click="modalOpen = true"></div>
        </div>
        <div class="player">
          <div class="heart2" @click="clicked"></div>
          <div class="image" @click="modalOpen = true"></div>
        </div>
        <div class="player">
          <div class="heart3" @click="clicked"></div>
          <div class="image" @click="modalOpen = true"></div>
        </div>
        <div class="player">
          <div class="heart3" @click="clicked"></div>
          <div class="image" @click="modalOpen = true"></div>
        </div>
        <div class="player">
          <div class="heart4" @click="clicked"></div>
          <div class="image" @click="modalOpen = true"></div>
        </div>
        <div class="player">
          <div class="heart5" @click="clicked"></div>
          <div class="image" @click="modalOpen = true"></div>
        </div>
        <div class="player">
          <div class="heart6" @click="clicked"></div>
          <div class="image" @click="modalOpen = true"></div>
        </div>
        <div class="player">
          <div class="heart7" @click="clicked"></div>
          <div class="image" @click="modalOpen = true"></div>
        </div>
        <div class="player">
          <div class="heart8" @click="clicked"></div>
          <div class="image" @click="modalOpen = true"></div>
        </div>
        <div class="player">
          <div class="heart9" @click="clicked"></div>
          <div class="image" @click="modalOpen = true"></div>
        </div>
        <div class="player">
          <div class="heart10" @click="clicked"></div>
          <div class="image" @click="modalOpen = true"></div>
        </div>
        <div class="player">
          <div class="heart11" @click="clicked"></div>
          <div class="image" @click="modalOpen = true"></div>
        </div>
        <div class="player">
          <div class="heart12" @click="clicked"></div>
          <div class="image" @click="modalOpen = true"></div>
        </div>
        <div class="player">
          <div class="heart13" @click="clicked"></div>
          <div class="image" @click="modalOpen = true"></div>
        </div>
        <div class="player">
          <div class="heart14" @click="clicked"></div>
          <div class="image" @click="modalOpen = true"></div>
        </div>
        <div class="player">
          <div class="heart15" @click="clicked"></div>
          <div class="image" @click="modalOpen = true"></div>
        </div>
        <div class="player">
          <div class="heart16" @click="clicked"></div>
          <div class="image" @click="modalOpen = true"></div>
        </div>
        <div class="player">
          <div class="heart17" @click="clicked"></div>
          <div class="image" @click="modalOpen = true"></div>
        </div>
        <div class="player">
          <div class="heart18" @click="clicked"></div>
          <div class="image" @click="modalOpen = true"></div>
        </div>
        <div class="player">
          <div class="heart19" @click="clicked"></div>
          <div class="image" @click="modalOpen = true"></div>
        </div>
        <div class="player">
          <div class="heart20" @click="clicked"></div>
          <div class="image" @click="modalOpen = true"></div>
        </div>
        <div class="player">
          <div class="heart21" @click="clicked"></div>
          <div class="image" @click="modalOpen = true"></div>
        </div>
        <div class="player">
          <div class="heart22" @click="clicked"></div>
          <div class="image" @click="modalOpen = true"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import headerComponents from "../HeaderHe.vue";
import playerList from "../PlayerJsonFile/PlayerList.json";

export default {
  data() {
    return {
      playerList: playerList,
      modalOpen: false,
      Hshow: false,
    };
  },
  components: {
    headerComponents,
  },
  methods: {
    clicked() {
      this.Hshow = !this.Hshow;
    },
  },
};
</script>

<style>
.container {
}
.brentfordtitle {
  background-image: linear-gradient(
    to right,
    #e03240 15%,
    #fff 15%,
    #fff 29%,
    #e03240 29%,
    #e03240 43%,
    #fff 43%,
    #fff 57%,
    #e03240 57%,
    #e03240 71%,
    #fff 71%,
    #fff 85%,
    #e03240 85%
  );

  text-align: center;
  padding: 5.7%;

  display: inline-block;
  width: 100%;
}
.title_detail {
  line-height: 180px;
  text-align: center;
  height: 100px;
  color: black;
  font-weight: bold;
  font-size: 3rem;
}
.players {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  max-width: 1000px;
  margin: 0 auto;
  padding: 40px 20px;
}
.player {
  width: 170px;
  height: 170px;
  margin: 4px;
  border: 3px solid #fff;
  border-radius: 10px;
  box-sizing: border-box;
  overflow: hidden;
  background-color: #555;
  transform: skewX(-14deg);
  transition: transform 0.1s, background-color 0.6s;
  margin-bottom: 10%;
  position: relative;
}
.player:hover {
  background-color: #ff9c00;
  transform: skewX(0deg) scale(1.3);
  z-index: 1;
}
.player .image {
  width: 145%;
  height: 100%;
  transform: translateX(-16px) skewX(0deg);
  background-position: center;
  background-repeat: no-repeat;
  background-size: 90px;
}
.player:nth-child(1) .image {
  background-image: url("@/components/brentford/img/a.png");
  background-size: 140px 140px;
  background-position: 30px;
}
.player:nth-child(2) .image {
  background-image: url("@/components/brentford/img/b.png");
  background-size: 140px 140px;
  background-position: 30px;
}
.player:nth-child(3) .image {
  background-image: url("@/components/brentford/img/c.png");
  background-size: 140px 140px;
  background-position: 30px;
}
.player:nth-child(4) .image {
  background-image: url("@/components/brentford/img/d.png");
  background-size: 140px 140px;
  background-position: 30px;
}
.player:nth-child(5) .image {
  background-image: url("@/components/brentford/img/e.png");
  background-size: 140px 140px;
  background-position: 30px;
}
.player:nth-child(6) .image {
  background-image: url("@/components/brentford/img/f.png");
  background-size: 140px 140px;
  background-position: 30px;
}
.player:nth-child(7) .image {
  background-image: url("@/components/brentford/img/g.png");
  background-size: 140px 140px;
  background-position: 30px;
}
.player:nth-child(8) .image {
  background-image: url("@/components/brentford/img/h.png");
  background-size: 140px 140px;
  background-position: 30px;
}
.player:nth-child(9) .image {
  background-image: url("@/components/brentford/img/i.png");
  background-size: 140px 140px;
  background-position: 30px;
}
.player:nth-child(10) .image {
  background-image: url("@/components/brentford/img/j.png");
  background-size: 140px 140px;
  background-position: 30px;
}

.player:nth-child(11) .image {
  background-image: url("@/components/brentford/img/k.png");
  background-size: 140px 140px;
  background-position: 30px;
}
.player:nth-child(12) .image {
  background-image: url("@/components/brentford/img/l.png");
  background-size: 140px 140px;
  background-position: 30px;
}
.player:nth-child(13) .image {
  background-image: url("@/components/brentford/img/m.png");
  background-size: 140px 140px;
  background-position: 30px;
}
.player:nth-child(14) .image {
  background-image: url("@/components/brentford/img/n.png");
  background-size: 140px 140px;
  background-position: 30px;
}
.player:nth-child(15) .image {
  background-image: url("@/components/brentford/img/o.png");
  background-size: 140px 140px;
  background-position: 30px;
}
.player:nth-child(16) .image {
  background-image: url("@/components/brentford/img/p.png");
  background-size: 140px 140px;
  background-position: 30px;
}
.player:nth-child(17) .image {
  background-image: url("@/components/brentford/img/q.png");
  background-size: 140px 140px;
  background-position: 30px;
}
.player:nth-child(18) .image {
  background-image: url("@/components/brentford/img/r.png");
  background-size: 140px 140px;
  background-position: 30px;
}
.player:nth-child(19) .image {
  background-image: url("@/components/brentford/img/s.png");
  background-size: 140px 140px;
  background-position: 30px;
}
.player:nth-child(20) .image {
  background-image: url("@/components/brentford/img/t.png");
  background-size: 140px 140px;
  background-position: 30px;
}
.player:nth-child(21) .image {
  background-image: url("@/components/brentford/img/u.png");
  background-size: 140px 140px;
  background-position: 30px;
}
.player:nth-child(22) .image {
  background-image: url("@/components/brentford/img/v.png");
  background-size: 140px 140px;
  background-position: 30px;
}
.player:nth-child(23) .image {
  background-image: url("@/components/brentford/img/w.png");
  background-size: 140px 140px;
  background-position: 30px;
}
.show {
  display: block !important;
}
.heart1 {
  width: 15%;
  height: 15%;
  background-image: url(../../assets/heart.png);
  background-size: cover;
}
.heart1-1 {
  width: 15%;
  height: 15%;
  background-image: url(../../assets/heart_clicked.png);
  background-size: cover;
  position: absolute;
  bottom: 85%;
  display: none;
}
.heart2 {
  width: 15%;
  height: 15%;
  background-image: url(../../assets/heart.png);
  background-size: cover;
}
.heart3 {
  width: 15%;
  height: 15%;
  background-image: url(../../assets/heart.png);
  background-size: cover;
}
.heart4 {
  width: 15%;
  height: 15%;
  background-image: url(../../assets/heart.png);
  background-size: cover;
}
.heart5 {
  width: 15%;
  height: 15%;
  background-image: url(../../assets/heart.png);
  background-size: cover;
}
.heart6 {
  width: 15%;
  height: 15%;
  background-image: url(../../assets/heart.png);
  background-size: cover;
}
.heart7 {
  width: 15%;
  height: 15%;
  background-image: url(../../assets/heart.png);
  background-size: cover;
}
.heart8 {
  width: 15%;
  height: 15%;
  background-image: url(../../assets/heart.png);
  background-size: cover;
}
.heart9 {
  width: 15%;
  height: 15%;
  background-image: url(../../assets/heart.png);
  background-size: cover;
}
.heart10 {
  width: 15%;
  height: 15%;
  background-image: url(../../assets/heart.png);
  background-size: cover;
}
.heart11 {
  width: 15%;
  height: 15%;
  background-image: url(../../assets/heart.png);
  background-size: cover;
}
.heart12 {
  width: 15%;
  height: 15%;
  background-image: url(../../assets/heart.png);
  background-size: cover;
}
.heart13 {
  width: 15%;
  height: 15%;
  background-image: url(../../assets/heart.png);
  background-size: cover;
}
.heart14 {
  width: 15%;
  height: 15%;
  background-image: url(../../assets/heart.png);
  background-size: cover;
}
.heart15 {
  width: 15%;
  height: 15%;
  background-image: url(../../assets/heart.png);
  background-size: cover;
}
.heart16 {
  width: 15%;
  height: 15%;
  background-image: url(../../assets/heart.png);
  background-size: cover;
}
.heart17 {
  width: 15%;
  height: 15%;
  background-image: url(../../assets/heart.png);
  background-size: cover;
}
.heart18 {
  width: 15%;
  height: 15%;
  background-image: url(../../assets/heart.png);
  background-size: cover;
}
.heart19 {
  width: 15%;
  height: 15%;
  background-image: url(../../assets/heart.png);
  background-size: cover;
}
.heart20 {
  width: 15%;
  height: 15%;
  background-image: url(../../assets/heart.png);
  background-size: cover;
}
.heart21 {
  width: 15%;
  height: 15%;
  background-image: url(../../assets/heart.png);
  background-size: cover;
}
.heart22 {
  width: 15%;
  height: 15%;
  background-image: url(../../assets/heart.png);
  background-size: cover;
}

/* Modal Section */
body {
  margin: 0;
}
div {
  box-sizing: border-box;
}
.black-bg {
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 2%);
  position: fixed;
  padding: 20px;
  z-index: 99999;
}
.white-bg {
  width: 30%;
  background: white;
  border-radius: 8px;
  margin: 20% auto;
}
.custom-btn {
  width: 130px;
  height: 40px;
  padding: 10px 25px;
  margin: 5% 0 0 0;
  border: 2px solid #000;
  font-family: "Lato", sans-serif;
  font-weight: 500;
  background: transparent;
  cursor: pointer;
  transition: all 0.3s ease;
  position: relative;
  display: inline-block;
}
.btn-6 {
  background: #000;
  color: #fff;
  line-height: 42px;
  padding: 0;
  border: none;
  width: 100%;
}
.btn-6 span {
  position: relative;
  display: block;
  width: 100%;
  height: 100%;
}
.btn-6:before,
.btn-6:after {
  position: absolute;
  content: "";
  height: 0%;
  width: 2px;
  background: #000;
}
.btn-6:before {
  right: 0;
  top: 0;
  transition: all 500ms ease;
}
.btn-6:after {
  left: 0;
  bottom: 0;
  transition: all 500ms ease;
}
.btn-6:hover {
  color: #000;
  background: transparent;
}
.btn-6:hover:before {
  transition: all 500ms ease;
  height: 100%;
}
.btn-6:hover:after {
  transition: all 500ms ease;
  height: 100%;
}
.btn-6 span:before,
.btn-6 span:after {
  position: absolute;
  content: "";
  background: #000;
}
.btn-6 span:before {
  left: 0;
  top: 0;
  width: 0%;
  height: 2px;
  transition: all 500ms ease;
}
.btn-6 span:after {
  right: 0;
  bottom: 0;
  width: 0%;
  height: 2px;
  transition: all 500ms ease;
}
.btn-6 span:hover:before {
  width: 100%;
}
.btn-6 span:hover:after {
  width: 100%;
}
</style>
