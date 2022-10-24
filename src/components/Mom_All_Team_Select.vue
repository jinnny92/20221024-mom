<template>
  <div class="selectTeam">
    <div class="container2">
      <!--player-->
      <h1 class="pickYou">PICK YOUR FAVORITE</h1>
      <div class="players">
        <div class="player">
          <router-link to="/arsenal"
            ><div class="image" @click="changeIsShow"></div
          ></router-link>
        </div>
        <div class="player">
          <router-link to="/astonvilla"
            ><div class="image" @click="changeIsShow"></div
          ></router-link>
        </div>
        <div class="player">
          <router-link to="/bourn"
            ><div class="image" @click="changeIsShow"></div
          ></router-link>
        </div>
        <div class="player">
          <router-link to="/brentford"
            ><div class="image" @click="changeIsShow"></div
          ></router-link>
        </div>
        <div class="player">
          <router-link to="/brighton"
            ><div class="image" @click="changeIsShow"></div
          ></router-link>
        </div>
        <div class="player">
          <router-link to="/chelsea"
            ><div class="image" @click="changeIsShow"></div
          ></router-link>
        </div>
        <div class="player">
          <router-link to="/everton"
            ><div class="image" @click="changeIsShow"></div
          ></router-link>
        </div>
        <div class="player">
          <router-link to="/forest"
            ><div class="image" @click="changeIsShow"></div
          ></router-link>
        </div>
        <div class="player">
          <router-link to="/full"
            ><div class="image" @click="changeIsShow"></div
          ></router-link>
        </div>
        <div class="player">
          <router-link to="/lees"
            ><div class="image" @click="changeIsShow"></div
          ></router-link>
        </div>
        <div class="player">
          <router-link to="/leic"
            ><div class="image" @click="changeIsShow"></div
          ></router-link>
        </div>
        <div class="player">
          <router-link to="/liverpool"
            ><div class="image" @click="changeIsShow"></div
          ></router-link>
        </div>
        <div class="player">
          <router-link to="/mancity"
            ><div class="image" @click="changeIsShow"></div
          ></router-link>
        </div>
        <div class="player">
          <router-link to="/manu"
            ><div class="image" @click="changeIsShow"></div
          ></router-link>
        </div>
        <div class="player">
          <router-link to="/newcastle"
            ><div class="image" @click="changeIsShow"></div
          ></router-link>
        </div>
        <div class="player">
          <router-link to="/crystal"
            ><div class="image" @click="changeIsShow"></div
          ></router-link>
        </div>
        <div class="player">
          <router-link to="/south"
            ><div class="image" @click="changeIsShow"></div
          ></router-link>
        </div>
        <div class="player">
          <router-link to="/tott"
            ><div class="image" @click="changeIsShow"></div
          ></router-link>
        </div>
        <div class="player">
          <router-link to="/west"
            ><div class="image" @click="changeIsShow"></div
          ></router-link>
        </div>
        <div class="player">
          <router-link to="/wolves"
            ><div class="image" @click="changeIsShow"></div
          ></router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    changeIsShow() {
      this.isShow = true;
      console.log("Go To Parents : ", this.isShow);
      this.$emit("isShowData", this.isShow);
      this.isShow2 = false;
      this.isShow3 = false;
      this.isShow4 = false;
      this.isShow5 = false;
      this.isShow6 = false;
      this.isShow7 = false;
      this.isShow8 = false;
      this.isShow9 = false;
      this.isShow10 = false;
      this.isShow11 = false;
      this.isShow12 = false;
      this.isShow13 = false;
      this.isShow14 = false;
      this.isShow15 = false;
      this.isShow16 = false;
      this.isShow17 = false;
      this.isShow18 = false;
      this.isShow19 = false;
      this.isShow20 = false;
    },
    changeIsShow2() {
      this.isShow2 = true;
      this.isShow = false;
      this.isShow3 = false;
      this.isShow4 = false;
      this.isShow5 = false;
      this.isShow6 = false;
      this.isShow7 = false;
      this.isShow8 = false;
      this.isShow9 = false;
      this.isShow10 = false;
      this.isShow11 = false;
      this.isShow12 = false;
      this.isShow13 = false;
      this.isShow14 = false;
      this.isShow15 = false;
      this.isShow16 = false;
      this.isShow17 = false;
      this.isShow18 = false;
      this.isShow19 = false;
      this.isShow20 = false;
    },
    changeIsShow3() {
      this.isShow3 = true;
      this.isShow = false;
      this.isShow2 = false;
      this.isShow4 = false;
      this.isShow5 = false;
      this.isShow6 = false;
      this.isShow7 = false;
      this.isShow8 = false;
      this.isShow9 = false;
      this.isShow10 = false;
      this.isShow11 = false;
      this.isShow12 = false;
      this.isShow13 = false;
      this.isShow14 = false;
      this.isShow15 = false;
      this.isShow16 = false;
      this.isShow17 = false;
      this.isShow18 = false;
      this.isShow19 = false;
      this.isShow20 = false;
    },
    changeIsShow4() {
      this.isShow4 = true;
      this.isShow = false;
      this.isShow2 = false;
      this.isShow3 = false;
      this.isShow5 = false;
      this.isShow6 = false;
      this.isShow7 = false;
      this.isShow8 = false;
      this.isShow9 = false;
      this.isShow10 = false;
      this.isShow11 = false;
      this.isShow12 = false;
      this.isShow13 = false;
      this.isShow14 = false;
      this.isShow15 = false;
      this.isShow16 = false;
      this.isShow17 = false;
      this.isShow18 = false;
      this.isShow19 = false;
      this.isShow20 = false;
    },
    changeIsShow5() {
      this.isShow5 = true;
      this.isShow = false;
      this.isShow2 = false;
      this.isShow4 = false;
      this.isShow3 = false;
      this.isShow6 = false;
      this.isShow7 = false;
      this.isShow8 = false;
      this.isShow9 = false;
      this.isShow10 = false;
      this.isShow11 = false;
      this.isShow12 = false;
      this.isShow13 = false;
      this.isShow14 = false;
      this.isShow15 = false;
      this.isShow16 = false;
      this.isShow17 = false;
      this.isShow18 = false;
      this.isShow19 = false;
      this.isShow20 = false;
    },
    changeIsShow6() {
      this.isShow6 = true;
      this.isShow = false;
      this.isShow2 = false;
      this.isShow4 = false;
      this.isShow5 = false;
      this.isShow3 = false;
      this.isShow7 = false;
      this.isShow8 = false;
      this.isShow9 = false;
      this.isShow10 = false;
      this.isShow11 = false;
      this.isShow12 = false;
      this.isShow13 = false;
      this.isShow14 = false;
      this.isShow15 = false;
      this.isShow16 = false;
      this.isShow17 = false;
      this.isShow18 = false;
      this.isShow19 = false;
      this.isShow20 = false;
    },
    changeIsShow7() {
      this.isShow7 = true;
      this.isShow = false;
      this.isShow2 = false;
      this.isShow4 = false;
      this.isShow5 = false;
      this.isShow6 = false;
      this.isShow3 = false;
      this.isShow8 = false;
      this.isShow9 = false;
      this.isShow10 = false;
      this.isShow11 = false;
      this.isShow12 = false;
      this.isShow13 = false;
      this.isShow14 = false;
      this.isShow15 = false;
      this.isShow16 = false;
      this.isShow17 = false;
      this.isShow18 = false;
      this.isShow19 = false;
      this.isShow20 = false;
    },
    changeIsShow8() {
      this.isShow8 = true;
      this.isShow = false;
      this.isShow2 = false;
      this.isShow4 = false;
      this.isShow5 = false;
      this.isShow6 = false;
      this.isShow7 = false;
      this.isShow3 = false;
      this.isShow9 = false;
      this.isShow10 = false;
      this.isShow11 = false;
      this.isShow12 = false;
      this.isShow13 = false;
      this.isShow14 = false;
      this.isShow15 = false;
      this.isShow16 = false;
      this.isShow17 = false;
      this.isShow18 = false;
      this.isShow19 = false;
      this.isShow20 = false;
    },
    changeIsShow9() {
      this.isShow9 = true;
      this.isShow = false;
      this.isShow2 = false;
      this.isShow4 = false;
      this.isShow5 = false;
      this.isShow6 = false;
      this.isShow7 = false;
      this.isShow8 = false;
      this.isShow3 = false;
      this.isShow10 = false;
      this.isShow11 = false;
      this.isShow12 = false;
      this.isShow13 = false;
      this.isShow14 = false;
      this.isShow15 = false;
      this.isShow16 = false;
      this.isShow17 = false;
      this.isShow18 = false;
      this.isShow19 = false;
      this.isShow20 = false;
    },
    changeIsShow10() {
      this.isShow10 = true;
      this.isShow = false;
      this.isShow2 = false;
      this.isShow4 = false;
      this.isShow5 = false;
      this.isShow6 = false;
      this.isShow7 = false;
      this.isShow8 = false;
      this.isShow9 = false;
      this.isShow3 = false;
      this.isShow11 = false;
      this.isShow12 = false;
      this.isShow13 = false;
      this.isShow14 = false;
      this.isShow15 = false;
      this.isShow16 = false;
      this.isShow17 = false;
      this.isShow18 = false;
      this.isShow19 = false;
      this.isShow20 = false;
    },
    changeIsShow11() {
      this.isShow11 = true;
      this.isShow = false;
      this.isShow2 = false;
      this.isShow4 = false;
      this.isShow5 = false;
      this.isShow6 = false;
      this.isShow7 = false;
      this.isShow8 = false;
      this.isShow9 = false;
      this.isShow10 = false;
      this.isShow3 = false;
      this.isShow12 = false;
      this.isShow13 = false;
      this.isShow14 = false;
      this.isShow15 = false;
      this.isShow16 = false;
      this.isShow17 = false;
      this.isShow18 = false;
      this.isShow19 = false;
      this.isShow20 = false;
    },
    changeIsShow12() {
      this.isShow12 = true;
      this.isShow = false;
      this.isShow2 = false;
      this.isShow4 = false;
      this.isShow5 = false;
      this.isShow6 = false;
      this.isShow7 = false;
      this.isShow8 = false;
      this.isShow9 = false;
      this.isShow10 = false;
      this.isShow11 = false;
      this.isShow3 = false;
      this.isShow13 = false;
      this.isShow14 = false;
      this.isShow15 = false;
      this.isShow16 = false;
      this.isShow17 = false;
      this.isShow18 = false;
      this.isShow19 = false;
      this.isShow20 = false;
    },
    changeIsShow13() {
      this.isShow13 = true;
      this.isShow = false;
      this.isShow2 = false;
      this.isShow4 = false;
      this.isShow5 = false;
      this.isShow6 = false;
      this.isShow7 = false;
      this.isShow8 = false;
      this.isShow9 = false;
      this.isShow10 = false;
      this.isShow11 = false;
      this.isShow12 = false;
      this.isShow3 = false;
      this.isShow14 = false;
      this.isShow15 = false;
      this.isShow16 = false;
      this.isShow17 = false;
      this.isShow18 = false;
      this.isShow19 = false;
      this.isShow20 = false;
    },
    changeIsShow14() {
      this.isShow14 = true;
      this.isShow = false;
      this.isShow2 = false;
      this.isShow4 = false;
      this.isShow5 = false;
      this.isShow6 = false;
      this.isShow7 = false;
      this.isShow8 = false;
      this.isShow9 = false;
      this.isShow10 = false;
      this.isShow11 = false;
      this.isShow12 = false;
      this.isShow13 = false;
      this.isShow3 = false;
      this.isShow15 = false;
      this.isShow16 = false;
      this.isShow17 = false;
      this.isShow18 = false;
      this.isShow19 = false;
      this.isShow20 = false;
    },
    changeIsShow15() {
      this.isShow15 = true;
      this.isShow = false;
      this.isShow2 = false;
      this.isShow4 = false;
      this.isShow5 = false;
      this.isShow6 = false;
      this.isShow7 = false;
      this.isShow8 = false;
      this.isShow9 = false;
      this.isShow10 = false;
      this.isShow11 = false;
      this.isShow12 = false;
      this.isShow13 = false;
      this.isShow14 = false;
      this.isShow3 = false;
      this.isShow16 = false;
      this.isShow17 = false;
      this.isShow18 = false;
      this.isShow19 = false;
      this.isShow20 = false;
    },
    changeIsShow16() {
      this.isShow16 = true;
      this.isShow = false;
      this.isShow2 = false;
      this.isShow4 = false;
      this.isShow5 = false;
      this.isShow6 = false;
      this.isShow7 = false;
      this.isShow8 = false;
      this.isShow9 = false;
      this.isShow10 = false;
      this.isShow11 = false;
      this.isShow12 = false;
      this.isShow13 = false;
      this.isShow14 = false;
      this.isShow15 = false;
      this.isShow3 = false;
      this.isShow17 = false;
      this.isShow18 = false;
      this.isShow19 = false;
      this.isShow20 = false;
    },
    changeIsShow17() {
      this.isShow17 = true;
      this.isShow = false;
      this.isShow2 = false;
      this.isShow4 = false;
      this.isShow5 = false;
      this.isShow6 = false;
      this.isShow7 = false;
      this.isShow8 = false;
      this.isShow9 = false;
      this.isShow10 = false;
      this.isShow11 = false;
      this.isShow12 = false;
      this.isShow13 = false;
      this.isShow14 = false;
      this.isShow15 = false;
      this.isShow16 = false;
      this.isShow3 = false;
      this.isShow18 = false;
      this.isShow19 = false;
      this.isShow20 = false;
    },
    changeIsShow18() {
      this.isShow18 = true;
      this.isShow = false;
      this.isShow2 = false;
      this.isShow4 = false;
      this.isShow5 = false;
      this.isShow6 = false;
      this.isShow7 = false;
      this.isShow8 = false;
      this.isShow9 = false;
      this.isShow10 = false;
      this.isShow11 = false;
      this.isShow12 = false;
      this.isShow13 = false;
      this.isShow14 = false;
      this.isShow15 = false;
      this.isShow16 = false;
      this.isShow17 = false;
      this.isShow3 = false;
      this.isShow19 = false;
      this.isShow20 = false;
    },
    changeIsShow19() {
      this.isShow19 = true;
      this.isShow = false;
      this.isShow2 = false;
      this.isShow4 = false;
      this.isShow5 = false;
      this.isShow6 = false;
      this.isShow7 = false;
      this.isShow8 = false;
      this.isShow9 = false;
      this.isShow10 = false;
      this.isShow11 = false;
      this.isShow12 = false;
      this.isShow13 = false;
      this.isShow14 = false;
      this.isShow15 = false;
      this.isShow16 = false;
      this.isShow17 = false;
      this.isShow18 = false;
      this.isShow3 = false;
      this.isShow20 = false;
    },
    changeIsShow20() {
      this.isShow20 = true;
      this.isShow = false;
      this.isShow2 = false;
      this.isShow4 = false;
      this.isShow5 = false;
      this.isShow6 = false;
      this.isShow7 = false;
      this.isShow8 = false;
      this.isShow9 = false;
      this.isShow10 = false;
      this.isShow11 = false;
      this.isShow12 = false;
      this.isShow13 = false;
      this.isShow14 = false;
      this.isShow15 = false;
      this.isShow16 = false;
      this.isShow17 = false;
      this.isShow18 = false;
      this.isShow19 = false;
      this.isShow3 = false;
    },
  },
};
</script>

<style>
.selectTeam {
  background: url(../assets/bg_main_0517.jpg) center center fixed no-repeat;
  height: 1032px;
}
.container2 {
  padding: 50px 0;
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
  border-radius: 50%;
  box-sizing: border-box;
  overflow: hidden;
  background-color: #555;

  transition: transform 0.1s, background-color 0.6s;
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
  background-image: url("../assets/Logo/ars1.png");
  background-size: 120px 120px;
  background-position: 33% 67%;
}
.player:nth-child(2) .image {
  background-image: url("../assets/Logo/aston.png");
  background-size: 120px 120px;
  background-position: 33% 67%;
}
.player:nth-child(3) .image {
  background-image: url("../assets/Logo/born.png");
  background-size: 120px 120px;
  background-position: 33% 67%;
}
.player:nth-child(4) .image {
  background-image: url("../assets/Logo/brent.svg");
  background-size: 135px 135px;
  background-position: left 30% bottom 50%;
}
.player:nth-child(5) .image {
  background-image: url("../assets/Logo/brigh.png");
  background-size: 135px 135px;
  background-position: left 30% bottom 50%;
}
.player:nth-child(6) .image {
  background-image: url("../assets/Logo/chel.png");
  background-position: left 32% bottom 50%;
  background-size: 135px 135px;
  background-position: left 30% bottom 50%;
}
.player:nth-child(7) .image {
  background-image: url("../assets/Logo/ever.png");
  background-size: 60px 60px;
  background-size: 130px 130px;
  background-position: left 32% bottom 40%;
}
.player:nth-child(8) .image {
  background-image: url("../assets/Logo/forest.png");
  background-size: 60px 60px;
  background-size: 120px 120px;
  background-position: left 32% bottom 50%;
}
.player:nth-child(9) .image {
  background-image: url("../assets/Logo/full.png");
  background-size: 60px 60px;
  background-size: 120px 120px;
  background-position: left 32% bottom 35%;
}
.player:nth-child(10) .image {
  background-image: url("../assets/Logo/lees.png");
  background-size: 60px 60px;
  background-size: 135px 135px;
  background-position: left 30% bottom 40%;
}

.player:nth-child(11) .image {
  background-image: url("../assets/Logo/leic.png");
  background-size: 60px 60px;
  background-size: 130px 130px;
  background-position: left 32% bottom 50%;
}
.player:nth-child(12) .image {
  background-image: url("../assets/Logo/liverpoolfc_crest.png");
  background-size: 60px 60px;
  background-size: 120px 120px;
  background-position: left 32% bottom 50%;
}
.player:nth-child(13) .image {
  background-image: url("../assets/Logo/mancity.png");
  background-size: 60px 60px;
  background-size: 130px 130px;
  background-position: left 32% bottom 50%;
}
.player:nth-child(14) .image {
  background-image: url("../assets/Logo/manu.png");
  background-size: 60px 60px;
  background-size: 130px 130px;
  background-position: left 32% bottom 50%;
}
.player:nth-child(15) .image {
  background-image: url("../assets/Logo/new.png");
  background-size: 60px 60px;
  background-size: 130px 130px;
  background-position: left 32% bottom 55%;
}
.player:nth-child(16) .image {
  background-image: url("../assets/Logo/palce.png");
  background-size: 60px 60px;
  background-size: 120px 120px;
  background-position: left 32% bottom 50%;
}
.player:nth-child(17) .image {
  background-image: url("../assets/Logo/south.png");
  background-size: 60px 60px;
  background-size: 120px 120px;
  background-position: left 32% bottom 50%;
}
.player:nth-child(18) .image {
  background-image: url("../assets/Logo/tott.png");
  background-size: 60px 60px;
  background-size: 120px 120px;
  background-position: left 32% bottom 50%;
}
.player:nth-child(19) .image {
  background-image: url("../assets/Logo/west.png");
  background-size: 118px 118px;
  background-position: left 32% bottom 33%;
}
.player:nth-child(20) .image {
  background-image: url("../assets/Logo/wolves.png");
  background-size: 60px 60px;
  background-size: 148px 148px;
  background-position: left 27% bottom 45%;
}

.pickYou {
  font-size: 4rem;
  font-weight: bold;
  color: #fff;
  text-shadow: 6px 2px 2px rgb(78, 77, 77);
  top: 80px;
  left: 300px;
  text-align: center;
}
</style>
