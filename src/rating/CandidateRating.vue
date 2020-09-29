<template>
  <div>
    <star-rating
      :max-rating="5"
      :rating="calculatedLevel"
      :read-only="true"
      :increment="0.5"
      :show-rating="false"
      :star-size="20"
      :rounded-corners="true"
      :border-width="4"
      border-color="red"
      active-color="yellow"
    ></star-rating>
  </div>
</template>

<script>
import StarRating from 'vue-star-rating';

export default {
  name: 'CandidateRating',
  components: { StarRating },

  props: {
    level: {
      type: Number,
      required: true,
      validator(value) {
        return (value >= 0 && value <= 10);
      },
    },
  },

  computed: {
    calculatedLevel() {
      return this.level / 2;
    },
  },
};
</script>

<style>
</style>
