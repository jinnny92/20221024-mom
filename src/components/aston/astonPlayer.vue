<template>
  <div class="selectTeam">
    <!-- Modal Section -->

    <div class="astontitle">
      <span class="title_detail">아스톤빌라 FC 2022-23 시즌 스쿼드 </span>
    </div>
    <div class="container">
      <headerComponents />
      <!--player-->
      <div class="players">
        <martinez />

        <cash />

        <targett />

        <konsa />

        <Mings />

        <Luiz />

        <McGinn />

        <Sanson />

        <!--<rowe />

        <martinelli />

        <saliba />

        <lokonga />

        <nketiah />

        <holding />

        <cedric /> -->
      </div>
    </div>
  </div>
</template>

<script>
import headerComponents from "../HeaderHe.vue";
import martinez from "./martinez/EmilianoMartinez.vue";
import cash from "./cash/MattyCash.vue";
import targett from "./targett/mattTargett.vue";
import konsa from "./konsa/ezriKona.vue";
import Mings from "./Mings/TyroneMings.vue";
import Luiz from "./Luiz/DouglasLuiz.vue";
import McGinn from "./McGinn/JohnMcGinn.vue";
import Sanson from "./Sanson/MorganSanson.vue";
// import Ings from "./Ings/DannyIngs.vue";
// import saliba from "./saliba/williamSaliba.vue";
// import martinelli from "./martinelli/gabrielMartinelli.vue";
// import lokonga from "./lokonga/alvertSambiLokonga.vue";
// import nketiah from "./nketiah/eddieNketiah.vue";
// import holding from "./holding/robHolding.vue";
// import cedric from "./cedric/cedricSoares.vue";

export default {
  data() {
    return {
      modalOpen: false,
      Hshow: false,
    };
  },
  components: {
    headerComponents,
    martinez,
    cash,
    targett,
    konsa,
    Mings,
    Luiz,
    McGinn,
    Sanson,
    // Ings,
    // martinelli,
    // saliba,
    // lokonga,
    // nketiah,
    // holding,
    // cedric,
  },
};
</script>

<style>
.container {
}
.astontitle {
  background-color: #650932;

  text-align: center;
  padding: 5.7%;

  display: inline-block;
  width: 100%;
}
.title_detail {
  line-height: 180px;
  text-align: center;
  font-size: 3rem;
  height: 100px;
  background-color: #650932;
  color: #a4c2e6;
  font-weight: bold;
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
  background-image: url("@/components/aston/img/a.png");
  background-size: 140px 140px;
  background-position: 30px;
}
.player:nth-child(2) .image {
  background-image: url("@/components/aston/img/b.png");
  background-size: 140px 140px;
  background-position: 30px;
}
.player:nth-child(3) .image {
  background-image: url("@/components/aston/img/c.png");
  background-size: 140px 140px;
  background-position: 30px;
}
.player:nth-child(4) .image {
  background-image: url("@/components/aston/img/d.png");
  background-size: 140px 140px;
  background-position: 30px;
}
.player:nth-child(5) .image {
  background-image: url("@/components/aston/img/e.png");
  background-size: 140px 140px;
  background-position: 30px;
}
.player:nth-child(6) .image {
  background-image: url("@/components/aston/img/f.png");
  background-size: 140px 140px;
  background-position: 30px;
}
.player:nth-child(7) .image {
  background-image: url("@/components/aston/img/g.png");
  background-size: 140px 140px;
  background-position: 30px;
}
.player:nth-child(8) .image {
  background-image: url("@/components/aston/img/h.png");
  background-size: 140px 140px;
  background-position: 30px;
}
.player:nth-child(9) .image {
  background-image: url("@/components/aston/img/i.png");
  background-size: 140px 140px;
  background-position: 30px;
}
.player:nth-child(10) .image {
  background-image: url("@/components/aston/img/j.png");
  background-size: 140px 140px;
  background-position: 30px;
}

.player:nth-child(11) .image {
  background-image: url("@/components/aston/img/k.png");
  background-size: 140px 140px;
  background-position: 30px;
}
.player:nth-child(12) .image {
  background-image: url("@/components/aston/img/l.png");
  background-size: 140px 140px;
  background-position: 30px;
}
.player:nth-child(13) .image {
  background-image: url("@/components/aston/img/m.png");
  background-size: 140px 140px;
  background-position: 30px;
}
.player:nth-child(14) .image {
  background-image: url("@/components/aston/img/n.png");
  background-size: 140px 140px;
  background-position: 30px;
}
.player:nth-child(15) .image {
  background-image: url("@/components/aston/img/o.png");
  background-size: 140px 140px;
  background-position: 30px;
}
.player:nth-child(16) .image {
  background-image: url("@/components/aston/img/p.png");
  background-size: 140px 140px;
  background-position: 30px;
}
.player:nth-child(17) .image {
  background-image: url("@/components/aston/img/q.png");
  background-size: 140px 140px;
  background-position: 30px;
}
.player:nth-child(18) .image {
  background-image: url("@/components/aston/img/r.png");
  background-size: 140px 140px;
  background-position: 30px;
}
.player:nth-child(19) .image {
  background-image: url("@/components/aston/img/s.png");
  background-size: 140px 140px;
  background-position: 30px;
}
.player:nth-child(20) .image {
  background-image: url("@/components/aston/img/t.png");
  background-size: 140px 140px;
  background-position: 30px;
}
.player:nth-child(21) .image {
  background-image: url("@/components/aston/img/u.png");
  background-size: 140px 140px;
  background-position: 30px;
}
.player:nth-child(22) .image {
  background-image: url("@/components/aston/img/v.png");
  background-size: 140px 140px;
  background-position: 30px;
}
.player:nth-child(23) .image {
  background-image: url("@/components/aston/img/w.png");
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
