<template>
  <div>
    <h1>{{ selectedCandidate.name }}</h1>
    <vueper-slides
      arrows-outside
      bullets-outside
      :fade="true"
      fixed-height="500px"
    >
      <vueper-slide
        v-for="(slide, i) in technoSlides"
        :key="i"
        :title="slide.title"
        :content="slide.content"
        :image="slide.image"
      />
    </vueper-slides>
  </div>
</template>

<script>
import { VueperSlides, VueperSlide } from 'vueperslides';
import 'vueperslides/dist/vueperslides.css';
import availableCandidates from '../data/candidates';
import availableSlides from '../data/technologies';

export default {
  name: 'TechnoDetails',
  components: { VueperSlides, VueperSlide },
  props: {
    candidateId: {
      type: [Number, String],
      validator(value) {
        return (Number.isInteger(Number(value)));
      },
    },
  },

  data() {
    return {
      curSlides: [],
      availableSlides,
    };
  },
  computed: {
    technoSlides() {
      this.availableSlides.slides.forEach((element) => {
        if (this.selectedCandidate.technologies.includes(element.title)) {
          this.curSlides.push(element);
        }
      });

      return this.curSlides;
    },
    selectedCandidate() {
      return availableCandidates.geeks[this.candidateId];
    },
  },
};
</script>

<style>
.vueperslide--active:before {
  content: "Technologies!";
  position: absolute;
  top: -18px;
  right: -18px;
  padding: 4px 25px;
  background: red;
  color: #fff;
  font-size: 15px;
  transform: translateX(30%) rotate(45deg);
  transform-origin: 0 0;
  box-shadow: 0 0 9px rgba(0, 0, 0, 0.2);
}
</style>
