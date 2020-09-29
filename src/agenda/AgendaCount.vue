<template>
  <div>
    <img class="logo" src="../assets/agenda.png" alt="Logo" />
    <div class="roundcorner">{{ count }}</div>
  </div>
</template>

<script>

export default {
  name: 'AgendaCount',

  props: {
    count: {
      type: Number,
      required: true,
    },
  },
};
</script>

<style>
.roundcorner {
  line-height: 30px;
  border-radius: 50%;
  font-size: 20px;
  color: #fff;
  text-align: center;
  background: red;
  position: relative;
  width: 30px;
  height: 30px;
  top: -50px;
  left: 25px;
}
</style>
