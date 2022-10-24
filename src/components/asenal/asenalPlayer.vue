<template>
  <div class="selectTeam">
    <!-- Modal Section -->

    <div class="title">
      <span class="title_detail">아스날 FC 2022-23 시즌 스쿼드 </span>
    </div>
    <div class="container">
      <headerComponents />
      <!--player-->
      <div class="players">
        <ramsdale />

        <tierney />

        <white />

        <partey />

        <Magalhães />

        <Saka />

        <odegaard />

        <jesus />

        <rowe />

        <martinelli />

        <saliba />

        <lokonga />

        <nketiah />

        <holding />

        <cedric />
      </div>
    </div>
  </div>
</template>

<script>
import headerComponents from "../HeaderHe.vue";
import ramsdale from "./aronRamsdale/aronRamsdale.vue";
import tierney from "./tierney/kieranTierney.vue";
import white from "./white/benWhite.vue";
import partey from "./partey/thomasPartey.vue";
import Magalhães from "./magalhaes/gabrielMagaihaes.vue";
import Saka from "./saka/bukayoSaka.vue";
import odegaard from "./odegaard/martinOØdegaard.vue";
import jesus from "./jesus/gabrielJesus.vue";
import rowe from "./rowe/emileSmithRowe.vue";
import saliba from "./saliba/williamSaliba.vue";
import martinelli from "./martinelli/gabrielMartinelli.vue";
import lokonga from "./lokonga/alvertSambiLokonga.vue";
import nketiah from "./nketiah/eddieNketiah.vue";
import holding from "./holding/robHolding.vue";
import cedric from "./cedric/cedricSoares.vue";

export default {
  data() {
    return {
      modalOpen: false,
      Hshow: false,
    };
  },
  components: {
    headerComponents,
    ramsdale,
    tierney,
    white,
    partey,
    Magalhães,
    Saka,
    odegaard,
    jesus,
    rowe,
    martinelli,
    saliba,
    lokonga,
    nketiah,
    holding,
    cedric,
  },
};
</script>

<style>
.container {
}
.title {
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

  text-align: center;
  padding: 5.7%;

  display: inline-block;
  width: 100%;
}
.title_detail {
  line-height: 180px;
  text-align: center;
  height: 100px;
  color: white;
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

/* Modal Section */
body {
  margin: 0;
}
div {
  box-sizing: border-box;
}
</style>
