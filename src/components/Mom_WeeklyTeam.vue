<template>
  <swiper class="swiper" :options="swiperOption">
    <swiper-slide><img src="@/assets/weekly/week.jpg" alt="" /></swiper-slide>
    <swiper-slide
      ><img src="@/assets/weekly/arsnalmain.jpg" alt=""
    /></swiper-slide>
    <swiper-slide
      ><img src="@/assets/weekly/arsnalmain2.jpg" alt=""
    /></swiper-slide>

    <div class="swiper-pagination" slot="pagination"></div>
    <div class="swiper-button-prev" slot="button-prev"></div>
    <div class="swiper-button-next" slot="button-next"></div>
  </swiper>
</template>

<script>
import "swiper/dist/css/swiper.css";
import { swiper, swiperSlide } from "vue-awesome-swiper";
export default {
  data() {
    return {
      swiperOption: {
        slidesPerView: 1,
        loop: true,
        autoplay: {
          delay: 2500,
        },
        autoHeight: true,
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
  },
  methods: {
    onSlideStart() {
      this.sliding = true;
    },
    onSlideEnd() {
      this.sliding = false;
    },
  },
};
</script>
<style>
.sr-only {
  display: none;
}
.swiper-slide {
  width: 1890 !important;
  min-width: 56px;

  font-size: 14px;
  line-height: 36px;
  text-align: center;
  color: #84868c;
  border: 0;
  border-radius: 18px;
  appearance: none;
  cursor: pointer;
}
</style>
