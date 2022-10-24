<template>
  <div>
    <div>
      <div class="Jesusblack-bg" v-if="modalOpen == true">
        <div class="white-bg">
          <div style="text-align: center">
            <div class="upwzFoAB">
              <div>
                Name: {{ jesus[0].first_name }} {{ jesus[0].last_name }}
              </div>
              <div>Nationality: {{ jesus[0].Nationality }}</div>
              <div>Appearances: {{ jesus[0].Appearances }}</div>
              <div>Goals: {{ jesus[0].Goals }}</div>
              <div>Assists: {{ jesus[0].Assists }}</div>
            </div>
          </div>
          <button class="custom-btn btn-6" @click="modalClose">
            <span>Close</span>
          </button>
        </div>
      </div>
    </div>

    <div class="Jesus">
      <div class="heart8" @click="clicked"></div>
      <div class="heart8-1" @click="clicked" :class="{ show: Hshow }"></div>
      <div class="image" @click="changeModal"></div>
    </div>
  </div>
</template>

<script>
import playerList from "./jesusInfo.json";
export default {
  data() {
    return {
      jesus: playerList,
      modalOpen: false,
      Hshow: false,
    };
  },
  methods: {
    clicked() {
      this.Hshow = !this.Hshow;
    },
    changeModal() {
      this.modalOpen = true;
      console.log(this.modalOpen);
      console.log(this.rams);
    },
    modalClose() {
      this.modalOpen = false;
      console.log(this.modalOpen);
    },
  },
};
</script>

<style>
/* 선수 이미지  */
/* 선수 이미지  */
.Jesus .image {
  background-image: url("@/components/asenal/img/Jesus.png");
  background-size: 140px 140px;
  background-position: 30px;
  width: 145%;
  height: 100%;
  transform: translateX(-16px) skewX(0deg);
  background-repeat: no-repeat;
}
.Jesus {
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
.Jesus:hover {
  background-color: #ff9c00;
  transform: skewX(0deg) scale(1.3);
  z-index: 1;
}

/* 하트(좋아요) 관련 스타일 */
.show {
  display: block !important;
}
.heart8 {
  width: 15%;
  height: 15%;
  background-image: url(./heart.png);
  background-size: cover;
}
.heart8-1 {
  width: 15%;
  height: 15%;
  background-image: url(./heart_clicked.png);
  background-size: cover;
  position: absolute;
  bottom: 85%;
  display: none;
}

/* 모달 관련 스타일 */
.Jesusblack-bg {
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.445);
  position: fixed;
  z-index: 99999;
  margin: -24%;
  margin-left: -45.4%;
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
